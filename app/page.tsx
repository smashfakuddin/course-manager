import CourseCard from "@/components/common/CourseCard";
import { courses } from "@/data/course";

export default function Home() {
  return (
    <div className="p-5 flex justify-center gap-4 flex-wrap ">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
