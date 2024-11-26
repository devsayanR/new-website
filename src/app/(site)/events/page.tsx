import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import EventBanner from "@/components/eventData/eventBanner";

export const metadata: Metadata = {
  title:
    "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
<>
<Breadcrumb pageName="Event Page" />
<EventBanner/>
    </>
  );
};

export default ContactPage;
