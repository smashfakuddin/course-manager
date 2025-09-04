import Containner from "@/components/common/Containner";

export default function MessageFromDH() {
  return (
    <Containner>
      <div className="my-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1706381075788-74df037aea04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            alt="Department Head"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Message */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Message from the Department Head
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the Department of Anthropology. Our mission is to foster 
            academic excellence and encourage students to explore the diverse 
            dimensions of human culture, society, and behavior. Through our 
            courses, research initiatives, and fieldwork opportunities, we aim 
            to provide students with a holistic understanding of humanity while 
            preparing them for meaningful careers in the global community.
          </p>
          <p className="mt-4 font-semibold text-gray-800">— Dr. John Doe</p>
          <p className="text-gray-500 text-sm">Head of Department</p>
        </div>
      </div>
    </Containner>
  );
}
