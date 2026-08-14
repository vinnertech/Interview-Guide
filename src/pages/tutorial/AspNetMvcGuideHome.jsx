import React, { useMemo } from 'react';
import GenericSubjectGuideHome from './GenericSubjectGuideHome';
import { aspnetMvcTutorialQuestions } from '../../data/aspnet-mvc-tutorial-data';
import { createCurriculumFromQuestions, getAllLessonsFromCurriculum } from '../../data/curriculumAdapter';

const mvcCurriculum = createCurriculumFromQuestions(aspnetMvcTutorialQuestions, '#512bd4', 'bi-window');

export default function AspNetMvcGuideHome() {
  const getAllLessons = useMemo(() => () => getAllLessonsFromCurriculum(mvcCurriculum), []);

  return (
    <GenericSubjectGuideHome
      curriculum={mvcCurriculum}
      getAllLessonsFn={getAllLessons}
      basePath="/tutorial/aspnet-mvc"
      courseTitle="ASP.NET MVC Master Guide"
      tagline="Enterprise Web Architecture with MVC"
      description="Master ASP.NET MVC architecture, Razor views, Controller actions, Routing, Filters, Form validation, and ViewModels in baby steps."
      heroGradient="linear-gradient(135deg, #512bd4 0%, #37189f 100%)"
      themeColor="#512bd4"
      icon="bi-window"
    />
  );
}
