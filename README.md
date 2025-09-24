# 🚀 SocialPilot AI – Smart Social Media Automation Tool

## 📌 Overview

**SocialPilot AI** is an AI-powered social media automation platform designed to help individuals, marketers, and teams effortlessly **create**, **schedule**, and **automatically publish** engaging content across **LinkedIn**, **Twitter (X)**, and **Instagram**.

Built with **Next.js** (frontend) and **Node.js** (backend), the app combines intelligent content generation with **calendar-based scheduling** and **direct social media posting** via API integrations. Simply configure your API credentials in the `.env` file and start automating your content strategy.

This isn’t just another content generator — it’s your all-in-one tool for **AI content creation**, **social scheduling**, and **automated publishing**.

---

## ✨ Features

### ✅ Current Features

- 🔹 **AI-Powered Content Generation**  
  Generate high-quality posts with customizable tone, word count, emojis, and hashtags.

- 🔹 **Multi-Platform Optimization**  
  Create posts tailored for **LinkedIn**, **Twitter (X)**, and **Instagram**.

- 🔹 **Direct Auto-Posting**  
  Automatically publish generated content to your connected social media accounts.

- 🔹 **Smart Scheduling with Calendar Integration**  
  Select date and time for future posts using a built-in calendar UI. Integrated with **Google Calendar**.

- 🔹 **One-Click Copy**  
  Copy AI-generated content to your clipboard with a single click for quick manual use.

- 🔹 **Secure API Integration**  
  Seamlessly connect to Instagram, Twitter, and LinkedIn APIs using credentials stored in the `.env` file.

---

### 🔮 Upcoming Features

- 📊 **Analytics Dashboard**  
  Monitor and visualize performance metrics for each post and platform.

- 🧵 **Advanced Twitter Threading**  
  Generate long-form content split into well-structured Twitter threads.

- 🖼️ **Media & Image Integration**  
  Attach AI-generated visuals or upload media to posts.

- 🤝 **Team Collaboration**  
  Add team members, assign roles, and manage multiple social media accounts.

- 📂 **Reusable Content Templates**  
  Save your best-performing posts as templates for future campaigns.

---

## ⚙️ Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Node.js, Express
- **AI Integration:** OpenAI / Custom NLP Models (based on configuration)
- **Scheduling:** Google Calendar API
- **Social APIs:** Twitter API, LinkedIn API, Instagram Graph API
- **Authentication:** OAuth2 (per platform)
- **Environment Config:** `.env`

---


## Live Demo
- **Live Demo:** [https://social-media-post-generator-black.vercel.app/](https://social-media-post-generator-black.vercel.app/)  
- 🔹 Currently supports **AI content generation only**  
- 🔹 To enable **auto-posting & scheduling**, configure social media APIs in `.env` (details below)

## Features

- Multi-platform support (Twitter/X, LinkedIn, Facebook, Instagram)
- Customizable tone of voice (Professional, Casual, Friendly, Humorous, Formal)
- Platform-specific optimizations (e.g., thread creation for Twitter, word limits for LinkedIn)
- Optional hashtag and emoji integration
- Multiple post variations from a single prompt
- Modern, responsive UI with a beautiful gradient design
- Copy-to-clipboard functionality for easy posting

## Technologies Used
- Next.js 13+ with App Router
- React for Frontend
- OpenAI API for AI-Powered Content Generation
- Tailwind CSS for Styling

## Use Cases
- Creating consistent social media content across multiple platforms
- Generating professional marketing posts for your business
- Maintaining an active social media presence with varied content
- Quick creation of multiple post variations for A/B testing

## Project Structure
social-media-post-generator/
│── package.json
│── next.config.js
│── .env.local                 # API keys
│── app/
│   ├── page.tsx               # Main UI (post generator)
│   ├── generator/page.tsx     # (optional old UI)
│   └── api/
│       ├── generate-post/route.ts   # already in your project (Groq AI generator)
│       ├── post/route.ts            # NEW → post immediately to social media
│       ├── schedule/route.ts        # NEW → schedule post + add to Google Calendar
│── lib/
│   ├── social.ts              # NEW → helper functions for Instagram, LinkedIn,Twitter
│   ├── social.ts              # NEW → helper functions for Instagram, LinkedIn, Twi
│   ├── calendar.ts            # NEW → helper for Google Calendar API
│   └── scheduler.ts           # NEW → background cron job to auto-post scheduled content


## Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/social-media-post-generator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd social-media-post-generator
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory with the following:
    ```bash
     GROQ_API_KEY=your_groq_api_key
     # LinkedIn
LINKEDIN_USER_ID=xxxx
LINKEDIN_ACCESS_TOKEN=xxxx

# Twitter
TWITTER_BEARER_TOKEN=xxxx

# Instagram
INSTAGRAM_BUSINESS_ID=xxxx
INSTAGRAM_ACCESS_TOKEN=xxxx
TEST_IMAGE_URL=https://picsum.photos/600

# Google Calendar
GCAL_CLIENT_EMAIL=xxxx@project.iam.gserviceaccount.com
GCAL_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nxxxx\n-----END PRIVATE KEY-----\n"

    ```
   
5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:3000`

## How to Use the Application

1. Enter your post topic or description in the text area
2. Select your target social media platform
3. Choose your preferred tone of voice
4. Configure additional options:
   - Word limit (for LinkedIn)
   - Thread creation (for Twitter)
   - Hashtags and emojis
5. Select the number of posts you want
6. Click "Generate Posts" and wait for your AI-generated content
7. Use the copy button to easily copy posts to your clipboard

## Contributing

We welcome contributions! Here's how you can help make the Social Media Post Generator even better:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact
Please open an issue in the GitHub repository for any queries or support.
