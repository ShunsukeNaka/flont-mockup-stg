// function VideoCard() {
//   return (
//     <div
//       className="
//         group
//         relative
//         w-40
//         h-64
//         rounded-xl
//         overflow-hidden
//         bg-neutral-800
//         shrink-0
//         transition
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-xl
//         hover:shadow-black/40
//       "
//     >
//       {/* サムネイル */}
//       <img
//         src="https://placehold.co/320x480"
//         alt=""
//         className="
//           h-full
//           w-full
//           object-cover
//           transition
//           duration-300
//           group-hover:scale-105
//         "
//       />

//       {/* 下部情報レイヤー */}
//       <div
//         className="
//           absolute
//           bottom-0
//           left-0
//           w-full
//           h-1/4
//           bg-neutral-900/70
//           backdrop-blur-sm
//           p-2
//           flex
//           flex-col
//           justify-end
//           transition
//           duration-300
//           group-hover:bg-neutral-900/80
//           pointer-events-none
//         "
//       >
//         <p className="text-xs text-neutral-300">
//             ▷12.3万 回再生
//         </p>
//         <p className="text-sm font-semibold leading-tight">
//           サンプル動画タイトル
//         </p>
//       </div>
//     </div>
//   )
// }

// export default VideoCard
import { Play } from "lucide-react"

function VideoCard() {
  return (
    <div
      className="
        group
        relative
        w-40
        h-64
        rounded-xl
        overflow-hidden
        bg-neutral-800
        shrink-0
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-black/40
      "
    >
      {/* サムネイル */}
      <img
        src="https://placehold.co/320x480"
        alt=""
        className="
          h-full
          w-full
          object-cover
          transition
          duration-300
          group-hover:scale-105
        "
      />

      {/* 中央再生ボタン */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
          pointer-events-none
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            w-14
            h-14
            rounded-full
            bg-neutral-900/70
            backdrop-blur-sm
          "
        >
          <Play className="w-7 h-7 text-white fill-white ml-0.5" />
        </div>
      </div>

      {/* 下部情報レイヤー */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-1/4
          bg-neutral-900/70
          backdrop-blur-sm
          p-2
          flex
          flex-col
          justify-end
          transition
          duration-300
          group-hover:bg-neutral-900/80
          pointer-events-none
        "
      >
        <p className="text-xs text-neutral-300">
          ▷12.3万 回再生
        </p>
        <p className="text-sm font-semibold leading-tight">
          サンプル動画タイトル
        </p>
      </div>
    </div>
  )
}

export default VideoCard
