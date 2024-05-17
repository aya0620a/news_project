import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'


const ImageBlock = styled.div`
`

const Image = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
`

const Main = styled.main`
    padding: 20px 5px;
    display: flex;
    flex-direction: column;
    background-color: #222;
`

const ArticleLink = styled.a`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    overflow: hidden;
    height: 200px;
    margin-right: 0;
    &:hover {
        box-shadow: 1px 1px 6px 1px #2F4F4F;
    }
`

const Overview = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-left: 30px;
    padding-right: 20px;
`

const Title = styled.label`
    font-size: 24px;
    cursor: pointer;
`

const Description = styled.p``

const Articles = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

        let req = new Request(url)
        fetch(req)
        .then(res => res.json())
        .then(data => {
            if (data.articles) {
                setNews(data.articles)
            } else {
                console.error('Unexpected response from the API:', data)
            }
        })
    }, [])

    return (   
        <div style={{padding: 0}}>
            <Main>
                {news.map((article, index) => (
                    <ArticleLink href={article.url} key={index}>
                        <ImageBlock>
                            <Image src={article.urlToImage} alt={article.title} className='pl-0 pr-0 mr-0 ml-2 mt-0'/>
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
