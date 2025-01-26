"use client"; // Only for Next.js App Router
import { useEffect, useState } from "react";
import "@/components/projectData/projects.css";
import PreLoader from "../Common/PreLoader";
import Card from "./Card";

// Define the repository data structure
export interface Repo {
  id: number;
  Name: string;
  Description: string;
  Language_used: string;
  Repo_link: string;
  Docs_link: string;
  Website_link: string;
}

const RepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]); // Specify Repo type for the array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github"); // Ensure endpoint is correct
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Repo[] = await response.json(); // Cast the response data to Repo[]
        setRepos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setTimeout(() => setLoading(false), 1000); // Add 1-second delay
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PreLoader /> {/* Use your custom Loader component */}
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!repos.length) return <div>No repositories found.</div>;

  return (
    <div className="projectsCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {repos.map((repo) => (
        <Card repo={repo} key={repo.id}/>
      ))}
    </div>
  );
};

export default RepoList;
