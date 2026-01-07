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

// import { useParams } from "react-router-dom"
// import { useEffect, useRef, useState } from "react"

// const VIDEOS = [
//   "/movies/recuruit-1.mp4",
//   "/movies/recuruit-2.mp4",
//   "/movies/recuruit-3.mp4",
// ]

// function ShortsViewer() {
//   const { id } = useParams()
//   const containerRef = useRef(null)
//   const videoRefs = useRef([])

//   const [index, setIndex] = useState(
//     Math.min(Math.max(Number(id) || 0, 0), VIDEOS.length - 1)
//   )
//   const [muted, setMuted] = useState(true)

//   /* bodyスクロール無効 */
//   useEffect(() => {
//     const original = document.body.style.overflow
//     document.body.style.overflow = "hidden"
//     return () => (document.body.style.overflow = original)
//   }, [])

//   /* 表示中の動画だけ再生 */
//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return
//       if (i === index) {
//         video.currentTime = 0
//         video.muted = muted
//         video.play().catch(() => {})
//       } else {
//         video.pause()
//       }
//     })
//   }, [index, muted])

//   /* ホイール（PC） */
//   useEffect(() => {
//     const el = containerRef.current
//     if (!el) return

//     let locked = false
//     const onWheel = (e) => {
//       e.preventDefault()
//       if (locked) return
//       locked = true

//       setIndex((i) =>
//         e.deltaY > 0
//           ? Math.min(i + 1, VIDEOS.length - 1)
//           : Math.max(i - 1, 0)
//       )

//       setTimeout(() => (locked = false), 350)
//     }

//     el.addEventListener("wheel", onWheel, { passive: false })
//     return () => el.removeEventListener("wheel", onWheel)
//   }, [])

//   /* タッチ（スマホ） */
//   useEffect(() => {
//     const el = containerRef.current
//     if (!el) return

//     let startY = 0
//     let locked = false
//     const THRESHOLD = 50

//     const onTouchStart = (e) => {
//       startY = e.touches[0].clientY
//     }

//     const onTouchEnd = (e) => {
//       if (locked) return
//       const diff = startY - e.changedTouches[0].clientY
//       if (Math.abs(diff) < THRESHOLD) return

//       locked = true
//       setIndex((i) =>
//         diff > 0
//           ? Math.min(i + 1, VIDEOS.length - 1)
//           : Math.max(i - 1, 0)
//       )

//       setTimeout(() => (locked = false), 350)
//     }

//     el.addEventListener("touchstart", onTouchStart, { passive: true })
//     el.addEventListener("touchend", onTouchEnd)

//     return () => {
//       el.removeEventListener("touchstart", onTouchStart)
//       el.removeEventListener("touchend", onTouchEnd)
//     }
//   }, [])

//   const toggleSound = () => setMuted((m) => !m)

//   return (
//     <div
//       ref={containerRef}
//       onClick={toggleSound}
//       className="
//         h-screen w-screen bg-black
//         flex items-center justify-center
//         overflow-hidden overscroll-none
//       "
//     >
//       {/* 表示枠 */}
//       <div className="aspect-[9/16] h-[90%] max-w-[540px] overflow-hidden relative">
//         {/* ★ 高さを動画本数分確保 */}
//         <div
//           className="transition-transform duration-300 ease-out"
//           style={{
//             height: `${VIDEOS.length * 100}%`,
//             transform: `translateY(-${index * (100 / VIDEOS.length)}%)`,
//           }}
//         >
//           {VIDEOS.map((src, i) => (
//             <div
//               key={i}
//               className="h-[calc(100%/3)] w-full"
//             >
//               <video
//                 ref={(el) => (videoRefs.current[i] = el)}
//                 src={src}
//                 className="h-full w-full object-cover"
//                 playsInline
//                 loop
//                 muted={muted}
//                 preload="metadata"
//               />
//             </div>
//           ))}
//         </div>

//         {/* 音状態表示 */}
//         <div className="absolute bottom-6 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
//           {muted ? "🔇 タップで音ON" : "🔊 音あり"}
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
  const [muted, setMuted] = useState(true)
  const [liked, setLiked] = useState(false)
  const [likeFx, setLikeFx] = useState(false)

  /* bodyスクロール無効 */
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = original)
  }, [])

  /* 動画制御 */
  useEffect(() => {
    setLiked(false)
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.currentTime = 0
        video.muted = muted
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [index, muted])

  /* ホイール（PC） */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let locked = false
    const onWheel = (e) => {
      e.preventDefault()
      if (locked) return
      locked = true

      setIndex((i) =>
        e.deltaY > 0
          ? Math.min(i + 1, VIDEOS.length - 1)
          : Math.max(i - 1, 0)
      )

      setTimeout(() => (locked = false), 350)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  /* タッチ（縦＋横判定） */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let startX = 0
    let startY = 0
    let locked = false
    const THRESHOLD = 50

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const onTouchEnd = (e) => {
      if (locked) return

      const dx = e.changedTouches[0].clientX - startX
      const dy = startY - e.changedTouches[0].clientY

      /* 横スワイプ（右）＝お気に入り */
      if (dx > THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        locked = true
        setLiked(true)
        setLikeFx(true)
        setTimeout(() => setLikeFx(false), 600)
        setTimeout(() => (locked = false), 350)
        return
      }

      /* 縦スワイプ */
      if (Math.abs(dy) < THRESHOLD) return

      locked = true
      setIndex((i) =>
        dy > 0
          ? Math.min(i + 1, VIDEOS.length - 1)
          : Math.max(i - 1, 0)
      )

      setTimeout(() => (locked = false), 350)
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchend", onTouchEnd)

    return () => {
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  const toggleSound = () => setMuted((m) => !m)

  return (
    <div
      ref={containerRef}
      onClick={toggleSound}
      className="
        h-screen w-screen bg-black
        flex items-center justify-center
        overflow-hidden overscroll-none
      "
    >
      {/* 表示枠 */}
      <div className="aspect-[9/16] h-[90%] max-w-[540px] relative overflow-hidden">

        {/* スライド本体 */}
        <div
          className={`transition-transform duration-300 ease-out ${
            likeFx ? "translate-x-6" : ""
          }`}
          style={{
            height: `${VIDEOS.length * 100}%`,
            transform: `translateY(-${index * (100 / VIDEOS.length)}%)`,
          }}
        >
          {VIDEOS.map((src, i) => (
            <div key={i} className="h-[calc(100%/3)] w-full">
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={src}
                className="h-full w-full object-cover"
                playsInline
                loop
                muted={muted}
                preload="metadata"
              />
            </div>
          ))}
        </div>

        {/* ❤️ お気に入りエフェクト */}
        {likeFx && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-red-500 text-7xl animate-ping">❤️</div>
          </div>
        )}

        {/* 状態UI */}
        <div className="absolute bottom-6 right-4 space-y-2 text-white text-sm">
          <div className="bg-black/50 px-3 py-1 rounded-full">
            {muted ? "🔇 タップで音ON" : "🔊 音あり"}
          </div>
          {liked && (
            <div className="bg-red-500/80 px-3 py-1 rounded-full">
              ❤️ お気に入り
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShortsViewer
