"use client";

import React from "react";
import Image from "next/image";
import { GoTag } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

interface EventProps {
  imageUrl: string;
  title: string;
  date: string;
  location: string;
  tags: string[];
  eventStatus: string;
  daysLeft: number;
}

const Event: React.FC<EventProps> = ({
  imageUrl,
  title,
  date,
  location,
  tags,
  eventStatus,
  daysLeft,
}) => {
  return (
    <div className="py-2 w-full mx-auto bg-white dark:bg-dark-2 rounded-lg shadow-md border border-gray-700 dark:border-gray-300 group">
      <div className="flex items-center justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-2 ml-auto pr-3">
          <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-800 dark:text-green-300 px-2 py-1 rounded">
            {daysLeft < 0 ? "Complete" : eventStatus}
          </span>
          {daysLeft >= 0 && (
            <span className="text-xs text-orange-500">{daysLeft} days left</span>
          )}
        </div>
      </div>

     {/* Image */}
     <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-white ">
          {title}
        </h2>

        {/* Location and Date */}
        <div className="flex justify-between items-center mt-2">
          {/* Location with Styled Tooltip */}
            <div className="relative flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <CiLocationOn className="text-lg text-black dark:text-white" data-tooltip-id="location-tooltip" data-tooltip-content={location} />
            <span className="truncate w-36" data-tooltip-id="location-tooltip" data-tooltip-content={location}>
              {location}
            </span>
            <Tooltip id="location-tooltip" place="top" />
            </div>

          {/* Date */}
          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <FaCalendarAlt />
            {date}
          </p>
        </div>

        {/* Tags */}
        <div className="flex items-center flex-wrap gap-2 mt-auto py-5">
          <GoTag className="text-blue-500" />
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded "
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400 italic">No tags</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
