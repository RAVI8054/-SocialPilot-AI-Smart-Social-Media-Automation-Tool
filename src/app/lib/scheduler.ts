// lib/scheduler.ts
import cron from "node-cron";
import { getScheduledPosts } from "@/app/api/schedule/route";
import { postToLinkedIn, postToTwitter, postToInstagram } from "@/lib/social";

export function startScheduler() {
  cron.schedule("* * * * *", async () => {
    const now = new Date().toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
    const duePosts = getScheduledPosts().filter((p) =>
      p.scheduleTime.startsWith(now)
    );

    for (let post of duePosts) {
      if (post.platform === "linkedin") await postToLinkedIn(post.content);
      if (post.platform === "twitter") await postToTwitter(post.content);
      if (post.platform === "instagram") await postToInstagram(post.content);

      console.log(`✅ Posted to ${post.platform}: ${post.content}`);
    }
  });
}
