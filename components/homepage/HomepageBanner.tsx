export default function HomepageBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-gradient-to-r from-gray-400 via-gray-950 to-gray-400"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0')",
        // }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Manage Courses Smarter with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Course Manager
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-neutral-200 leading-relaxed max-w-2xl">
          A modern platform built for the Department of Anthropology. Simplify
          course enrollment, assignments, discussions, and track progress—all in
          one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/login"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg flex items-center gap-2 transition"
          >
            🚀 Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition font-semibold flex items-center gap-2"
          >
            📖 Learn More
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold">📚 Course Enrollment</h3>
            <p className="text-gray-300 text-sm mt-2">
              Register for courses and organize your semester effortlessly.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold">📝 Assignments</h3>
            <p className="text-gray-300 text-sm mt-2">
              Submit assignments and track progress directly from the app.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold">💬 Discussions</h3>
            <p className="text-gray-300 text-sm mt-2">
              Collaborate with peers and teachers through discussion forums.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
    </section>
  );
}
