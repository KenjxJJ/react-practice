import React from "react";
import PropTypes from "prop-types";

const NewsList = ({ item }) => {
  const {
    headline,
    link,
    points,
    username,
    time,
    total_comments,
    save_to_pocket,
  } = item;

  return (
    <section>
      <header>
        <h2>{headline}</h2>
        <span>({link})</span>
      </header>

      <p>
        <span>
          {points} points by {username} {time}
        </span>
        <span>flag</span>
        <span>hide</span>
        <span>{total_comments} comments</span>
        <span>instapaper</span>
        {!save_to_pocket && <span>save to pocket</span>}
      </p>
    </section>
  );
};

NewsList.propTypes = {};

export default NewsList;
