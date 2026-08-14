import { level1Foundations } from './level1-foundations.js';
import { level2Fundamentals } from './level2-fundamentals.js';
import { level3PropsState } from './level3-props-state.js';
import { level4Forms } from './level4-forms.js';
import { level5Hooks } from './level5-hooks.js';
import { level6Routing } from './level6-routing.js';
import { level7Api } from './level7-api.js';
import { level8State } from './level8-state.js';
import { level9Advanced } from './level9-advanced.js';
import { level10TestingDeploy } from './level10-testing-deploy.js';
import { level11Projects } from './level11-projects.js';
import { level12CrudCapstone } from './level12-crud-capstone.js';

export const reactCurriculum = [
  level1Foundations,
  level2Fundamentals,
  level3PropsState,
  level4Forms,
  level5Hooks,
  level6Routing,
  level7Api,
  level8State,
  level9Advanced,
  level10TestingDeploy,
  level11Projects,
  level12CrudCapstone
];

export function getAllReactLessons() {
  const lessons = [];
  reactCurriculum.forEach(level => {
    level.chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        lessons.push({
          ...lesson,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          levelId: level.id,
          levelTitle: level.title
        });
      });
    });
  });
  return lessons;
}

export function getReactLessonByParams(chapterId, lessonId) {
  const all = getAllReactLessons();
  return all.find(l => 
    (l.chapterId === chapterId || !chapterId) && 
    (l.id === lessonId || l.slug === lessonId)
  ) || null;
}

export function getReactLessonBySlug(slug) {
  const all = getAllReactLessons();
  return all.find(l => l.slug === slug || l.id === slug) || null;
}
