/* Test Main App Rendering */

import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import App from "App";
import { getStories, getUpvotes } from "../services/hackernews_api";

beforeEach(cleanup);

jest.mock("../services/hackernews_api", () => ({
  getStories: jest.fn(),
  getUpvotes: jest.fn(),
}));

test("renders the application", async () => {
  getStories.mockImplementation(() =>
    Promise.resolve([
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
    ])
  );

  getUpvotes.mockImplementation(() => Promise.resolve(3));

  const { getByText, queryAllByText } = render(<App />);
  await waitFor(() => [
    expect(getByText("Hacker News Stories")).toBeTruthy(),
    expect(getByText("Hello World")).toBeTruthy(),
    expect(queryAllByText("by Kunal Chadha")).toBeTruthy(),
    expect(queryAllByText("10 comments")).toBeTruthy(),
    expect(queryAllByText("10 points")).toBeTruthy(),
    expect(queryAllByText("google.com")).toBeTruthy(),
  ]);
});
