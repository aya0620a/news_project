import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from '@emotion/styled'

const SidebarStyle = styled.div`
    width: 200px;
    height: 100vh;
    padding: 0;
    background-color: #333;
    font-size: 32;
`

const TOPICS = [
  {
    icon: "01",
    path: "/",
    title: "Top stories",
  },
  {
    icon: "02",
    path: "/topics/business",
    title: "Business",
  },
  {
    icon: "03",
    path: "/topics/technology",
    title: "Technology",
  },
  {
    icon: "04",
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    icon: "05",
    path: "/topics/sports",
    title: "Sports",
  },
];


const Sidebar = () => {
  return (
    <SidebarStyle>
    <Router>
    <section>
      <ul>
        <div className='grid justify-center pt-8'>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index}>
              <div className='pt-8'>
              <Link to={topic.path} className="text-white">
                  <span className='items-center justify-center'>
                    <img  
                      src={`../../images/icons/${topic.icon}.png`}
                      alt={`${topic.title} icon`}
                      width={33}
                      height={33}
                      className='ml-4 mr-4'
                    />
                  </span>
                  <span>
                    {topic.title}
                  </span>
              </Link>
              </div>
            </li>
          );
        })}
        </div>
      </ul>
    </section>
    </Router>
    </SidebarStyle>
  );
};

export default Sidebar;