// import { Home, Flame, Crown, Heart } from 'lucide-react'
// import { Link } from 'react-router-dom'

// function Sidebar() {
//   return (
//     <aside className="
//       w-64
//       bg-neutral-900
//       text-neutral-200
//       border-r border-neutral-800
//     ">
//       <nav className="p-4 space-y-1">
//         <Link to="/">
//           <SidebarItem icon={Home} label="Home"  />
//         </Link>
//         <Link to="/trend">
//           <SidebarItem icon={Flame} label="Trending" />
//         </Link>
//         <Link to="/ranking">
//           <SidebarItem icon={Crown} label="Ranking" />
//         </Link>
//         <Link to="/favorite">
//           <SidebarItem icon={Heart} label="Favorites" />
//         </Link>
//       </nav>
//     </aside>
//   )
// }

// function SidebarItem({ icon: Icon, label, active }) {
//   return (
//     <div
//       className={`
//         flex items-center gap-3
//         px-3 py-2 rounded-lg
//         cursor-pointer
//         transition
//         ${
//           active
//             ? 'bg-neutral-800 text-white'
//             : 'hover:bg-neutral-800'
//         }
//       `}
//     >
//       <Icon size={18} />
//       <span className="text-sm">{label}</span>
//     </div>
//   )
// }
// export default Sidebar

import { useState } from "react"
// import { Home, Flame, Crown, Heart, Menu } from "lucide-react"
import { Home, Flame, Crown, Heart, Menu, ChevronLeft } from "lucide-react"

import { Link, useLocation } from "react-router-dom"

function Sidebar() {
  const [open, setOpen] = useState(true)
  const location = useLocation()

  return (
    <>
      {/* スマホ用トグル */}
      <button
        className="
          fixed top-4 left-4 z-50
          md:hidden
          p-2 rounded-lg
          bg-neutral-900 text-white
        "
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-40
          h-screen
          bg-neutral-900
          text-neutral-200
          border-r border-neutral-800
          transition-all duration-300
          ${open ? "w-64" : "w-16"}
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* ヘッダー */}
        {/* <div className="flex items-center justify-between p-4">
          {open && <span className="text-lg font-bold">Menu</span>}
          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-400 hover:text-white"
          >
            <Menu size={18} />
          </button>
        </div> */}
        <div className="flex items-center justify-between p-4">
          {open && <span className="text-lg font-bold">Menu</span>}

          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-400 hover:text-white transition"
            aria-label="toggle sidebar"
          >
            {open ? <ChevronLeft size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* ナビ */}
        <nav className="px-2 space-y-1">
          <SidebarLink to="/" icon={Home} label="Home" open={open} active={location.pathname === "/"} />
          <SidebarLink to="/trend" icon={Flame} label="Trending" open={open} active={location.pathname === "/trend"} />
          <SidebarLink to="/ranking" icon={Crown} label="Ranking" open={open} active={location.pathname === "/ranking"} />
          <SidebarLink to="/favorite" icon={Heart} label="Favorites" open={open} active={location.pathname === "/favorite"} />
        </nav>
      </aside>
    </>
  )
}

function SidebarLink({ to, icon: Icon, label, open, active }) {
  return (
    <Link to={to}>
      <div
        className={`
          flex items-center gap-3
          px-3 py-2 rounded-lg
          cursor-pointer
          transition
          ${active ? "bg-neutral-800 text-white" : "hover:bg-neutral-800"}
        `}
      >
        <Icon size={18} />
        {open && <span className="text-sm">{label}</span>}
      </div>
    </Link>
  )
}

export default Sidebar
