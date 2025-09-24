export default function HomepageSummary() {
  return (
    <div className="relative h-[40vh] w-full">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/20/cambridge.JPG?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content with cards */}
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full gap-6 px-4">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="p-6 max-w-96 w-full rounded-2xl shadow-xl backdrop-blur-lg bg-white/20 border border-white/30 text-white"
            >
              <h2 className="text-lg font-semibold">📚 Courses</h2>
              <p className="mt-2 text-sm text-gray-200">
                Explore and manage all your courses here.
              </p>
            </div>
          ))}
      </div>
      
    </div>
  );
}
