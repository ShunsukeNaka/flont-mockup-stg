// import VideoCard from "./VideoCard";
// import { Home, Flame, Crown, Heart } from 'lucide-react'

// function CardGrid({ title}) {
//   return (
//     <section className="relative">
//       <div className="space-y-6 px-6">

//         {/* タイトル行 */}
//         <div className="flex items-center justify-between max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold text-neutral-100">
//             {title}
//           </h2>
//         </div>

//         {/* グリッド */}
//         <div
//           className="
//             grid
//             grid-cols-6
//             gap-x-2
//             gap-y-4
//             max-w-6xl
//             mx-auto
//           "
//         >
//           {Array.from({ length: 36 }).map((_, i) => (
//             <VideoCard key={i} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default CardGrid;

// ==============================================================
// import VideoCard from "./VideoCard";
// import { Home, Flame, Crown, Heart } from "lucide-react";

// const TITLE_ICON_MAP = {
//   home: Home,
//   trend: Flame,
//   ranking: Crown,
//   favorite: Heart,
// };

// function CardGrid({ title, type }) {
//   const Icon = TITLE_ICON_MAP[type];

//   return (
//     <section className="relative">
//       <div className="space-y-6 px-6">

//         {/* タイトル行 */}
//         <div className="flex items-center max-w-6xl mx-auto">
//           <div className="flex items-center gap-3">
//             {Icon && <Icon className="w-14 h-14 text-neutral-100" />}
//             <h2 className="text-3xl font-semibold text-neutral-100">
//               {title}
//             </h2>
//           </div>
//         </div>

//         {/* グリッド */}
//         <div
//           className="
//             grid
//             grid-cols-6
//             gap-x-2
//             gap-y-4
//             max-w-6xl
//             mx-auto
//           "
//         >
//           {Array.from({ length: 36 }).map((_, i) => (
//             <VideoCard key={i} id={i} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default CardGrid;
// ==============================================================


import VideoCard from "./VideoCard"
import { Home, Flame, Crown, Heart } from "lucide-react"

const TITLE_ICON_MAP = {
  home: Home,
  trend: Flame,
  ranking: Crown,
  favorite: Heart,
}

function CardGrid({ title, type }) {
  const Icon = TITLE_ICON_MAP[type]

  return (
    <section className="relative w-full overflow-x-hidden">
      <div className="space-y-6 px-4 sm:px-6">

        {/* タイトル行 */}
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            {Icon && (
              <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-neutral-100" />
            )}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-100">
              {title}
            </h2>
          </div>
        </div>

        {/* グリッド */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-x-2
            gap-y-4
            max-w-6xl
            mx-auto
          "
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <VideoCard key={i} id={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default CardGrid
