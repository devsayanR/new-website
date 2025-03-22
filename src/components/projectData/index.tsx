"use client";
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

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Repo[] = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    const debounceFilter = setTimeout(() => {
      let filtered = repos;
      if (searchQuery) {
        filtered = filtered.filter((repo) =>
          repo.Name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }
      if (selectedLanguage) {
        filtered = filtered.filter(
          (repo) =>
            repo.Language_used.toLowerCase() === selectedLanguage.toLowerCase(),
        );
      }
      setFilteredRepos(filtered);
    }, 300);

    return () => clearTimeout(debounceFilter);
  }, [searchQuery, selectedLanguage, repos]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <PreLoader />
      </div>
    );
  }

  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!filteredRepos.length)
    return <div className="text-center">No repositories found.</div>;

  return (
    <div className="mx-auto max-w-7xl p-6">
      
      {/* Search and Filter Controls */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/4"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">All Technologies</option>
          {Array.from(new Set(repos.map((repo) => repo.Language_used))).map(
            (lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ),
          )}
        </select>
      </div>
      
      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRepos.map((repo) => (
          <Card repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
