import AnimatedNav from "@/components/common/animateNav";
import CourseCard from "@/components/common/CourseCard";
import AboutSection from "@/components/homepage/About";
import Footer from "@/components/homepage/Footer";
import HomepageBanner from "@/components/homepage/HomepageBanner";
import HomepageSummary from "@/components/homepage/HomepageSummary";
import MessageFromDH from "@/components/homepage/MessageFromDH";
import { courses } from "@/data/course";

export default function Home() {
  return (
    <div className=" bg-neutral-50">
      <HomepageBanner />

      <MessageFromDH/>
      <HomepageSummary/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}
