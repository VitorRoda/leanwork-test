export default function ProductListItemSkeleton() {
  return (
    <div className="border-1 p-5 rounded-md">
      <div className="flex justify-center" >
        <div className="rounded-md h-64 mb-4 animate-pulse bg-gray-200 w-[90%]" />
      </div>
      <div className="flex flex-col h-14 justify-between mb-2">
        <div className="animate-pulse bg-gray-200 rounded-md h-6 w-full" />
        <div className="animate-pulse bg-gray-200 rounded-md h-5 w-1/5" />
      </div>
      <div className="font-bold text-orange mb-3">
        <div className="animate-pulse bg-gray-200 rounded-md h-6 w-1/4" />
      </div>
    </div>
  );
}
