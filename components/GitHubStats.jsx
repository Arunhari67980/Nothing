"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = "arun"; // Replace with your GitHub username
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) throw new Error("Failed to fetch GitHub stats");
        
        const data = await response.json();
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          profileUrl: data.html_url,
        });
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) return <div className="text-gray-500">Loading stats...</div>;
  if (error) return <div className="text-gray-500">Stats unavailable</div>;
  if (!stats) return null;

  const statItems = [
    { label: "Repositories", value: stats.repos },
    { label: "Followers", value: stats.followers },
    { label: "Following", value: stats.following },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-6 justify-center mt-8 flex-wrap"
    >
      {statItems.map((item, i) => (
        <motion.a
          key={i}
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
        >
          <div className="text-2xl font-bold text-purple-400">{item.value}</div>
          <div className="text-gray-400 text-sm">{item.label}</div>
        </motion.a>
      ))}
    </motion.div>
  );
}
