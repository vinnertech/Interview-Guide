import React, { useMemo } from 'react';
import GenericSubjectGuideHome from './GenericSubjectGuideHome';
import { csharpTutorialQuestions } from '../../data/csharp-tutorial-data';
import { createCurriculumFromQuestions, getAllLessonsFromCurriculum } from '../../data/curriculumAdapter';

const csharpCurriculum = createCurriculumFromQuestions(csharpTutorialQuestions, '#9B4F96', 'bi-filetype-cs');

export default function CSharpGuideHome() {
  const getAllLessons = useMemo(() => () => getAllLessonsFromCurriculum(csharpCurriculum), []);

  return (
    <GenericSubjectGuideHome
      curriculum={csharpCurriculum}
      getAllLessonsFn={getAllLessons}
      basePath="/tutorial/csharp"
      courseTitle="C# Master Learning Guide"
      tagline="Modern C# & .NET Comprehensive Course"
      description="Master C# programming and the .NET ecosystem from beginner syntax to advanced OOP, LINQ, memory management, and asynchronous architecture in baby steps."
      heroGradient="linear-gradient(135deg, #9B4F96 0%, #7B2D78 100%)"
      themeColor="#9B4F96"
      icon="bi-filetype-cs"
    />
  );
}
