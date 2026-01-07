import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const ITEMS = Array.from({ length: 12 }).map((_, i) => i)

function ShortsViewer() {
  const { id } = useParams()
  const containerRef = useRef(null)

  const [index, setIndex] = useState(
    Math.min(Math.max(Number(id) || 0, 0), ITEMS.length - 1)
  )

  /* ------------------------------
     body スクロールを完全に無効化
  ------------------------------ */
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = original
    }
  }, [])

  /* ------------------------------
     キーボード操作（PC）
  ------------------------------ */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") {
        setIndex((i) => Math.min(i + 1, ITEMS.length - 1))
      }
      if (e.key === "ArrowUp") {
        setIndex((i) => Math.max(i - 1, 0))
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  /* ------------------------------
     ホイール操作（PC）
  ------------------------------ */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let locked = false

    const onWheel = (e) => {
      e.preventDefault()
      if (locked) return
      locked = true

      if (e.deltaY > 0) {
        setIndex((i) => Math.min(i + 1, ITEMS.length - 1))
      } else {
        setIndex((i) => Math.max(i - 1, 0))
      }

      setTimeout(() => (locked = false), 350)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  /* ------------------------------
     タッチ操作（スマホ）
  ------------------------------ */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let startY = 0
    let locked = false
    const THRESHOLD = 50 // スワイプ判定距離(px)

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY
    }

    const onTouchEnd = (e) => {
      if (locked) return

      const endY = e.changedTouches[0].clientY
      const diff = startY - endY

      if (Math.abs(diff) < THRESHOLD) return

      locked = true

      if (diff > 0) {
        // 上スワイプ → 次
        setIndex((i) => Math.min(i + 1, ITEMS.length - 1))
      } else {
        // 下スワイプ → 前
        setIndex((i) => Math.max(i - 1, 0))
      }

      setTimeout(() => (locked = false), 350)
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchend", onTouchEnd)

    return () => {
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="
        h-screen w-screen
        bg-neutral-950
        flex items-center justify-center
        overflow-hidden
        overscroll-none
        touch-none
      "
    >
      {/* 縦動画枠 */}
      <div className="aspect-[9/16] h-[90%] max-w-[540px] overflow-hidden">
        <div
          className="h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(-${index * 100}%)`,
          }}
        >
          {ITEMS.map((i) => (
            <div
              key={i}
              className="h-full flex items-center justify-center"
            >
              <img
                src={`https://picsum.photos/seed/${i}/1280/1280`}
                alt=""
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShortsViewer
