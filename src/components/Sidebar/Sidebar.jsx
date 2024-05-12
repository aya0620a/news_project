import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const TOPICS = [
  {
    icon: "01",
    path: "/",
    title: "Top stories",
  },
  {
    icon: "03",
    path: "/topics/business",
    title: "Business",
  },
  {
    icon: "04",
    path: "/topics/technology",
    title: "Technology",
  },
  {
    icon: "05",
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    icon: "06",
    path: "/topics/sports",
    title: "Sports",
  },
];

const Sidebar = () => {
  return (
    <Router>
    <section>
      <ul>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index} >
              <Link to={topic.path}>
                <a>
                  <span>
                    <img
                      src={`../../../../img/navIcons/${topic.icon}.png`}
                      alt={`${topic.title} icon`}
                      width={33}
                      height={33}
                    />
                  </span>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
    </Router>
  );
};

export default Sidebar;