import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopicCard from '../components/TopicCard';

const topics = [
  // Frontend
  { to: '/html', icon: 'bi-filetype-html', color: '#e34f26', title: 'HTML5', desc: 'Semantics & Web APIs', category: 'Frontend' },
  { to: '/css', icon: 'bi-filetype-css', color: '#264de4', title: 'CSS3', desc: 'Flexbox, Grid, Animations', category: 'Frontend' },
  { to: '/javascript', icon: 'bi-filetype-js', color: '#f7df1e', title: 'JavaScript', desc: 'ES6+, Event Loop, DOM', category: 'Frontend' },
  { to: '/typescript', icon: 'bi-filetype-tsx', color: '#3178c6', title: 'TypeScript', desc: 'Type Safety, Generics', category: 'Frontend' },
  { to: '/react', icon: 'bi-filetype-jsx', color: '#61dafb', title: 'React Js', desc: 'Hooks, State, Next.js', category: 'Frontend' },
  { to: '/angular', icon: 'bi-braces-asterisk', color: '#dd0031', title: 'Angular', desc: 'Enterprise Frontend SPA', category: 'Frontend' },
  { to: '/bootstrap', icon: 'bi-bootstrap', color: '#7952b3', title: 'Bootstrap', desc: 'Grid system and components', category: 'Frontend' },
  { to: '/jquery', icon: 'bi-plugin', color: '#0769ad', title: 'Jquery', desc: 'Legacy DOM manipulation', category: 'Frontend' },

  // Backend & Core
  { to: '/eda', icon: 'bi-bezier2', color: '#ff4d4d', title: 'Event-Driven Architecture', desc: 'RabbitMQ, Kafka, Redis', category: 'Backend & Core' },
  { to: '/dotnetcore', icon: 'bi-box-seam-fill', color: '#512bd4', title: '.NET Core API & MVC', desc: 'Web API, MVC, Middleware', category: 'Backend & Core' },
  { to: '/dotnet', icon: 'bi-microsoft', color: '#512bd4', title: '.NET Core & Framework', desc: 'Enterprise backend development', category: 'Backend & Core' },
  { to: '/csharp', icon: 'bi-filetype-cs', color: '#9B4F96', title: 'C# Fundamentals', desc: 'OOP, LINQ, Async/Await', category: 'Backend & Core' },
  { to: '/java', icon: 'bi-cup-hot-fill', color: '#f89820', title: 'Java Core', desc: 'Collections, Threads, JVM', category: 'Backend & Core' },
  { to: '/backend', icon: 'bi-server', color: '#4CAF50', title: 'Java Backend', desc: 'Spring Boot, REST APIs, Microservices', category: 'Backend & Core' },
  { to: '/python', icon: 'bi-filetype-py', color: '#3776ab', title: 'Python', desc: 'Data, Scripting, and Web', category: 'Backend & Core' },
  { to: '/cpp', icon: 'bi-c-circle-fill', color: '#00599C', title: 'C++', desc: 'Memory Management, OOP, STL', category: 'Backend & Core' },
  { to: '/nodejs', icon: 'bi-diagram-3-fill', color: '#339933', title: 'Node.js', desc: 'Event Loop, Express, Streams', category: 'Backend & Core' },

  // Database & ORM
  { to: '/sql', icon: 'bi-database', color: '#e67e22', title: 'SQL & Database Design', desc: 'Queries, Indexing, Window Functions', category: 'Database & ORM' },
  { to: '/efcore', icon: 'bi-database-fill-gear', color: '#0078d4', title: 'EF Core & Dapper', desc: 'Modern ORM and data access', category: 'Database & ORM' },
  { to: '/mongodb', icon: 'bi-env', color: '#47A248', title: 'MongoDB', desc: 'NoSQL, Aggregation, Sharding', category: 'Database & ORM' },

  // DevOps & Cloud
  { to: '/git', icon: 'bi-git', color: '#f14e32', title: 'Git & GitHub', desc: 'Version Control, Commands, CI/CD', category: 'DevOps & Cloud' },
  { to: '/azuredevops', icon: 'bi-infinity', color: '#0078d4', title: 'Azure DevOps', desc: 'CI/CD, Pipelines, Releases', category: 'DevOps & Cloud' },
  { to: '/awsdevops', icon: 'bi-cloud-arrow-up-fill', color: '#FF9900', title: 'AWS DevOps', desc: 'AWS Services, CI/CD, K8s', category: 'DevOps & Cloud' },
  { to: '/dockerk8s', icon: 'bi-box-seam', color: '#2496ED', title: 'Docker & Kubernetes', desc: 'Containers & Orchestration', category: 'DevOps & Cloud' },

  // Software Engineering
  { to: '/agile', icon: 'bi-kanban', color: '#0052CC', title: 'Agile & Scrum', desc: 'Agile, Waterfall, Scrum Framework', category: 'Software Engineering' },

  // Tutorials
  { to: '/tutorial/sql', icon: 'bi-database-fill', color: '#e67e22', title: 'SQL Server Guide', desc: 'Zero to Architect Course', category: 'Tutorials (New)' },
  { to: '/tutorial/angular', icon: 'bi-shield-shaded', color: '#dd0031', title: 'Angular Guide', desc: 'Zero to Architect Course', category: 'Tutorials (New)' },
  { to: '/tutorial/typescript', icon: 'bi-filetype-tsx', color: '#3178c6', title: 'TypeScript Guide', desc: 'Zero to Architect Course', category: 'Tutorials (New)' },
  { to: '/tutorial/javascript', icon: 'bi-filetype-js', color: '#f59e0b', title: 'JavaScript Guide', desc: 'Zero to Architect Course', category: 'Tutorials (New)' },
  { to: '/tutorial/react', icon: 'bi-filetype-jsx', color: '#61dafb', title: 'React.js Guide', desc: 'Zero to Senior Architect Course', category: 'Tutorials (New)' },
  { to: '/tutorial/github', icon: 'bi-github', color: '#f14e32', title: 'Git & GitHub Guide', desc: 'Zero to Hero Developer Guide', category: 'Tutorials (New)' },
  { to: '/tutorial/csharp', icon: 'bi-book-half', color: '#9B4F96', title: 'C# Learning Guide', desc: 'Beginner to Advanced Tutorial', category: 'Tutorials (New)' },
  { to: '/tutorial/aspnet-mvc', icon: 'bi-window', color: '#512bd4', title: 'ASP.NET MVC Guide', desc: 'Beginner to Advanced MVC', category: 'Tutorials (New)' },
  { to: '/tutorial/aspnet-core', icon: 'bi-rocket-takeoff', color: '#512bd4', title: 'ASP.NET Core Guide', desc: 'High-Performance Web Apps', category: 'Tutorials (New)' }
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - VinnerTECH Interview Guide</title>
        <meta name="description" content="Advance your engineering skills and crack your next technical interview with VinnerTECH." />
      </Helmet>
      
      {/* SI Education Hero Section */}
      <section className="py-4 py-md-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)' }}>
        {/* Background Glow */}
        <div className="hero-glow"></div>
        
        {/* Floating Icons */}
        <i className="bi bi-filetype-jsx fs-1 floating-icon d-none d-md-block" style={{ color: 'var(--primary-color)', top: '15%', left: '15%', animationDelay: '0s' }}></i>
        <i className="bi bi-database-fill fs-2 floating-icon d-none d-md-block" style={{ color: 'var(--secondary-color)', bottom: '20%', left: '20%', animationDelay: '1.5s' }}></i>
        <i className="bi bi-braces-asterisk fs-1 floating-icon d-none d-md-block" style={{ color: '#FF512F', top: '25%', right: '15%', animationDelay: '0.5s' }}></i>
        <i className="bi bi-cloud-arrow-up-fill fs-2 floating-icon d-none d-md-block" style={{ color: '#DD2476', bottom: '25%', right: '20%', animationDelay: '2s' }}></i>
        <i className="bi bi-code-slash fs-3 floating-icon d-none d-lg-block" style={{ color: 'var(--heading-color)', top: '10%', right: '40%', animationDelay: '1s', opacity: 0.2 }}></i>

        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bolder mb-3 fade-in-up" style={{ color: 'var(--heading-color)', letterSpacing: '-1px', animationDelay: '0.1s' }}>
                Advance your engineering skills with our <span className="animated-gradient-text">interview guides</span>
              </h1>
              <p className="fs-5 fw-medium mb-4 mx-auto fade-in-up" style={{ color: 'var(--text-color)', maxWidth: '600px', animationDelay: '0.2s', opacity: 0.9 }}>
                Build confidence and prepare for your next technical interview with comprehensive questions curated from world-class companies.
              </p>
              <div className="d-flex justify-content-center gap-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a href="#topics" className="btn btn-primary px-4 py-2 fw-bold rounded-pill shadow-sm transition btn-pulse" style={{ backgroundColor: 'var(--primary-color)', border: 'none' }}>
                  Explore Topics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section id="topics" className="container py-5 my-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: 'var(--heading-color)' }}>Browse by Technology</h2>
          <p style={{ color: 'var(--text-color)' }}>Select a technology to start your preparation instantly.</p>
        </div>
        
        {[
          { name: 'Frontend', icon: 'bi-window-sidebar', color: '#FF512F' },
          { name: 'Backend & Core', icon: 'bi-hdd-network', color: '#512bd4' },
          { name: 'Database & ORM', icon: 'bi-database-fill-gear', color: '#13C296' },
          { name: 'DevOps & Cloud', icon: 'bi-cloud-arrow-up-fill', color: '#0078d4' },
          { name: 'Tutorials (New)', icon: 'bi-journal-code', color: '#9B4F96' }
        ].map((cat, catIndex) => (
          <div key={cat.name} className="mb-5 fade-in-up" style={{ animationDelay: `${0.1 * catIndex}s` }}>
            <div className="d-flex align-items-center mb-4 pb-3 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
              <div 
                className="d-flex align-items-center justify-content-center rounded-3 shadow-sm me-3 transition" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: `${cat.color}15`, 
                  color: cat.color,
                  border: `1px solid ${cat.color}30`
                }}
              >
                <i className={`bi ${cat.icon} fs-4`}></i>
              </div>
              <h3 className="fw-bolder mb-0" style={{ color: cat.color, letterSpacing: '-0.5px' }}>
                {cat.name}
              </h3>
            </div>
            <div className="row g-4">
              {topics.filter(t => t.category === cat.name).map((topic, index) => (
                <TopicCard key={topic.title} {...topic} delay={0.05 * index} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
