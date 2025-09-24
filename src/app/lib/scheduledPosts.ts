// lib/scheduledPosts.ts

let scheduledPosts: any[] = [];

export function addScheduledPost(post: any) {
  scheduledPosts.push(post);
}

export function getScheduledPosts() {
  return scheduledPosts;
}
