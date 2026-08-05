import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopicCard from '../components/TopicCard';

const topics = [
  { to: '/dotnet', icon: 'bi-microsoft', color: '#512bd4', title: '.NET Core & Framework', desc: 'Enterprise backend development' },
  { to: '/csharp', icon: 'bi-filetype-cs', color: '#9B4F96', title: 'C# Fundamentals', desc: 'OOP, LINQ, Async/Await' },
  { to: '/efcore', icon: 'bi-database-fill-gear', color: '#0078d4', title: 'EF Core & Dapper', desc: 'Modern ORM and data access' },
  { to: '/python', icon: 'bi-filetype-py', color: '#3776ab', title: 'Python', desc: 'Data, Scripting, and Web' },
  { to: '/java', icon: 'bi-cup-hot-fill', color: '#f89820', title: 'Java Core', desc: 'Collections, Threads, JVM' },
  { to: '/backend', icon: 'bi-server', color: '#4CAF50', title: 'Java Backend', desc: 'Spring Boot, REST APIs, Microservices' },
  { to: '/angular', icon: 'bi-braces-asterisk', color: '#dd0031', title: 'Angular', desc: 'Enterprise Frontend SPA' },
  { to: '/react', icon: 'bi-filetype-jsx', color: '#61dafb', title: 'React Js', desc: 'Hooks, State, Next.js' },
  { to: '/sql', icon: 'bi-database', color: '#e67e22', title: 'SQL & Database Design', desc: 'Queries, Indexing, Window Functions' },
  { to: '/javascript', icon: 'bi-filetype-js', color: '#f7df1e', title: 'JavaScript', desc: 'ES6+, Event Loop, DOM' },
  { to: '/typescript', icon: 'bi-filetype-tsx', color: '#3178c6', title: 'TypeScript', desc: 'Type Safety, Generics' },
  { to: '/mongodb', icon: 'bi-env', color: '#47A248', title: 'MongoDB', desc: 'NoSQL, Aggregation, Sharding' },
  { to: '/nodejs', icon: 'bi-diagram-3-fill', color: '#339933', title: 'Node.js', desc: 'Event Loop, Express, Streams' },
  { to: '/html', icon: 'bi-filetype-html', color: '#e34f26', title: 'HTML5', desc: 'Semantics & Web APIs' },
  { to: '/css', icon: 'bi-filetype-css', color: '#264de4', title: 'CSS3', desc: 'Flexbox, Grid, Animations' },
  { to: '/bootstrap', icon: 'bi-bootstrap', color: '#7952b3', title: 'Bootstrap', desc: 'Grid system and components' },
  { to: '/jquery', icon: 'bi-plugin', color: '#0769ad', title: 'Jquery', desc: 'Legacy DOM manipulation' },
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
        <div className="row g-4">
          {topics.map((topic, index) => (
            <TopicCard key={index} {...topic} delay={0.05 * index} />
          ))}
        </div>
      </section>
    </>
  );
}
