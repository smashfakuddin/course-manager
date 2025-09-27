import { auth } from "@/auth";
import Announcement from "@/components/coursedetails/Announcement";
import Banner from "@/components/coursedetails/Banner";
import Comment from "@/components/coursedetails/Comment";
import Exams from "@/components/coursedetails/Exams";
import Outline from "@/components/coursedetails/Outline";
import Overview from "@/components/coursedetails/Overview";
import { getCourseById } from "@/db/queries/courses";
import { redirect } from "next/navigation";

export default async function CourseIdPage({
  params,
}: {
  params: Promise<{ courseid: string }>;
}) {
  const { courseid } = await params;
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  const courseDetails = await getCourseById(courseid);

  if (!courseDetails) {
    return <p>Nothing Found On This Course id</p>;
  }

  return (
    <div className=" bg-[#003652]">
      <Banner courseDetails={courseDetails} />

      {/* whole body part goes here */}

      <div className="max-w-[90rem] mx-auto py-3 justify-between grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" col-span-2 space-y-4">
          {/* overview of the course design */}
          <Overview
            overview={courseDetails?.overview}
            courseId={courseDetails?._id.toString()}
            role={(session?.user as { role?: string })?.role ?? ""}
          />
          {/* Course outline with resourece */}
          <div className="">
            <Outline
              courseId={courseid}
              outlines={courseDetails?.outline}
              role={(session?.user as { role?: string })?.role ?? ""}
            />
          </div>
          {/* Discussion */}
          <Comment commentBy={session?.user?.name ?? ""} courseId={courseid} comments={courseDetails.comment}/>
        </div>
        <div className="rounded-2xl col-span-1 min-w-[300px] space-y-3">
          {/* Announcements */}
          <Announcement
            assignments={courseDetails?.assignment}
            role={(session?.user as { role?: string })?.role ?? ""}
          />
          {/* Exams */}
          <Exams
            exams={courseDetails?.event}
            role={(session?.user as { role?: string })?.role ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
