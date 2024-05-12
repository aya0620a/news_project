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
    padding: 20px 100px;
    display: flex;
    flex-direction: column;
`

const ArticleLink = styled.a`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    overflow: hidden;
    height: 200px;
    &:hover {
        box-shadow: 1px 1px 6px 1px #2F4F4F;
    }
`

const Overview = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
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
        <Main>
            {news.map((article, index) => (
                <ArticleLink href={article.url} key={index}>
                    <ImageBlock>
                        <Image src={article.urlToImage} alt={article.title} />
                    </ImageBlock>
                    <Overview>
                        <Title>{article.title}</Title>
                        <Description>{article.description}</Description>
                    </Overview>
                </ArticleLink>
            ))}
        </Main>
    )
}

export default Articles
