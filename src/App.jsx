import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ArticleCard from './components/ArticleCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [articles] = useState([
    {
      id: 1,
      title: '2024 前端技术趋势展望',
      excerpt: '深入探讨 React Server Components、Rust 工具链以及 AI 辅助开发带来的变化，探究前端开发未来的可能性与挑战。',
      date: '2024-03-20',
      readTime: '8 min',
      tags: ['前端', 'React', '趋势'],
      image: '' 
    },
    {
      id: 2,
      title: '构建高性能 React 应用的最佳实践',
      excerpt: '从代码分割到渲染优化，全方位解析如何提升 React 应用的性能表现，让你的应用如丝般顺滑。',
      date: '2024-03-15',
      readTime: '12 min',
      tags: ['React', '性能优化'],
      image: ''
    },
    {
      id: 3,
      title: 'TypeScript 高级类型实战',
      excerpt: '掌握泛型、映射类型和条件类型，让你的代码更加类型安全且富有表现力，彻底告别 any。',
      date: '2024-03-10',
      readTime: '15 min',
      tags: ['TypeScript', '编程'],
      image: ''
    },
    {
      id: 4,
      title: '现代 CSS 布局技巧：从 Flexbox 到 Grid',
      excerpt: '不再依赖 float，使用现代 CSS 特性构建响应式布局的终极指南，轻松驾驭各种复杂布局。',
      date: '2024-03-05',
      readTime: '10 min',
      tags: ['CSS', '布局'],
      image: ''
    }
  ])

  return (
    <div className="app">
      <Header />
      <Hero />
      <main className="main-layout">
        <div className="container">
          <div className="main-content">
            <div className="articles-list">
              {articles.map(article => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
