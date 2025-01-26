import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import ProjectData from "@/components/projectData";
import ProjectsBanner from "@/components/projectData/projectBanner";

export const metadata: Metadata = {
  title:
    "Projects | DEVRhylme Foundation",
  description: "DEVRhylme Projects",
};

const ContactPage = () => {
  return (
    <div className="pt-24">
      <ProjectData />
    </div>
  );
};

export default ContactPage;
