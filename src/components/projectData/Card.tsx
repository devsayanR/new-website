'use client';
import React from 'react'
import { Repo } from './'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { IoBookSharp } from "react-icons/io5";

const Card = ({ repo, key }: { repo: Repo; key: number }) => {

  return (
    <div key={key} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative" >
      <h2 className="text-xl font-bold mb-2 dark:text-gray-400 text-gray-900">
        {repo.Name}
      </h2>
      <p className="text-gray-700 dark:text-[rgb(136,143,155)]">
        {repo.Description || "No description available."}
      </p>
      <div className="flex justify-start items-center mt-4 mb-24 sm:mb-12">
        <span className="px-3 py-1 text-xs text-white bg-gray-600 rounded-full shadow-md float-right">
          <span className='font-semibold'>{repo.Language_used || "N/A"}</span>
        </span>
      </div>
      <div className='flex items-center gap-4 flex-wrap text-white absolute bottom-5'>
        <Link href={repo.Repo_link} target='_blank' className='flex items-center justify-center gap-1 px-2 py-1 bg-gray-600 rounded-md hover:bg-gray-700 transition'>
          <FaGithub />
          Repository
        </Link>
        <Link href={repo.Docs_link} target="_blank" className='flex items-center justify-center gap-1 px-2 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition'>
          <IoBookSharp />
          Docs
        </Link>
        {
          repo.Website_link && (
            <Link href={repo.Website_link} target='_blank' className='flex items-center justify-center gap-1 px-2 py-1 bg-green-600 rounded-md hover:bg-green-700 transition'>
              <FaLink />
              Website
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Card