"use client";

import React, { useState } from "react";
import { Loader2, Instagram, Linkedin, Twitter, Calendar, Copy } from "lucide-react";

export default function GeneratorPage() {
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("linkedin");
  const [tone, setTone] = useState("Professional");
  const [wordLimit, setWordLimit] = useState(100);
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [includeEmoji, setIncludeEmoji] = useState(true);
  const [makeThread, setMakeThread] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState<string[]>([]);
  const [scheduleTime, setScheduleTime] = useState("");

  // Generate content with Groq AI
  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform,
          description,
          tone,
          wordLimit,
          includeHashtags,
          includeEmoji,
          makeThread,
        }),
      });

      const data = await res.json();
      setGeneratedPosts([data.content]); // single variation for now
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Post immediately to chosen platform
  const handlePostNow = async (content: string) => {
    try {
      const res = await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, platform }),
      });
      const data = await res.json();
      alert(data.success ? ` Posted on ${platform}!` : " Failed to post");
    } catch (err) {
      console.error(err);
    }
  };

  // Schedule a post
  const handleSchedule = async (content: string) => {
    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, platform, scheduleTime }),
      });
      const data = await res.json();
      alert(data.success ? ` Scheduled on ${platform}!` : " Failed to schedule");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("📋 Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-6">
        AI Social Media Post Generator
      </h1>

      {/* Form */}
      <div className="bg-white/90 p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your post idea..."
          className="w-full p-3 border rounded-lg"
        />

        {/* Platform Dropdown */}
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="linkedin">LinkedIn</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
        </select>

        {/* Tone Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="Professional">Professional</option>
            <option value="Casual">Casual</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Humorous">Humorous</option>
            <option value="Confident">Confident</option>
            <option value="Empathetic">Empathetic</option>
            <option value="Persuasive">Persuasive</option>
          </select>
        </div>

        {/* Word Limit only for LinkedIn */}
        {platform === "linkedin" && (
          <input
            type="number"
            value={wordLimit}
            onChange={(e) => setWordLimit(Number(e.target.value))}
            placeholder="Word Limit"
            className="w-full p-2 border rounded-lg"
          />
        )}

        {/* Twitter Thread Option */}
        {platform === "twitter" && (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={makeThread}
              onChange={(e) => setMakeThread(e.target.checked)}
            />
            <span>Make Thread</span>
          </label>
        )}

        {/* Hashtags Option */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeHashtags}
            onChange={(e) => setIncludeHashtags(e.target.checked)}
          />
          <span>Include Hashtags</span>
        </label>

        {/* Emoji Option */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeEmoji}
            onChange={(e) => setIncludeEmoji(e.target.checked)}
          />
          <span>Include Emojis</span>
        </label>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : "Generate Post"}
        </button>
      </div>

      {/* Generated Posts */}
      <div className="mt-8 w-full max-w-2xl space-y-6">
        {generatedPosts.map((post, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
            <p className="whitespace-pre-line">{post}</p>
            <div className="flex gap-3 mt-4 flex-wrap">
              {/* Copy Button */}
              <button
                onClick={() => handleCopy(post)}
                className="flex items-center px-3 py-2 bg-gray-200 rounded-lg"
              >
                <Copy className="w-4 h-4 mr-2" /> Copy
              </button>

              {/* Post Now */}
              <button
                onClick={() => handlePostNow(post)}
                className="flex items-center px-3 py-2 bg-green-500 text-white rounded-lg"
              >
                {platform === "linkedin" && <Linkedin className="w-4 h-4 mr-2" />}
                {platform === "twitter" && <Twitter className="w-4 h-4 mr-2" />}
                {platform === "instagram" && <Instagram className="w-4 h-4 mr-2" />}
                Post Now
              </button>

              {/* Schedule */}
              <div className="flex items-center gap-2">
                <input
                  type="datetime-local"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="border p-2 rounded-lg"
                />
                <button
                  onClick={() => handleSchedule(post)}
                  className="flex items-center px-3 py-2 bg-purple-600 text-white rounded-lg"
                >
                  <Calendar className="w-4 h-4 mr-2" /> Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
