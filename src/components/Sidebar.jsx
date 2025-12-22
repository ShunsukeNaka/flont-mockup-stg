import { Home, Flame, Crown, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="
      w-64
      bg-neutral-900
      text-neutral-200
      border-r border-neutral-800
    ">
      <nav className="p-4 space-y-1">
        <Link to="/">
          <SidebarItem icon={Home} label="Home"  />
        </Link>
        
        <SidebarItem icon={Flame} label="Trending" />
        <SidebarItem icon={Crown} label="Ranking" />
        <SidebarItem icon={Heart} label="Favorites" />
      </nav>
    </aside>
  )
}

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