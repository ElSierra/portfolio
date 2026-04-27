

export default function FrameworkTag({title}:{title:string}) {
  return (
    <div className="bg-white/90 dark:bg-black/80 px-2 py-1 rounded-full whitespace-nowrap border border-zinc-100 dark:border-zinc-800 transition-transform duration-300 group-hover:-translate-y-0.5">
            <p className="text-xs">{title}</p>
          </div>
  )
}
