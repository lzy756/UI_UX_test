import React from 'react'
import { Github, Twitter, Mail, PenTool } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-avatar-wrapper">
             <div className="avatar-circle">
                <PenTool size={48} color="white" />
             </div>
          </div>
          <h2 className="hero-title">设计 · 代码 · 生活</h2>
          <p className="hero-description">
            探索技术的边界，记录思考的瞬间。专注于 Web 开发、UI 设计与用户体验的极致追求。
          </p>
          <div className="hero-social">
            <a href="#" className="social-link" aria-label="Github"><Github size={20} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="social-link" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
