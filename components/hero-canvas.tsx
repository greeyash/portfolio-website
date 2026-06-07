'use client'

import { useEffect, useRef } from 'react'

type Bubble = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  baseVy: number
  alpha: number
  powder: boolean
}

const POWDER = { r: 163, g: 196, b: 235 } // #A3C4EB
const ALICE = { r: 246, g: 250, b: 255 } // #F6FAFF

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let bubbles: Bubble[] = []
    let rafId = 0
    const parent = canvas.parentElement as HTMLElement

    const mouse = { x: -9999, y: -9999, active: false }

    const makeBubble = (initial = false): Bubble => {
      const r = 6 + Math.random() * 26
      const powder = Math.random() > 0.4
      const baseVy = -(0.12 + Math.random() * 0.45) * (40 / (r + 14))
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + r + Math.random() * 60,
        r,
        vx: (Math.random() - 0.5) * 0.25,
        vy: baseVy,
        baseVy,
        alpha: 0.12 + Math.random() * 0.4,
        powder,
      }
    }

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.min(70, Math.max(28, Math.floor((width * height) / 22000)))
      if (bubbles.length === 0) {
        bubbles = Array.from({ length: target }, () => makeBubble(true))
      } else if (bubbles.length < target) {
        while (bubbles.length < target) bubbles.push(makeBubble(true))
      } else if (bubbles.length > target) {
        bubbles.length = target
      }
    }

    const draw = (b: Bubble) => {
      const c = b.powder ? POWDER : ALICE
      const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
      grad.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${b.alpha})`)
      grad.addColorStop(0.7, `rgba(${c.r}, ${c.g}, ${c.b}, ${b.alpha * 0.5})`)
      grad.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`)
      ctx.beginPath()
      ctx.fillStyle = grad
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.fill()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const b of bubbles) {
        // mouse repulsion / scatter
        if (mouse.active) {
          const dx = b.x - mouse.x
          const dy = b.y - mouse.y
          const dist2 = dx * dx + dy * dy
          const radius = 130
          if (dist2 < radius * radius) {
            const dist = Math.sqrt(dist2) || 1
            const force = (1 - dist / radius) * 1.8
            b.vx += (dx / dist) * force
            b.vy += (dy / dist) * force
          }
        }

        b.x += b.vx
        b.y += b.vy

        // gentle horizontal sway
        b.vx += Math.sin(b.y * 0.01) * 0.002
        // ease velocities back toward natural drift
        b.vx *= 0.96
        b.vy += (b.baseVy - b.vy) * 0.03

        // wrap / respawn
        if (b.y < -b.r - 20) {
          Object.assign(b, makeBubble(false))
        }
        if (b.x < -b.r - 40) b.x = width + b.r
        if (b.x > width + b.r + 40) b.x = -b.r

        draw(b)
      }

      rafId = requestAnimationFrame(step)
    }

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      // only react while the pointer is within the hero bounds
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        mouse.x = x
        mouse.y = y
        mouse.active = true
      } else {
        mouse.active = false
      }
    }
    const onLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('blur', onLeave)

    if (prefersReduced) {
      // render a single static frame
      ctx.clearRect(0, 0, width, height)
      for (const b of bubbles) draw(b)
    } else {
      rafId = requestAnimationFrame(step)
    }

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('blur', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full"
    />
  )
}
