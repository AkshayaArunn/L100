import { PostModeration } from "./PostModeration";
import { VideoModeration } from "./VideoModeration";

const post = new PostModeration("POST123", 600);
const video = new VideoModeration("VID456", 120);

console.log(post.review());
console.log(video.review());

console.log("Post flagged?", post.isContentFlagged());
console.log("Video flagged?", video.isContentFlagged());
