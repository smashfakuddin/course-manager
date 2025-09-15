import Video from "@/icons/Video";

export default function Outline() {
  return (
    <div className=" space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className=" hover:bg-neutral-200 rounded-md p-2 cursor-pointer">
           <div className="flex gap-3">
            {/* Icon wrapper */}
            <div className=" text-xl">
              <Video />
            </div>

            {/* Content */}
            <div>
              <h3 className=" font-semibold text-gray-800">
                Course Name {index + 1}
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                ipsam esse. Praesentium facere a sit?
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
