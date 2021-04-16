/* Test getStories Interface */

import axios from "axios";
import { getStories, getStoriesUrl } from "../services/hackernews_api";

jest.mock("axios");

const stories = [
  {
    title: "Hello World",
    url: "https://google.com/abc",
    points: "10",
    author: "Kunal Chadha",
    created_at_i: "1618357290",
    num_comments: "10",
    objectID: "23456743",
  },
  {
    title: "Hacker News Stories",
    url: "https://hackernews.com",
    points: "10",
    author: "Kunal Chadha",
    created_at_i: "1618357290",
    num_comments: "10",
    objectID: "23456743",
  },
];

describe("HackerNews Api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getStory functionality", () => {
    it("requests and gets stories from the HackerNews Api", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: { hits: stories } })
      );

      const entity = await getStories(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${getStoriesUrl}&page=1`);
      expect(entity).toEqual(stories);
    });
  });
});
