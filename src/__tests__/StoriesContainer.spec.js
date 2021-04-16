/* Test Story Container Rendering and Hide Functionality */

import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import StoriesContainer from "containers/StoriesContainer";
import { getStories, getUpvotes } from "../services/hackernews_api";

beforeEach(cleanup);

jest.mock("../services/hackernews_api", () => ({
  getStories: jest.fn(),
  getUpvotes: jest.fn(),
}));

test("Renders the Stories Container and hides story", async () => {
  getStories.mockImplementation(() =>
    Promise.resolve([
      {
        title: "Hacker News Stories",
        url: "https://hackernews.com",
        points: "10",
        author: "kc",
        created_at_i: "1618357290",
        num_comments: "10",
        objectID: "23456743",
      },
    ])
  );

  getUpvotes.mockImplementation(() => Promise.resolve(3));

  const { getByText, queryAllByText, queryByText, container } = render(
    <StoriesContainer />
  );
  await waitFor(() => [
    expect(getByText("Hacker News Stories")).toBeTruthy(),
    expect(queryAllByText("by kc")).toBeTruthy(),
    expect(getByText("3 upvotes")).toBeTruthy(),
  ]);

  fireEvent.click(container.querySelector("#hide-button"));

  await waitFor(() => [expect(queryByText("Hacker News Stories")).toBeNull()]);
});
