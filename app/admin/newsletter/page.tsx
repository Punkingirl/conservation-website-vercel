"use client"

import { useEffect, useState } from "react";
import axios from "axios";

interface Subscriber {
  id: number;
  email: string;
}

export default function NewsletterAdminPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/newsletter/")
      .then(res => setSubscribers(Array.isArray(res.data) ? res.data : res.data.results || []))
      .catch(() => setError("Failed to fetch subscribers"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Newsletter Subscribers</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {subscribers.map(sub => (
          <li key={sub.id} className="border-b py-2">{sub.email}</li>
        ))}
      </ul>
    </div>
  );
} 