import React from "react";
import PropTypes from "prop-types";
import Nav from "../Nav/Nav";
import NewsList from "../NewsList/NewsList";
import NavItem from "../NavItem/NavItem";
import "./News.css"

const news_list = [
  {
    headline: "Scratch is the world’s largest coding community for children",
    link: "scratch.mit.edu",
    points: 397,
    time: "4 hours ago",
    comments: 165,
    save_to_pocket: false,
  },
  {
    headline:
      "Is Y Combinator worth the money? Brutally honest review of W22 batch experience",
    link: "acecreamu.substack.com",
    points: 424,
    time: "4 hours ago",
    comments: 127,
    save_to_pocket: false,
  },
  {
    headline: "There's something off about LED bulbs",
    link: "nymag.com",
    points: 345,
    time: "6 hours ago",
    comments: 647,
    save_to_pocket: false,
  },
  {
    headline: "Tailscale Funnel now available in beta",
    link: "tailscale.com",
    points: 153,
    time: "3 hours ago",
    comments: 56,
    save_to_pocket: false,
  },
  {
    headline: "RoboPianist, a piano playing robot simulation in the browser",
    link: "kevinzakka.github.io",
    points: 14,
    time: "32 minutes ago",
    comments: 3,
    save_to_pocket: false,
  },
];

const News = () => {
  return (
    <>
      <Nav>
        <NavItem url="/">new</NavItem>
        <NavItem url="/">threads</NavItem>
        <NavItem url="/">comments</NavItem>
        <NavItem url="/">show</NavItem>
        <NavItem url="/">ask</NavItem>
        <NavItem url="/">jobs</NavItem>
        <NavItem url="/">submit</NavItem>
      </Nav>
      {news_list.map((news, index) => (
        <>
          <span className="news-item-number">{index + 1}.</span>
          <NewsList item={news} />
        </>
      ))}
    </>
  );
};

News.propTypes = {};

export default News;
