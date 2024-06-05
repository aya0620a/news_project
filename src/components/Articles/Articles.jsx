import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'


const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #222;
`

const ArticleLink = styled.a`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    cursor: pointer;
    height: 200px;
    &:hover {
        box-shadow: 1px 1px 6px 1px #2F4F4F;
    }
`
const ImageBlock = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 15%;
    width: 20%;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    margin-left: 10px;
`

const Image = styled.img`
object-fit: contain;
width: 150%;
height: 100
border-radius: 5px;
flex: 1;
    &:hover {
        transform: scale(1.1);
    }
`

const Overview = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-left: 50px;
`

const Title = styled.label`
    font-size: 24px;
    cursor: pointer;
    text-decoration: underline;
`

const Description = styled.p`
    font-size: 16px;
    cursor: pointer;
    color: #ccc;
    text-overflow: ellipsis;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0;
`



const Articles = ({topic}) => {
    const [news, setNews] = useState([])

    useEffect(() => {
        console.log('topic tag:', topic.tag)

        const url = `https://newsapi.org/v2/top-headlines?country=jp&category=${topic.tag}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        
        console.log('url:', url)
        //requestオブジェクトを作成
        let req = new Request(url)
        //fetchメソッドでAPIを取得
        fetch(req)
        .then(res => res.json())
        .then(data => {
            if (data.articles) {
                setNews(data.articles)
            } else {
                console.error('Unexpected response from the API:', data)
            }
        })
    }, [setNews, topic]);

    return (   
        <div style={{padding: 0}}>
            <Main>
                {news.map((article, index) => (
                    <ArticleLink href={article.url} key={index}>
                        <ImageBlock>
                            <Image src={article.urlToImage} alt={article.title}/>
                        </ImageBlock>
                        <Overview  style={{width: 'fit-content'}}>
                            <Title className='text-white'>{article.title}</Title>
                            <Description className='text-white'>{article.description}</Description>
                        </Overview>
                    </ArticleLink>
                ))}
            </Main>
        </div>  
    )
}

export default Articles
