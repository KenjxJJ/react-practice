import React from "react";
import "./index.css";
import PropTypes from "prop-types";

import Avatar from "./components/Avatar/Avatar";
import NameWithHandle from "./components/NameWithHandle/NameWithHandle";
import Time from "./components/Time/Time";
import Message from "./components/Message/Message";
import ReplyButton from "./components/ReplyButton/ReplyButton";
import RetweetButton from "./components/RetweetButton/RetweetButton";
import LikeButton from "./components/LikeButton/LikeButton";
import MoreOptionsButton from "./components/MoreOptionsButton/MoreOptionsButton";

const testTweet = {
  message: "Something about cats.",
  gravatar: "a3f283bba5fe971a9f7fc84b0b7dafa7",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

export const Tweet = ({ tweet }) => {
  const { likes, retweets, message, timestamp, author, gravatar } = tweet;

  return (
    <div className="tweet">
      <Avatar hash={gravatar} />
      <div className="content">
        <NameWithHandle author={author} />
        <Time time={timestamp} />
        <Message text={message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={retweets} />
          <LikeButton count={likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string,
    author: PropTypes.object, // Just an alterative - shape
    gravatar: PropTypes.string,
    message: PropTypes.string,
  }),
};

function App() {
  return (
    <div className="App">
      <Tweet tweet={testTweet} />
    </div>
  );
}

export default App;
