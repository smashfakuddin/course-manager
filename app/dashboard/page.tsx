import { auth } from "@/auth";
import Container from "@/components/common/Containner";
import CourseCreation from "@/components/dashboard/CourseCreation";
import CourseList from "@/components/dashboard/CourseList";
import Dashboard from "@/components/dashboard/Dashboard";
import PickedCourses from "@/components/dashboard/PickedCourses";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <Dashboard/>
    // <Container>
    //   <CourseCreation />
    //   <p className="mt-4">
    //     Welcome, {session.user?.name || session.user?.email}!
    //   </p>
    //   <div>
    //     {/* Add your dashboard content here */}
    //     <p className="mt-4">
    //       This is your dashboard where you can manage your account and view your
    //       activities.
    //     </p>
    //     <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    //       {/* Example content */}
    //       <CourseList />
    //       <PickedCourses userId={session?.user?.id}/>
    //     </div>
    //   </div>
    // </Container>
  );
}
