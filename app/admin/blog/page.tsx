"use client"

import { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  published_at: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blog/")
      .then(res => setPosts(res.data))
      .catch(err => setError("Failed to fetch blog posts"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Blog Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <button className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Add New Post</button>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-semibold text-lg">{post.title}</div>
              <div className="text-gray-500 text-sm">By {post.author} | {new Date(post.published_at).toLocaleDateString()}</div>
            </div>
            <div className="mt-2 md:mt-0 flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
              <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 