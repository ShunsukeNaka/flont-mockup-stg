import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ITEMS = Array.from({ length: 12 }).map((_, i) => i)

function ShortsViewer() {
  const { id } = useParams()
  const [index, setIndex] = useState(
    Math.min(Math.max(Number(id) || 0, 0), ITEMS.length - 1)
  )

  // キー操作
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

  // ホイール操作
  useEffect(() => {
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

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  return (
    <div className="h-full w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* 縦動画表示枠 */}
      {/* <div className="aspect-[9/16] h-[90%] max-w-[360px] overflow-hidden"> */}
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
