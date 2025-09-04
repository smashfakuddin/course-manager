import { auth } from "@/auth";
import Container from "@/components/common/Containner";
import CourseCreation from "@/components/dashboard/CourseCreation";

import Dashboard from "@/components/dashboard/Dashboard";

import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return <Dashboard />;
}
