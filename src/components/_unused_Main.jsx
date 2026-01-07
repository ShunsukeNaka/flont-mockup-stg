// 使ってないファイル

import TopicRow from './TopicRow'

function Main() {
  return (
    // <main className="
    //   flex-1
    //   bg-neutral-950
    //   text-neutral-100
    //   overflow-y-auto
    // ">
    <main className="
        flex-1
        bg-neutral-900
        text-neutral-100
        overflow-y-auto
    ">
      <div className="space-y-15 p-6">
        <TopicRow title="Trending" />
        <TopicRow title="Ranking" />
        <TopicRow title="New Releases" />
      </div>
    </main>
  )
}

export default Main
