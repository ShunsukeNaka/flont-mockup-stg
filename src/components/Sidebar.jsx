import { Home, Flame, Crown, Heart } from 'lucide-react'
// function Sidebar() {
//   return (
//     <aside className="w-64 bg-neutral-900 text-neutral-200 border-r border-neutral-800">
//       <nav className="p-4 space-y-1">
//         <SidebarItem label="Home" />
//         <SidebarItem label="Trending" />
//         <SidebarItem label="Ranking" />
//         <SidebarItem label="Favorites" />
//       </nav>
//     </aside>
//   )
// }

function Sidebar() {
  return (
    <aside className="
      w-64
      bg-neutral-900
      text-neutral-200
      border-r border-neutral-800
    ">
      <nav className="p-4 space-y-1">
        <SidebarItem icon={Home} label="Home"  />
        <SidebarItem icon={Flame} label="Trending" />
        <SidebarItem icon={Crown} label="Ranking" />
        <SidebarItem icon={Heart} label="Favorites" />
      </nav>
    </aside>
  )
}

// function SidebarItem({ label }) {
//   return (
//     <div className="
//       px-3 py-2 rounded-lg
//       cursor-pointer
//       hover:bg-neutral-800
//       transition
//     ">
//       {label}
//     </div>
//   )
// }
function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div
      className={`
        flex items-center gap-3
        px-3 py-2 rounded-lg
        cursor-pointer
        transition
        ${
          active
            ? 'bg-neutral-800 text-white'
            : 'hover:bg-neutral-800'
        }
      `}
    >
      <Icon size={18} />
      <span className="text-sm">{label}</span>
    </div>
  )
}
export default Sidebar