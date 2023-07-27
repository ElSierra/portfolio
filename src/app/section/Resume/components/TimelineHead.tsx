export default function TimelineHead({
  head,
  Icon,
}: {
  head: string;
  Icon: any;
}) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <div className="flex items-center gap-1">
        <Icon size={18} />
        <p className="text-sm">{head}</p>
      </div>
      <div className="w-4 h-[2px] bg-black dark:bg-white"/>
    </div>
  );
}
