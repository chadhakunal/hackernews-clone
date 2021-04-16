/* Story Component (Table Rows for a single story) */

import React from "react";
import { mapDaysAgo } from "utils/mapDaysAgo";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined"; // Upvote Icon
import { getUpvotes, upvoteStory } from "services/hackernews_api";

import {
  StoryTitle,
  StoryBaseUrl,
  UpvoteButton,
  TableRow,
  TableColumnTop,
  TableColumnBottom,
  StoryBaseUrlSpan,
  LinkButton,
  SmBreak,
  SmBorderLine
} from "styles/story";

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: null,
      story_id: props.story.objectID, // Story ID of the story (fixed)
    };
  }

  componentDidMount() {
    // Get Number of Up votes for story
    getUpvotes(this.props.story.objectID)
      .then((data) => this.setState({ upvotes: data }))
      .catch((error) => {
        console.log(error);
      });
  }

  // Get From Link for a story
  getBaseUrl = (url) => {
    return url.split("://")[1].split("/")[0];
  };

  // Upvote on click
  handleUpVote = () => {
    upvoteStory(this.state.story_id)
      .then((data) => {
        // Alert
        this.setState({ upvotes: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Hide on click
  handleHide = () => {
    this.props.hide(this.props.index);
  };

  render() {
    let story = this.props.story;
    let baseUrl = this.getBaseUrl(story.url);
    return (
      <React.Fragment>
        <TableRow className="row align-items-center">
          <TableColumnTop colSpan="2">{this.props.index+1<10?`0${this.props.index + 1}. `:`${this.props.index + 1}. `}</TableColumnTop>
          <TableColumnTop>
            <UpvoteButton id="upvote-button" onClick={this.handleUpVote}>
              <ArrowDropUpOutlinedIcon></ArrowDropUpOutlinedIcon>
            </UpvoteButton>
          </TableColumnTop>
          <TableColumnTop className="col-10">
            <StoryTitle href={story.url} target="_blank">
              {story.title}
            </StoryTitle>
            &nbsp;
            <StoryBaseUrlSpan>
              (
              <StoryBaseUrl href={baseUrl}>
                <span>{baseUrl}</span>
              </StoryBaseUrl>
              )
            </StoryBaseUrlSpan>
          </TableColumnTop>
        </TableRow>

        <TableRow className="row align-items-center">
          <td colSpan="2"> </td>
          <TableColumnBottom className="col-10 pl-4">
            <span>
              {story.points} points by <LinkButton>{story.author}</LinkButton>
            </span>
            &nbsp;
            <span>
              <LinkButton>{mapDaysAgo(story.created_at_i)} ago</LinkButton> 
            </span>
            <SmBorderLine> | </SmBorderLine>
            <SmBreak></SmBreak>
            <span>
              <LinkButton id="hide-button" onClick={this.handleHide}>
                hide
              </LinkButton>{" "}
              |{" "}
            </span>
            <span>
              <LinkButton>{story.num_comments} comments</LinkButton> |{" "}
            </span>
            <span>
              {this.state.upvotes !== null
                ? `${this.state.upvotes} upvote${
                    this.state.upvotes === 1 ? "" : "s"
                  }`
                : ""}
            </span>
          </TableColumnBottom>
        </TableRow>
      </React.Fragment>
    );
  }
}

export default Story;
