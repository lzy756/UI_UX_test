import React from 'react'
import { Sparkles, Home, BookOpen, Hash, User, Feather } from 'lucide-react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Feather size={24} className="logo-icon" />
            <h1>Insight.</h1>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link"><Home size={18} /> <span>首页</span></a>
            <a href="#articles" className="nav-link"><BookOpen size={18} /> <span>文章</span></a>
            <a href="#categories" className="nav-link"><Hash size={18} /> <span>分类</span></a>
            <a href="#about" className="nav-link"><User size={18} /> <span>关于</span></a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
