// import VideoCard from "./VideoCard"

// const movies = [
//   "/movies/recuruit-1.mp4",
//   "/movies/recuruit-2.mp4",
//   "/movies/recuruit-3.mp4",
// ]

// function VideoRow() {
//   return (
//     <div className="flex gap-4 overflow-x-auto py-2">
//       {Array.from({ length: 10 }).map((_, index) => (
//         <VideoCard
//           key={index}
//           id={index}
//           videoSrc={movies[index % movies.length]}
//         />
//       ))}
//     </div>
//   )
// }

// export default VideoRow;

import VideoCard from "./VideoCard"

/**
 * 横並び動画列コンポーネント
 *
 * @param {string[]} movies - 動画URL配列
 * @param {number} count - 表示カード数（デフォルト10）
 */
function VideoRow({ movies, count = 10 }) {
  return (
    <div className="relative -mx-6 px-6">
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          pb-3
          scroll-smooth
        "
      >
        {Array.from({ length: count }).map((_, index) => (
          <VideoCard
            key={index}
            id={index}
            videoSrc={movies[index % movies.length]}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoRow
