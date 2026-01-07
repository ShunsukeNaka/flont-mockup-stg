// import VideoCard from "./VideoCard"

// function TopicRow({ title, Icon }) {
//   return (
//     <section className="relative">
//       {/* アイコン用レイヤー（左余白に飛び出してOK） */}
//       {Icon && (
//         <div className="absolute -left-20 top-0 overflow-visible pointer-events-none">
//           <Icon
//             className="
//               w-40
//               h-40
//               text-neutral-600/40
//               -rotate-45
//               blur-[1px]
//             "
//           />
//         </div>
//       )}

//       {/* 本体（ここで途切れさせる） */}
//       <div
//         className="
//           relative
//           overflow-hidden
//           space-y-4
//         "
//       >
//         {/* タイトル行 */}
//         <div className="relative z-10 flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-neutral-100">
//             {title}
//           </h2>

//           <button
//             className="
//               text-sm
//               text-neutral-400
//               hover:text-neutral-200
//               transition
//               whitespace-nowrap
//             "
//           >
//             and more →
//           </button>
//         </div>

//         {/* 横スクロール */}
//         <div className="relative -mx-6 px-6">
//           <div
//             className="
//               flex
//               gap-4
//               overflow-x-auto
//               pb-3
//               scroll-smooth
//             "
//           >
//             {Array.from({ length: 8 }).map((_, i) => (
//               <VideoCard key={i} id={i}/>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TopicRow

import VideoRow from "./VideoRow"

function TopicRow({ title, Icon, movies, count = 10 }) {
  return (
    <section className="relative">
      {/* アイコンレイヤー */}
      {Icon && (
        <div className="absolute -left-20 top-0 pointer-events-none">
          <Icon className="w-40 h-40 text-neutral-600/40 -rotate-45 blur-[1px]" />
        </div>
      )}

      <div className="relative overflow-hidden space-y-4">
        {/* タイトル */}
        <div className="relative z-10 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-100">
            {title}
          </h2>

          <button className="text-sm text-neutral-400 hover:text-neutral-200 transition">
            and more →
          </button>
        </div>

        {/* 横スクロール */}
        <VideoRow movies={movies} count={count} />
      </div>
    </section>
  )
}

export default TopicRow
