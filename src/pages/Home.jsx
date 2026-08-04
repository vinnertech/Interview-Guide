import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import TopicCard from '../components/TopicCard';

const topics = [
  { to: '/dotnet', icon: 'bi-microsoft', color: '#512bd4', title: '.NET', desc: '198 Questions: CLR, Memory, Repository Pattern, DI, and Architecture.', btnClass: 'btn-outline-primary', delay: 0.15 },
  { to: '/csharp', icon: 'bi-filetype-cs', color: '#9B4F96', title: 'C#', desc: '100 Questions: C# Fundamentals, OOP Concepts, LINQ, Memory Management, Async/Await.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 0.2 },
  { to: '/efcore', icon: 'bi-database-fill-gear', color: '#0078d4', title: 'EF Core & Dapper', desc: '118 Questions: Entity Framework Core, Change Tracking, Migrations, LINQ, and Dapper.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 0.22 },
  { to: '/python', icon: 'bi-filetype-py', color: '#3776ab', title: 'Python', desc: '240 Questions: Fundamentals, OOP, Magic Methods, Exceptions, Advanced Concepts, Asyncio, and Coding Algorithms.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 0.23 },
  { to: '/java', icon: 'bi-cup-hot-fill', color: '#f89820', title: 'Java', desc: '200 Questions: Core Java, Collections, Multithreading, Memory Management, Java 8+.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 0.25 },
  { to: '/backend', icon: 'bi-server', color: '#4CAF50', title: 'Java Backend', desc: '180 Questions: JDBC, Spring Framework, Spring Boot, Spring MVC, REST APIs, JPA/Hibernate, Microservices, Security, Performance, and Testing.', btnClass: 'btn-outline-success', delay: 0.28 },
  { to: '/angular', icon: 'bi-braces-asterisk', color: '#dd0031', title: 'Angular', desc: '150 Questions: SPA, Directives, RxJS, Signals, NgRx, State Management, and SSR.', btnClass: 'btn-outline-danger', delay: 0.3 },
  { to: '/sql', icon: 'bi-database', color: '#e67e22', title: 'SQL', desc: '120 Questions: Database Design, Queries, Window Functions, and Performance Tuning.', btnClass: 'btn-outline-warning', delay: 0.4 },
  { to: '/javascript', icon: 'bi-filetype-js', color: '#f7df1e', title: 'JavaScript', desc: '200 Questions: ES6+, Closures, Async/Await, Event Loop, DOM, and Design Patterns.', btnClass: 'btn-outline-warning', btnCustomColor: true, delay: 0.5 },
  { to: '/typescript', icon: 'bi-filetype-tsx', color: '#3178c6', title: 'TypeScript', desc: '200 Questions: Types, Generics, OOP, Advanced Types, Decorators, and Design Patterns.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 0.6 },
  { to: '/react', icon: 'bi-filetype-jsx', color: '#61dafb', title: 'React Js', desc: '200 Questions: Hooks, State Management, Rendering, Performance, SSR, and Next.js.', btnClass: 'btn-outline-info', btnCustomColor: true, delay: 0.7 },
  { to: '/jquery', icon: 'bi-plugin', color: '#0769ad', title: 'Jquery-Ajax', desc: '200 Questions: DOM Manipulation, Events, Effects, AJAX, Promises, and Security.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 0.8 },
  { to: '/mongodb', icon: 'bi-env', color: '#47A248', title: 'MongoDB', desc: '225 Questions: NoSQL Basics, Aggregation Framework, Sharding, Replication, and Atlas.', btnClass: 'btn-outline-success', btnCustomColor: true, delay: 0.9 },
  { to: '/nodejs', icon: 'bi-diagram-3-fill', color: '#339933', title: 'Node.js', desc: '225 Questions: Event Loop, Express, Streams, Scaling, Microservices, and Auth.', btnClass: 'btn-outline-success', btnCustomColor: true, delay: 1.0 },
  { to: '/html', icon: 'bi-filetype-html', color: '#e34f26', title: 'HTML', desc: '120 Questions: HTML5, Semantics, Web APIs, Local Storage, and DOM.', btnClass: 'btn-outline-danger', btnCustomColor: true, delay: 1.1 },
  { to: '/css', icon: 'bi-filetype-css', color: '#264de4', title: 'CSS', desc: '110 Questions: CSS3 Layouts, Responsive Design, Flexbox, Grid, and Animations.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 1.2 },
  { to: '/bootstrap', icon: 'bi-bootstrap', color: '#7952b3', title: 'Bootstrap', desc: '20 Questions: Grid System, Components, Utilities, and Responsive Behaviors.', btnClass: 'btn-outline-primary', btnCustomColor: true, delay: 1.3 },
];

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home-bg');
    return () => {
      document.body.classList.remove('home-bg');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Enterprise Interview Guide Portal</title>
        <meta name="description" content="Select a technology stack to begin your preparation." />
      </Helmet>
      <div className="container my-auto py-5" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="text-center mb-5 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="display-3 fw-bold mb-3" style={{ background: 'linear-gradient(to right, #61dafb, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Enterprise Interview Guide
          </h1>
          <p className="lead text-white-50">Select a technology stack to begin your preparation.</p>
        </div>

        <div className="row justify-content-center g-4">
          {topics.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>
      </div>
    </>
  );
}
