// lib/social.ts
import axios from "axios";

export async function postToLinkedIn(content: string) {
  const response = await axios.post(
    "https://api.linkedin.com/v2/ugcPosts",
    {
      author: `urn:li:person:${process.env.LINKEDIN_USER_ID}`,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text: content },
          shareMediaCategory: "NONE",
        },
      },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export async function postToTwitter(content: string) {
  const response = await axios.post(
    "https://api.twitter.com/2/tweets",
    { text: content },
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export async function postToInstagram(content: string) {
  // Instagram requires an image or video
  const media = await axios.post(
    `https://graph.facebook.com/v17.0/${process.env.INSTAGRAM_BUSINESS_ID}/media`,
    {
      image_url: process.env.TEST_IMAGE_URL, // must be public image URL
      caption: content,
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
    }
  );

  const publish = await axios.post(
    `https://graph.facebook.com/v17.0/${process.env.INSTAGRAM_BUSINESS_ID}/media_publish`,
    {
      creation_id: media.data.id,
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
    }
  );

  return publish.data;
}
