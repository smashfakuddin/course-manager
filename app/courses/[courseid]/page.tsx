import Banner from "@/components/coursedetails/Banner";
import { courseDetails } from "@/data/courseDetails";

export default function CourseIdPage() {
  const details = courseDetails;
  return (
    <div>
      <Banner />
    </div>
  );
}
