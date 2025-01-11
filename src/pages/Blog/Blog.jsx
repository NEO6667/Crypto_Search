import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Blog = () => {
    const [blogData, setBlogData] = useState({articles:[]})
    useEffect(() => {
        const options = {
            url: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6aba1be77a6547299fd3e803c6a51598',
            method: 'GET'
        }
        axios(options).then((res) => {
            console.log(res);
            setBlogData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(blogData);
    


    return (
        <div className="blog-container">
      {blogData.articles.map((article, index) => (
        <div className="card" key={index}>
          <img
            src={article.urlToImage || "https://via.placeholder.com/150"}
            alt={article.title}
            className="card-image"
          />
          <div className="card-content">
            <h3>{article.title.slice(0,20)}...</h3>
            <p>{article.description.slice(0,100)}...</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
    )
}

export default Blog
