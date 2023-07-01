interface SettingFooterProps {
  disclaimer: string
}

export const SettingFooter = ({ disclaimer }: SettingFooterProps) => {
  return (
    <div className="flex h-[44px] w-full items-center justify-between rounded-b border-t border-neutral-700 bg-neutral-800 px-4">
      <span className="text-neutral-400">{disclaimer}</span>
      <div>
        <button
          className="rounded border border-neutral-600 bg-neutral-50 px-2 py-1 text-sm font-medium text-zinc-950 transition-colors hover:bg-neutral-300"
          onClick={() => {
            console.log('asdas')
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
}
