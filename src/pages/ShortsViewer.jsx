// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"

// const ITEMS = Array.from({ length: 12 }).map((_, i) => i)

// function ShortsViewer() {
//   const { id } = useParams()
//   const [index, setIndex] = useState(
//     Math.min(Math.max(Number(id) || 0, 0), ITEMS.length - 1)
//   )

//   // キー操作
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowDown") {
//         setIndex((i) => Math.min(i + 1, ITEMS.length - 1))
//       }
//       if (e.key === "ArrowUp") {
//         setIndex((i) => Math.max(i - 1, 0))
//       }
//     }

//     window.addEventListener("keydown", onKey)
//     return () => window.removeEventListener("keydown", onKey)
//   }, [])

//   // ホイール操作
//   useEffect(() => {
//     let locked = false

//     const onWheel = (e) => {
//       e.preventDefault()
//       if (locked) return
//       locked = true

//       if (e.deltaY > 0) {
//         setIndex((i) => Math.min(i + 1, ITEMS.length - 1))
//       } else {
//         setIndex((i) => Math.max(i - 1, 0))
//       }

//       setTimeout(() => (locked = false), 350)
//     }

//     window.addEventListener("wheel", onWheel, { passive: false })
//     return () => window.removeEventListener("wheel", onWheel)
//   }, [])

//   return (
//     <div className="h-full w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
//       {/* 縦動画表示枠 */}
//       {/* <div className="aspect-[9/16] h-[90%] max-w-[360px] overflow-hidden"> */}
//       <div className="aspect-[9/16] h-[90%] max-w-[540px] overflow-hidden">
//         <div
//           className="h-full transition-transform duration-300 ease-out"
//           style={{
//             transform: `translateY(-${index * 100}%)`,
//           }}
//         >
//           {ITEMS.map((i) => (
//             <div
//               key={i}
//               className="h-full flex items-center justify-center"
//             >
//               <img
//                 src={`https://picsum.photos/seed/${i}/1280/1280`}
//                 alt=""
//                 className="h-full w-full object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShortsViewer

import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const VIDEOS = [
  "/movies/recuruit-1.mp4",
  "/movies/recuruit-2.mp4",
  "/movies/recuruit-3.mp4",
]

function ShortsViewer() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const videoRefs = useRef([])

  const [index, setIndex] = useState(
    Math.min(Math.max(Number(id) || 0, 0), VIDEOS.length - 1)
  )

  /* bodyスクロール無効 */
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = original)
  }, [])

  /* 表示中の動画のみ再生 */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [index])

  /* ホイール操作（PC） */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let locked = false

    const onWheel = (e) => {
      e.preventDefault()
      if (locked) return
      locked = true

      if (e.deltaY > 0) {
        setIndex((i) => Math.min(i + 1, VIDEOS.length - 1))
      } else {
        setIndex((i) => Math.max(i - 1, 0))
      }

      setTimeout(() => (locked = false), 350)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  /* タッチ操作（スマホ） */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let startY = 0
    let locked = false
    const THRESHOLD = 50

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
        setIndex((i) => Math.min(i + 1, VIDEOS.length - 1))
      } else {
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
        bg-black
        flex items-center justify-center
        overflow-hidden
        overscroll-none
        touch-none
      "
    >
      {/* 縦動画フレーム */}
      <div className="aspect-[9/16] h-[90%] max-w-[540px] overflow-hidden">
        <div
          className="h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {VIDEOS.map((src, i) => (
            <div key={i} className="h-full w-full">
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={src}
                className="h-full w-full object-cover"
                muted
                playsInline
                loop
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShortsViewer
