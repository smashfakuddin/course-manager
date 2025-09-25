export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About the Course Management App
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our Course Management App is designed to simplify academic workflows
            for students and teachers in the Department of Anthropology. From 
            course enrollment to assignments, resources, and discussions, our 
            platform ensures seamless communication and learning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📚 Easy Course Management
            </h3>
            <p className="text-gray-600">
              Browse, enroll, and organize courses efficiently across semesters
              with just a few clicks.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              👩‍🏫 Teacher Support
            </h3>
            <p className="text-gray-600">
              Teachers can manage classes, add topics, and share resources with
              students effortlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📝 Assignments & Quizzes
            </h3>
            <p className="text-gray-600">
              Submit assignments, take quizzes, and receive feedback directly on
              the platform.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              💬 Discussions
            </h3>
            <p className="text-gray-600">
              Engage in meaningful discussions with peers and teachers on
              dedicated course forums.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🔒 Secure Access
            </h3>
            <p className="text-gray-600">
              Role-based authentication ensures secure access for students,
              teachers, and admins.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-white rounded-md shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📊 Progress Tracking
            </h3>
            <p className="text-gray-600">
              Keep track of your learning journey with progress tracking and
              performance analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
