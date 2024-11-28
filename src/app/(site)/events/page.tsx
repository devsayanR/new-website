import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import EventBanner from "@/components/eventData/eventBanner";
import Event from "@/components/eventData/eventCard";
import  "@/components/eventData/eventStyles.css";
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
    "Events | DEVRhylme Foundation",
  description: "DevRhylme Foundation invites you to dive into the world of open source through impactful contributions and engaging events. Collaborate, innovate, and create at our hackathons, or host your own to empower the developer community.",
};

const ContactPage = () => {
  return (
    <>
     {/* <Breadcrumb pageName="Event Page" /> */}
      <div className="w-full">
        <div className="gradientBorder">
        <EventBanner/>
        </div>
        <div className="eventCards">
        <h2 className="pt-5 font-bold sm:text-xl">
            Explore Events
            <span className="font-normal pl-1 text-slate-500">({events.length})</span>
        </h2>
        <div className="py-6 gridCards">
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
      </div>
    </>
  );
};

export default ContactPage;
