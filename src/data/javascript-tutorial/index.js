import { level1Foundations } from './level1-foundations.js';
import { level2VariablesTypes } from './level2-variables-types.js';
import { level3OperatorsControlFlow } from './level3-operators-control-flow.js';
import { level4FunctionsScopes } from './level4-functions-scopes.js';
import { level5ArraysMethods } from './level5-arrays-methods.js';
import { level6ObjectsImmutability } from './level6-objects-immutability.js';
import { level7DomEvents } from './level7-dom-events.js';
import { level8AsyncEventLoop } from './level8-async-event-loop.js';
import { level9HttpFetchRest } from './level9-http-fetch-rest.js';
import { level10ModulesOOP } from './level10-modules-oop.js';
import { level11AdvancedJS } from './level11-advanced-js.js';
import { level12TestingSecurityPerf } from './level12-testing-security-perf.js';
import { level13GuidedProjects } from './level13-guided-projects.js';
import { level14CrudCapstone } from './level14-crud-capstone.js';

export const jsCurriculum = [
  level1Foundations,
  level2VariablesTypes,
  level3OperatorsControlFlow,
  level4FunctionsScopes,
  level5ArraysMethods,
  level6ObjectsImmutability,
  level7DomEvents,
  level8AsyncEventLoop,
  level9HttpFetchRest,
  level10ModulesOOP,
  level11AdvancedJS,
  level12TestingSecurityPerf,
  level13GuidedProjects,
  level14CrudCapstone
];

export function getAllJsLessons() {
  const list = [];
  jsCurriculum.forEach(level => {
    level.chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        list.push({
          ...lesson,
          levelId: level.id,
          levelTitle: level.title,
          chapterTitle: chapter.title,
          color: level.color,
          icon: level.icon
        });
      });
    });
  });
  return list;
}

export function getJsLessonByParams(chapterId, lessonId) {
  for (const level of jsCurriculum) {
    for (const chapter of level.chapters) {
      if (chapter.id === chapterId) {
        const found = chapter.lessons.find(l => l.id === lessonId || l.slug === lessonId);
        if (found) {
          return {
            ...found,
            levelId: level.id,
            levelTitle: level.title,
            chapterTitle: chapter.title,
            color: level.color,
            icon: level.icon
          };
        }
      }
    }
  }

  // Fallback search across all lessons
  const all = getAllJsLessons();
  return all.find(l => l.id === lessonId || l.slug === lessonId) || null;
}
