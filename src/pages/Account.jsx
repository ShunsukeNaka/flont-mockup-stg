function Account() {
  return (
    <div className="flex justify-center pt-20">
      <div className="w-full max-w-sm text-center space-y-6">
        <div className="text-6xl">👤</div>

        <p className="text-neutral-400">
          ゲストとして利用中
        </p>

        <button
          className="
            w-full py-3 rounded-lg
            bg-green-500 text-black font-semibold
            hover:bg-green-400 transition
          "
        >
          LINEでログイン
        </button>

        <p className="text-sm text-neutral-500">
          ログインするとお気に入り保存や
          視聴履歴が使えるようになります
        </p>
      </div>
    </div>
  )
}

export default Account;
