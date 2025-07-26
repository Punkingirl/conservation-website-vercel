"use client"

import { useEffect, useState } from "react";
import axios from "axios";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function ContactMessagesAdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/contact/")
      .then(res => setMessages(res.data))
      .catch(() => setError("Failed to fetch messages"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {messages.map(msg => (
          <li key={msg.id} className="border-b py-2">
            <div><b>{msg.name}</b> ({msg.email})</div>
            <div>{msg.message}</div>
            <div className="text-xs text-gray-500">{new Date(msg.created_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
} 