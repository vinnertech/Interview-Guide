import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';

// Import data
import {
  angularQuestions, backendQuestions, bootstrapQuestions, csharpQuestions,
  cssQuestions, dotnetQuestions, efcoreQuestions, htmlQuestions,
  javaQuestions, javascriptQuestions, jqueryQuestions, mongodbQuestions,
  nodejsQuestions, pythonQuestions, reactQuestions, sqlQuestions,
  typescriptQuestions
} from './data';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dotnet" element={<TopicPage title=".NET" description="198 Questions: CLR, Memory, Repository Pattern, DI, and Architecture." questions={dotnetQuestions || []} />} />
            <Route path="csharp" element={<TopicPage title="C#" description="100 Questions: C# Fundamentals, OOP Concepts, LINQ, Memory Management, Async/Await." questions={csharpQuestions || []} />} />
            <Route path="efcore" element={<TopicPage title="EF Core & Dapper" description="118 Questions: Entity Framework Core, Change Tracking, Migrations, LINQ, and Dapper." questions={efcoreQuestions || []} />} />
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
            <Route path="*" element={<div className="container py-5 text-center"><h1>404 - Page Not Found</h1></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
