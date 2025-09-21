export default function Loading() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="h-8 w-1/3 bg-gray-300 rounded"></div>

      {/* Image/thumbnail skeleton */}
      <div className="h-48 w-full bg-gray-300 rounded-lg"></div>

      {/* Text blocks */}
      <div className="space-y-3">
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
      </div>

      {/* Button skeletons */}
      <div className="flex gap-4">
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
      </div>

      <div className="max-w-[90rem] mx-auto py-3 justify-between grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
      {/* Left section (Overview, Outline, Discussion) */}
      <div className="col-span-2 space-y-4">
        {/* Overview skeleton */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-4">
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-40 w-full bg-gray-300 rounded"></div>
        </div>

        {/* Outline skeleton */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-4">
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Discussion skeleton */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-4">
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          <div className="space-y-3">
            <div className="h-12 w-full bg-gray-300 rounded"></div>
            <div className="h-20 w-full bg-gray-300 rounded"></div>
            <div className="h-10 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Right section (Announcements + Exams) */}
      <div className="bg-white shadow rounded-2xl col-span-1 min-w-[300px] space-y-3 p-6">
        {/* Announcements skeleton */}
        <div className="space-y-3">
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        </div>

        {/* Exams skeleton */}
        <div className="space-y-3 mt-6">
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
    </div>
  );
}
