import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TopicRow from "./components/TopicRow"
import { Flame, Crown, Heart } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1">
          <div className="pl-24 pr-6 py-6 max-w-[1400px] space-y-12">
            <TopicRow title="Trending" Icon={Flame} />
            <TopicRow title="Ranking" Icon={Crown} />
            <TopicRow title="Favorites" Icon={Heart} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
