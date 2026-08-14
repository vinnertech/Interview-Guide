import React, { useMemo } from 'react';
import GenericSubjectGuideHome from './GenericSubjectGuideHome';
import { aspnetCoreTutorialQuestions } from '../../data/aspnet-core-tutorial-data';
import { createCurriculumFromQuestions, getAllLessonsFromCurriculum } from '../../data/curriculumAdapter';

const coreCurriculum = createCurriculumFromQuestions(aspnetCoreTutorialQuestions, '#512bd4', 'bi-rocket-takeoff');

export default function AspNetCoreGuideHome() {
  const getAllLessons = useMemo(() => () => getAllLessonsFromCurriculum(coreCurriculum), []);

  return (
    <GenericSubjectGuideHome
      curriculum={coreCurriculum}
      getAllLessonsFn={getAllLessons}
      basePath="/tutorial/aspnet-core"
      courseTitle="ASP.NET Core Master Guide"
      tagline="High-Performance Cross-Platform Web Apps & APIs"
      description="Master modern ASP.NET Core from Kestrel server architecture, Dependency Injection, Middleware pipeline, REST Web APIs, EF Core, to Docker deployment."
      heroGradient="linear-gradient(135deg, #512bd4 0%, #30119e 100%)"
      themeColor="#512bd4"
      icon="bi-rocket-takeoff"
    />
  );
}
