import React from "react";
import StoriesContainer from "containers/StoriesContainer";
import GlobalStyle from "styles/globalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <StoriesContainer></StoriesContainer>
    </React.Fragment>
  );
};

export default App;
