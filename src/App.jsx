import { Routes, Route ,useLocation} from 'react-router-dom'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import TopicRow from "./components/TopicRow"
import Home from './pages/Home'
import Account from './pages/Account'
import Trend from './pages/Trend'
import Ranking from './pages/Ranking'
import Favorite from './pages/Favorite'
import ShortsViewer from './pages/ShortsViewer'

function App() {
  // const location = useLocation();

  // const isShorts = location.pathname.startsWith('/shorts');
  // if (isShorts){
  //   return(

  //   )
  // }
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* <main className="flex-1">
          <div className="pl-24 pr-6 py-6 max-w-[1400px] space-y-12">
            <TopicRow title="Trending" Icon={Flame} />
            <TopicRow title="Ranking" Icon={Crown} />
            <TopicRow title="Favorites" Icon={Heart} />
          </div>
        </main> */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/trend" element={<Trend />}/>
            <Route path="/ranking" element={<Ranking />}/>
            <Route path="/favorite" element={<Favorite />}/>
            <Route path="/shorts/:id" element={<ShortsViewer />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
