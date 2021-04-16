/* Test Story Rendering and Upvote Functionality */

import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import Story from "components/Story";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test("renders the story component with content and upvotes a story", async () => {
  const story = {
    title: "Hacker News Stories",
    url: "https://hackernews.com",
    points: "10",
    author: "kc",
    created_at_i: "1618357290",
    num_comments: "10",
    objectID: "23456743",
  };

  const { getByText, queryAllByText, container } = render(
    <Story story={story} index={0} />
  );

  await waitFor(() => [
    expect(getByText("Hacker News Stories")).toBeTruthy(),
    expect(queryAllByText("by kc")).toBeTruthy(),
    expect(getByText("0 upvotes")).toBeTruthy(),
  ]);

  fireEvent.click(container.querySelector("#upvote-button"));

  await waitFor(() => [expect(getByText("1 upvote")).toBeTruthy()]);

  fireEvent.click(container.querySelector("#upvote-button"));

  const result = render(<Story story={story} index={0} />);

  await waitFor(() => [expect(result.getByText("2 upvotes")).toBeTruthy()]);
});
