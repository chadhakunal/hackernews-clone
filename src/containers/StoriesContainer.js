/* Parent Container for List of Stories */

import React from "react";
import { Table } from "reactstrap";
import Loader from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "layouts/layout";
import { getStories } from "services/hackernews_api";
import Story from "components/Story";
import { PAGE_SIZE } from "constants/index";

class StoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [], // List of Stories received from the Hacker News Api
      loading: true,
      page: 0, // Current Hacker News Page Number (Required for Infinite Scroll)
      end: false, // End of data
    };
  }

  componentDidMount() {
    getStories(this.state.page).then((data) =>
      this.setState({ stories: data, loading: false })
    );
  }

  // Hide/Delete Story from List of Stories
  hideStory = (index) => {
    let stories = [...this.state.stories];
    stories.splice(index, 1);
    this.setState({
      stories: stories,
    });
  };

  // Load Data on Scroll
  loadMoreData = () => {
    this.setState({ loading: true });
    getStories(this.state.page + 1).then((data) =>
      this.setState((prevState) => ({
        page: prevState.page + 1,
        loading: false,
        stories: prevState.stories.concat(data),
        end: data.length < PAGE_SIZE,
      }))
    );
  };

  render() {
    return (
      <Layout>
        <InfiniteScroll
          dataLength={this.state.stories.length}
          next={this.loadMoreData}
          hasMore={!this.state.end}
          endMessage={
            <hr style={{ color: "#ff6600", border: "1px solid" }}></hr>
          }
        >
          <Table className="mt-3" borderless>
            <tbody>
              {
                // Map Stories to Rows
                this.state.stories.map((story, count) => {
                  return story && story["title"] && story["url"] ? (
                    <Story
                      key={count}
                      story={story}
                      index={count}
                      hide={this.hideStory}
                    ></Story>
                  ) : null;
                })
              }
            </tbody>
          </Table>
        </InfiniteScroll>
        {this.state.loading ? (
          <div className="row justify-content-center align-items-center">
            <Loader type="ThreeDots" color="#000" width={40} />
          </div>
        ) : null}
      </Layout>
    );
  }
}

export default StoriesContainer;
