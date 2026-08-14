import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';

// SEO Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// GitHub Tutorial Pages
import GitHubGuideHome from './pages/tutorial/GitHubGuideHome';
import GitHubLesson from './pages/tutorial/GitHubLesson';

// React Tutorial Pages
import ReactGuideHome from './pages/tutorial/ReactGuideHome';
import ReactLesson from './pages/tutorial/ReactLesson';

// JavaScript Tutorial Pages
import JavaScriptGuideHome from './pages/tutorial/JavaScriptGuideHome';
import JavaScriptLesson from './pages/tutorial/JavaScriptLesson';

// SQL Tutorial Pages
import SqlGuideHome from './pages/tutorial/SqlGuideHome';
import SqlLesson from './pages/tutorial/SqlLesson';

// Angular Tutorial Pages
import AngularGuideHome from './pages/tutorial/AngularGuideHome';
import AngularLesson from './pages/tutorial/AngularLesson';

// TypeScript Tutorial Pages
import TypeScriptGuideHome from './pages/tutorial/TypeScriptGuideHome';
import TypeScriptLesson from './pages/tutorial/TypeScriptLesson';

// Import data
import {
  angularQuestions, backendQuestions, bootstrapQuestions, csharpQuestions,
  cssQuestions, dotnetQuestions, efcoreQuestions, htmlQuestions,
  javaQuestions, javascriptQuestions, jqueryQuestions, mongodbQuestions,
  nodejsQuestions, pythonQuestions, reactQuestions, sqlQuestions,
  typescriptQuestions, cppQuestions, azuredevopsQuestions, awsdevopsQuestions,
  dockerk8sQuestions, dotnetcoreQuestions, edaQuestions, gitQuestions, agileQuestions,
  csharpTutorialQuestions, aspnetMvcTutorialQuestions, aspnetCoreTutorialQuestions
} from './data';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* SEO & Standard Pages */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />

            {/* Topic Pages */}
            <Route path="cpp" element={<TopicPage title="C++" description="184 Questions: C++ Fundamentals, OOP Concepts, Templates, STL, Modern C++, and Coding Problems." questions={cppQuestions || []} />} />
            <Route path="dotnet" element={<TopicPage title=".NET" description="198 Questions: CLR, Memory, Repository Pattern, DI, and Architecture." questions={dotnetQuestions || []} />} />
            <Route path="csharp" element={<TopicPage title="C#" description="100 Questions: C# Fundamentals, OOP Concepts, LINQ, Memory Management, Async/Await." questions={csharpQuestions || []} />} />
            <Route path="efcore" element={<TopicPage title="EF Core & Dapper" description="118 Questions: Entity Framework Core, Change Tracking, Migrations, LINQ, and Dapper." questions={efcoreQuestions || []} />} />
            <Route path="dotnetcore" element={<TopicPage title=".NET Core Web API & MVC" description="150 Questions: ASP.NET Core Fundamentals, MVC, Web API, Middleware, JWT, Performance, Testing, and Real-World Scenarios." questions={dotnetcoreQuestions || []} />} />
            <Route path="java" element={<TopicPage title="Java" description="200 Questions: Core Java, Collections, Multithreading, Memory Management, Java 8+." questions={javaQuestions || []} />} />
            <Route path="backend" element={<TopicPage title="Java Backend" description="180 Questions: JDBC, Spring Framework, Spring Boot, Spring MVC, REST APIs, JPA/Hibernate, Microservices, Security, Performance, and Testing." questions={backendQuestions || []} />} />
            <Route path="html" element={<TopicPage title="HTML" description="120 Questions: HTML5, Semantics, Web APIs, Local Storage, and DOM." questions={htmlQuestions || []} />} />
            <Route path="css" element={<TopicPage title="CSS" description="110 Questions: CSS3 Layouts, Responsive Design, Flexbox, Grid, and Animations." questions={cssQuestions || []} />} />
            <Route path="bootstrap" element={<TopicPage title="Bootstrap" description="20 Questions: Grid System, Components, Utilities, and Responsive Behaviors." questions={bootstrapQuestions || []} />} />
            <Route path="javascript" element={<TopicPage title="JavaScript" description="200 Questions: ES6+, Closures, Async/Await, Event Loop, DOM, and Design Patterns." questions={javascriptQuestions || []} />} />
            <Route path="typescript" element={<TopicPage title="TypeScript" description="200 Questions: Types, Generics, OOP, Advanced Types, Decorators, and Design Patterns." questions={typescriptQuestions || []} />} />
            <Route path="angular" element={<TopicPage title="Angular" description="150 Questions: SPA, Directives, RxJS, Signals, NgRx, State Management, and SSR." questions={angularQuestions || []} />} />
            <Route path="react" element={<TopicPage title="React" description="200 Questions: Hooks, State Management, Rendering, Performance, SSR, and Next.js." questions={reactQuestions || []} />} />
            <Route path="jquery" element={<TopicPage title="jQuery" description="200 Questions: DOM Manipulation, Events, Effects, AJAX, Promises, and Security." questions={jqueryQuestions || []} />} />
            <Route path="mongodb" element={<TopicPage title="MongoDB" description="225 Questions: NoSQL Basics, Aggregation Framework, Sharding, Replication, and Atlas." questions={mongodbQuestions || []} />} />
            <Route path="nodejs" element={<TopicPage title="Node.js" description="225 Questions: Event Loop, Express, Streams, Scaling, Microservices, and Auth." questions={nodejsQuestions || []} />} />
            <Route path="sql" element={<TopicPage title="SQL" description="120 Questions: Database Design, Queries, Window Functions, and Performance Tuning." questions={sqlQuestions || []} />} />
            <Route path="python" element={<TopicPage title="Python" description="240 Questions: Fundamentals, OOP, Magic Methods, Exceptions, Advanced Concepts, Asyncio, and Coding Algorithms." questions={pythonQuestions || []} />} />
            <Route path="eda" element={<TopicPage title="Event-Driven Architecture" description="100 Questions: Event-Driven Architecture, RabbitMQ, Apache Kafka, Redis, Distributed Caching, and Real-World Scenarios." questions={edaQuestions || []} />} />
            <Route path="git" element={<TopicPage title="Git & GitHub" description="150 Questions: Git Fundamentals, Commands, Branching, Rebase vs Merge, Azure Repos, GitHub Actions, and Git Security." questions={gitQuestions || []} />} />
            <Route path="agile" element={<TopicPage title="Agile & Scrum" description="100 Questions: Agile, Waterfall, Scrum Framework, Ceremonies, Metrics, and Real-World Scenarios." questions={agileQuestions || []} />} />
            <Route path="azuredevops" element={<TopicPage title="Azure DevOps" description="200 Questions: CI/CD, Azure Repos, Boards, Pipelines, Releases, and Best Practices." questions={azuredevopsQuestions || []} />} />
            <Route path="awsdevops" element={<TopicPage title="AWS DevOps" description="200 Questions: AWS Services, EC2, S3, CodePipeline, Kubernetes, ECS, IAM, Security, CloudWatch, and Scenarios." questions={awsdevopsQuestions || []} />} />
            <Route path="dockerk8s" element={<TopicPage title="Docker & Kubernetes" description="100 Questions: Containers, Images, Volumes, Pods, Deployments, Services, Scenarios, and Production Architecture." questions={dockerk8sQuestions || []} />} />

            {/* Tutorials */}
            <Route path="tutorial/sql" element={<SqlGuideHome />} />
            <Route path="tutorial/sql/:chapterId/:lessonId" element={<SqlLesson />} />
            <Route path="tutorial/angular" element={<AngularGuideHome />} />
            <Route path="tutorial/angular/:chapterId/:lessonId" element={<AngularLesson />} />
            <Route path="tutorial/typescript" element={<TypeScriptGuideHome />} />
            <Route path="tutorial/typescript/:chapterId/:lessonId" element={<TypeScriptLesson />} />
            <Route path="tutorial/javascript" element={<JavaScriptGuideHome />} />
            <Route path="tutorial/javascript/:chapterId/:lessonId" element={<JavaScriptLesson />} />
            <Route path="tutorial/react" element={<ReactGuideHome />} />
            <Route path="tutorial/react/:chapterId/:lessonId" element={<ReactLesson />} />
            <Route path="tutorial/github" element={<GitHubGuideHome />} />
            <Route path="tutorial/github/:chapterId/:lessonId" element={<GitHubLesson />} />
            <Route path="tutorial/csharp" element={<TopicPage title="C# Learning Guide" description="A highly detailed and completely accurate C# Learning Guide, carefully structured for beginners from basic syntax to advanced OOP concepts." questions={csharpTutorialQuestions || []} />} />
            <Route path="tutorial/aspnet-mvc" element={<TopicPage title="ASP.NET MVC Guide" description="A highly detailed and completely accurate ASP.NET MVC Learning Guide, structured for beginners to master web development." questions={aspnetMvcTutorialQuestions || []} />} />
            <Route path="tutorial/aspnet-core" element={<TopicPage title="ASP.NET Core Guide" description="A comprehensive guide to building high-performance, cross-platform applications with ASP.NET Core." questions={aspnetCoreTutorialQuestions || []} />} />
            
            <Route path="*" element={<div className="container py-5 text-center"><h1>404 - Page Not Found</h1></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
