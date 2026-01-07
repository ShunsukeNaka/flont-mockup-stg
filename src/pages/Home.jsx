// import TopicRow from "../components/TopicRow";
// import { Flame, Crown, Heart } from "lucide-react"

// function Home(){
//     return(
//         <div className="pl-24 pr-6 py-6 max-w-[1400px] space-y-12">
//             <TopicRow title="Trending" Icon={Flame} />
//             <TopicRow title="Ranking" Icon={Crown} />
//             <TopicRow title="Favorites" Icon={Heart} />
//         </div>
//     )
// }

// export default Home;

import TopicRow from "../components/TopicRow"
import { Flame, Crown, Heart } from "lucide-react"

function Home() {
  // 今回は全行で同じ動画セットを使う想定
  const movies = [
    "/movies/recuruit-1.mp4",
    "/movies/recuruit-2.mp4",
    "/movies/recuruit-3.mp4",
  ]

  return (
    <div className="pl-24 pr-6 py-6 max-w-[1400px] space-y-12">
      <TopicRow
        title="Trending"
        Icon={Flame}
        movies={movies}
        count={10}
      />

      <TopicRow
        title="Ranking"
        Icon={Crown}
        movies={movies}
        count={10}
      />

      <TopicRow
        title="Favorites"
        Icon={Heart}
        movies={movies}
        count={10}
      />
    </div>
  )
}

export default Home
