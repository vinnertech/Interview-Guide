import React, { useMemo } from 'react';
import GenericSubjectTutorialLesson from './GenericSubjectTutorialLesson';
import { csharpTutorialQuestions } from '../../data/csharp-tutorial-data';
import { createCurriculumFromQuestions, getAllLessonsFromCurriculum, getLessonByParamsFromCurriculum } from '../../data/curriculumAdapter';

const csharpCurriculum = createCurriculumFromQuestions(csharpTutorialQuestions, '#9B4F96', 'bi-filetype-cs');

export default function CSharpLesson() {
  const getAllLessons = useMemo(() => () => getAllLessonsFromCurriculum(csharpCurriculum), []);
  const getLessonByParams = useMemo(() => (chId, lId) => getLessonByParamsFromCurriculum(csharpCurriculum, chId, lId), []);

  return (
    <GenericSubjectTutorialLesson
      curriculum={csharpCurriculum}
      getAllLessonsFn={getAllLessons}
      getLessonByParamsFn={getLessonByParams}
      basePath="/tutorial/csharp"
      courseTitle="C# Guide"
      storageKey="vinnertech_csharp_progress"
      icon="bi-filetype-cs"
      themeColor="#9B4F96"
    />
  );
}
