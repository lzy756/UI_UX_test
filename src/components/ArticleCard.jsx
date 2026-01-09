import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({ title, excerpt, date, readTime, tags, image }) => {
  return (
    <article className="article-card">
      <div className="article-image">
        <img src={image || 'https://via.placeholder.com/400x200'} alt={title} />
      </div>
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
        <div className="article-meta">
          <span className="meta-date">{date}</span>
          <span className="meta-divider">·</span>
          <span className="meta-read-time">{readTime}</span>
        </div>
        <div className="article-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
