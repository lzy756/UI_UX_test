import React from 'react'
import { TrendingUp, Folder, ChevronRight, Hash } from 'lucide-react'
import './Sidebar.css'

const Sidebar = () => {
  const popularPosts = [
    { title: 'React Hooks 完全指南', views: '1.2k' },
    { title: 'CSS Grid 布局实战', views: '980' },
    { title: 'JavaScript 异步编程', views: '856' }
  ]

  const categories = [
    { name: '前端开发', count: 12 },
    { name: '后端技术', count: 8 },
    { name: '工具分享', count: 6 },
    { name: '生活随笔', count: 4 }
  ]

  return (
    <aside className="sidebar">
      {/* 关于我 */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">关于我</h3>
        <p className="sidebar-text">
          全栈开发者，热爱编程和分享。专注于 Web 开发技术探索与实践。
        </p>
      </div>

      {/* 热门文章 */}
      <div className="sidebar-card">
        <div className="sidebar-header">
           <TrendingUp size={18} className="sidebar-icon" />
           <h3 className="sidebar-title">热门文章</h3>
        </div>
        <ul className="popular-list">
          {popularPosts.map((post, index) => (
            <li key={index} className="popular-item">
              <a href="#" className="popular-link">
                <span className="popular-title">{post.title}</span>
                <span className="popular-views">{post.views} 阅读</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 分类 */}
      <div className="sidebar-card">
        <div className="sidebar-header">
           <Folder size={18} className="sidebar-icon" />
           <h3 className="sidebar-title">分类</h3>
        </div>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <a href="#" className="category-link">
                <span className="cat-name"><Hash size={14} className="cat-icon"/>{category.name}</span>
                <span className="cat-count">{category.count} <ChevronRight size={14} /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
