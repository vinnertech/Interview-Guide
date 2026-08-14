import React, { useMemo } from 'react';
import GenericSubjectTutorialLesson from './GenericSubjectTutorialLesson';
import { aspnetMvcTutorialQuestions } from '../../data/aspnet-mvc-tutorial-data';
import { createCurriculumFromQuestions, getAllLessonsFromCurriculum, getLessonByParamsFromCurriculum } from '../../data/curriculumAdapter';

const mvcCurriculum = createCurriculumFromQuestions(aspnetMvcTutorialQuestions, '#512bd4', 'bi-window');

export default function AspNetMvcLesson() {
  const getAllLessons = useMemo(() => () => getAllLessonsFromCurriculum(mvcCurriculum), []);
  const getLessonByParams = useMemo(() => (chId, lId) => getLessonByParamsFromCurriculum(mvcCurriculum, chId, lId), []);

  return (
    <GenericSubjectTutorialLesson
      curriculum={mvcCurriculum}
      getAllLessonsFn={getAllLessons}
      getLessonByParamsFn={getLessonByParams}
      basePath="/tutorial/aspnet-mvc"
      courseTitle="ASP.NET MVC Guide"
      storageKey="vinnertech_aspnetmvc_progress"
      icon="bi-window"
      themeColor="#512bd4"
    />
  );
}
