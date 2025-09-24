// lib/calendar.ts
import { google } from "googleapis";

export async function addToGoogleCalendar(post: {
  content: string;
  platform: string;
  scheduleTime: string;
}) {
  const auth = new google.auth.JWT(
    process.env.GCAL_CLIENT_EMAIL,
    undefined,
    process.env.GCAL_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/calendar"]
  );

  const calendar = google.calendar({ version: "v3", auth });

  await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: `Scheduled Post - ${post.platform}`,
      description: post.content,
      start: { dateTime: post.scheduleTime },
      end: { dateTime: post.scheduleTime },
    },
  });
}
