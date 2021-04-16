/* 
Service to send requests to the Hacker News API 

> Upvote API can be integrated/modified using just the 2 functions below - (upvoteStory, getUpvotes)

*/

import axios from "axios";
import { PAGE_SIZE } from "constants/index";

export const baseUrl = "https://hn.algolia.com/api/v1/"; // Hacker News API Base URL
export const getStoriesUrl = `${baseUrl}search?tags=front_page&hitsPerPage=${PAGE_SIZE}`; // Endpoint to get Hacker News front page stories

// Get Front Page Stories
export const getStories = async (page) => {
  const result = axios
    .get(`${getStoriesUrl}&page=${page}`)
    .then(({ data }) => data["hits"]);
  return result;
};

// Function to Up Vote a particular Story
export const upvoteStory = async (story_id) => {
  // Save to Local Storage
  let story = localStorage.getItem(story_id);
  if (story === null) {
    story = {
      upvotes: 1,
    };
  } else {
    story = JSON.parse(story);
    story["upvotes"] += 1;
  }
  localStorage.setItem(story_id, JSON.stringify(story));
  return story["upvotes"];
};

// Get Number of Upvotes a story has received
export const getUpvotes = async (story_id) => {
  const story = JSON.parse(localStorage.getItem(story_id));
  return story === null ? 0 : story["upvotes"];
};
