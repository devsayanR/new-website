import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import EventBanner from "@/components/eventData/eventBanner";
import Event from "@/components/eventData/eventCard";

const events = [
  {
    imageUrl: "/images/event/event1.jpeg",
    title: "BNB Hack 2024 Q4: The Ultimate Battle of Hacker Heroes",
    date: "Nov 30, 2024",
    location: "Virtual",
    tags: ["blockchain", "AI", "TG", "Hack", "DeFi"],
    eventStatus: "Ongoing",
    daysLeft: 30,
  },
  {
    imageUrl: "/images/event/event1.jpeg",
    title: "BNB Hack 2024 Q4: The Ultimate Battle of Hacker Heroes",
    date: "Nov 30, 2024",
    location: "Virtual",
    tags: ["blockchain", "AI", "TG", "Hack", "DeFi"],
    eventStatus: "Ongoing",
    daysLeft: 30,
  },
  {
    imageUrl: "/images/event/event1.jpeg",
    title: "BNB Hack 2024 Q4: The Ultimate Battle of Hacker Heroes",
    date: "Nov 30, 2024",
    location: "Virtual",
    tags: ["blockchain", "AI", "TG", "Hack", "DeFi"],
    eventStatus: "Ongoing",
    daysLeft: 30,
  },
  {
    imageUrl: "/images/event/event1.jpeg",
    title: "BNB Hack 2024 Q4: The Ultimate Battle of Hacker Heroes",
    date: "Nov 30, 2024",
    location: "Virtual",
    tags: ["blockchain", "AI", "TG", "Hack", "DeFi"],
    eventStatus: "Ongoing",
    daysLeft: 30,
  },
];


export const metadata: Metadata = {
  title:
    "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Event Page" />
      <div className="w-full">
        <EventBanner/>
        <h2 className="px-20 pt-5 font-bold sm:text-xl">
            Explore Events
            <span className="font-normal pl-1 text-slate-500">({events.length})</span>
        </h2>
        <div className="lg:px-20 py-6 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Event
              key={index}
              imageUrl={event.imageUrl}
              title={event.title}
              date={event.date}
              location={event.location}
              tags={event.tags}
              eventStatus={event.eventStatus}
              daysLeft={event.daysLeft}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
