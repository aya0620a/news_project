import React, { useCallback } from 'react';
import styled from '@emotion/styled'
import  Topics  from '../Articles/Topics';

const SidebarStyle = styled.div`
    width: 200px;
    height: 100vh;
    padding: 0;
    background-color: #333;
    font-size: 32;
`

const Sidebar = ({setTopic}) => {
  //Topicsコンポーネントからトピック配列を取得
  const TOPICS = Topics;


  //トピックをクリックしたときの処理
  const handleTopicClick = useCallback((topic) => {
    //トピックのパスとタイトルをstateに設定してナビゲーションを実行
    setTopic(topic);
  }, [setTopic]);

  return (
    <SidebarStyle>
      <section>
        <ul>
          <div className='grid justify-center pt-8'>
          {TOPICS.map((topic, index) => {
            return (
              <li key={index}>
                <div className='pt-9 pb-5'>
                <div onClick={() => handleTopicClick(topic)} className='text-white'>
                    <span className='items-center justify-center'>
                      <img  
                        src={`../../images/icons/${topic.icon}.png`}
                        alt={`${topic.title} icon`}
                        width={33}
                        height={33}
                        className='ml-4 mr-4 '
                      />
                    </span>
                    <span>
                      {topic.title}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
          </div>
        </ul>
      </section>
    </SidebarStyle>
  );
};

export default Sidebar;