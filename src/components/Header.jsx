// import { User } from 'lucide-react'

// function Header() {
//   return (
//     <header className="h-20 bg-neutral-950 border-b border-neutral-800">
//       <div className="relative h-full flex items-center px-6">
//         {/* 中央タイトル */}
//         <h1
//           className="
//             absolute left-1/2 -translate-x-1/2
//             text-xl font-semibold text-neutral-100
//           "
//         >
//           Mooooovy Demo
//         </h1>

//         {/* 右側アカウントアイコン */}
//         <button
//           className="
//             ml-auto
//             p-2
//             rounded-full
//             text-neutral-400
//             hover:text-neutral-100
//             hover:bg-neutral-800
//             transition
//           "
//           aria-label="account"
//         >
//           <User size={22} />
//         </button>
//       </div>
//     </header>
//   )
// }

// export default Header;
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

function Header() {
  return (
    <header className="h-20 bg-neutral-950 border-b border-neutral-800">
      <div className="relative h-full flex items-center px-6">
        {/* 中央タイトル */}
        <h1
          className="
            absolute left-1/2 -translate-x-1/2
            text-xl font-semibold text-neutral-100
            select-none
          "
        >
          Mooooovy Demo
        </h1>

        {/* 右側アカウントアイコン */}
        <Link
          to="/account"
          className="
            ml-auto
            p-2
            rounded-full
            text-neutral-400
            hover:text-neutral-100
            hover:bg-neutral-800
            transition
          "
          aria-label="account"
        >
          <User size={22} />
        </Link>
      </div>
    </header>
  )
}

export default Header
