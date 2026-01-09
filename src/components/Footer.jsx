import React from 'react'
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Insight.</h4>
            <p className="footer-text">
              记录技术成长，分享生活点滴。
              <br/>
              致力于构建高质量的 Web 开发知识库。
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">探索</h4>
            <ul className="footer-links">
              <li><a href="#home">首页</a></li>
              <li><a href="#articles">精华文章</a></li>
              <li><a href="#about">关于作者</a></li>
              <li><a href="#rss">RSS 订阅</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">社交网络</h4>
            <ul className="footer-social-list">
              <li>
                <a href="#" className="footer-social-link">
                   <Github size={18} /> <span>GitHub</span> <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="footer-social-link">
                   <Twitter size={18} /> <span>Twitter</span> <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="footer-social-link">
                   <Mail size={18} /> <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Insight Blog. Designed with Passion.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
