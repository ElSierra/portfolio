

export default function FrameworkTag({title}:{title:string}) {
  return (
    <div className="bg-white dark:bg-black px-2 py-1 rounded-full">
            <p className="text-xs">{title}</p>
          </div>
  )
}
