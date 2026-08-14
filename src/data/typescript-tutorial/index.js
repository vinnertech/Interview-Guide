import { level1Foundations } from './level1-foundations.js';
import { level2BasicTypes } from './level2-basic-types.js';
import { level3FunctionsOverloads } from './level3-functions-overloads.js';
import { level4ArraysTuplesEnums } from './level4-arrays-tuples-enums.js';
import { level5ObjectTypesInterfaces } from './level5-object-types-interfaces.js';
import { level6UnionsNarrowing } from './level6-unions-narrowing.js';
import { level7GenericsMastery } from './level7-generics-mastery.js';
import { level8AdvancedTypes } from './level8-advanced-types.js';
import { level9UtilityTypes } from './level9-utility-types.js';
import { level10ClassesModules } from './level10-classes-modules.js';
import { level11AsyncValidation } from './level11-async-validation.js';
import { level12DomWebApis } from './level12-dom-web-apis.js';
import { level13ReactTypeScript } from './level13-react-typescript.js';
import { level14CrudCapstone } from './level14-crud-capstone.js';

export const tsCurriculum = [
  level1Foundations,
  level2BasicTypes,
  level3FunctionsOverloads,
  level4ArraysTuplesEnums,
  level5ObjectTypesInterfaces,
  level6UnionsNarrowing,
  level7GenericsMastery,
  level8AdvancedTypes,
  level9UtilityTypes,
  level10ClassesModules,
  level11AsyncValidation,
  level12DomWebApis,
  level13ReactTypeScript,
  level14CrudCapstone
];

export function getAllTsLessons() {
  const list = [];
  tsCurriculum.forEach(level => {
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

export function getTsLessonByParams(chapterId, lessonId) {
  for (const level of tsCurriculum) {
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
  const all = getAllTsLessons();
  return all.find(l => l.id === lessonId || l.slug === lessonId) || null;
}
