import { ArrowUpRight } from "lucide-react";
import CommentIcon from "@/icons/comment";
import UserIcon from "@/icons/user";
import Link from "next/link";

type Course = {
  title: string;
  description: string;
  teacherName: string;
  image: string;
};

type CardProps = {
  course: Course;
};

export default function CourseCard({ course }: CardProps) {
  const { title, description, teacherName, image } = course;

  return (
    <div className="bg-white w-94  dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden border dark:border-gray-800 hover:shadow-md transition-shadow duration-300 relative group">
      {/* Course Image */}
      <div className="aspect-[4/3] ">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0 
            bg-amber-100/50 backdrop-blur-md
            p-5 flex flex-col justify-between
            translate-y-full group-hover:translate-y-0
            opacity-0 group-hover:opacity-100
            transition-all duration-500 ease-in-out h-full
          "
        >
          <p className="text-sm text-neutral-800 text-justify overflow-auto">
            {description.split(" ").slice(0, 50).join(" ") +
              (description.split(" ").length > 50 ? "..." : "")}
          </p>

          <Link
            href="/details"
            className="mt-4 ml-auto inline-flex w-35 text-nowrap items-center gap-2 text-sm text-white font-medium  dark:text-gray-200 bg-black/80 px-3 py-2 rounded hover:bg-neutral-600 transition"
          >
            Course Detail
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h2>

        {/* Teacher Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt={teacherName}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700"
            />
            <h5 className="ml-3 text-sm font-medium text-gray-800 dark:text-gray-200">
              {teacherName}
            </h5>
          </div>
          <div className=" flex gap-3 items-center">
            <div className="flex text-sm">
              <CommentIcon />
              {10}
            </div>
            <div className="flex text-sm">
              <UserIcon />
              {10}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
