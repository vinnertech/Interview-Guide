import React, { useMemo } from 'react';
import GenericSubjectTutorialLesson from './GenericSubjectTutorialLesson';
import { aspnetCoreTutorialQuestions } from '../../data/aspnet-core-tutorial-data';
import { createCurriculumFromQuestions, getAllLessonsFromCurriculum, getLessonByParamsFromCurriculum } from '../../data/curriculumAdapter';

const coreCurriculum = createCurriculumFromQuestions(aspnetCoreTutorialQuestions, '#512bd4', 'bi-rocket-takeoff');

export default function AspNetCoreLesson() {
  const getAllLessons = useMemo(() => () => getAllLessonsFromCurriculum(coreCurriculum), []);
  const getLessonByParams = useMemo(() => (chId, lId) => getLessonByParamsFromCurriculum(coreCurriculum, chId, lId), []);

  return (
    <GenericSubjectTutorialLesson
      curriculum={coreCurriculum}
      getAllLessonsFn={getAllLessons}
      getLessonByParamsFn={getLessonByParams}
      basePath="/tutorial/aspnet-core"
      courseTitle="ASP.NET Core Guide"
      storageKey="vinnertech_aspnetcore_progress"
      icon="bi-rocket-takeoff"
      themeColor="#512bd4"
    />
  );
}
