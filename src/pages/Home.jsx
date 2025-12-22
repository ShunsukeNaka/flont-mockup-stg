import TopicRow from "../components/TopicRow";
import { Flame, Crown, Heart } from "lucide-react"

function Home(){
    return(
        <div className="pl-24 pr-6 py-6 max-w-[1400px] space-y-12">
            <TopicRow title="Trending" Icon={Flame} />
            <TopicRow title="Ranking" Icon={Crown} />
            <TopicRow title="Favorites" Icon={Heart} />
        </div>
    )
}

export default Home;