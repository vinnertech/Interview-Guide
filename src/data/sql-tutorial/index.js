// SQL Curriculum Aggregator & Helper Functions
import { level1DatabaseFoundations } from './level1-database-foundations.js';
import { level2InstallationTools } from './level2-installation-tools.js';
import { level3DataTypesNulls } from './level3-data-types-nulls.js';
import { level4TableConstraints } from './level4-table-constraints.js';
import { level5DmlCrudOperations } from './level5-dml-crud-operations.js';
import { level6FilteringConditions } from './level6-filtering-conditions.js';
import { level7SortingAggregates } from './level7-sorting-aggregates.js';
import { level8JoinsRelationships } from './level8-joins-relationships.js';
import { level9SubqueriesCtes } from './level9-subqueries-ctes.js';
import { level10FunctionsWindowing } from './level10-functions-windowing.js';
import { level11Programmability } from './level11-programmability.js';
import { level12TransactionsConcurrency } from './level12-transactions-concurrency.js';
import { level13IndexingPerformance } from './level13-indexing-performance.js';
import { level14SecurityCrudCapstone } from './level14-security-crud-capstone.js';

export const sqlCurriculum = [
  level1DatabaseFoundations,
  level2InstallationTools,
  level3DataTypesNulls,
  level4TableConstraints,
  level5DmlCrudOperations,
  level6FilteringConditions,
  level7SortingAggregates,
  level8JoinsRelationships,
  level9SubqueriesCtes,
  level10FunctionsWindowing,
  level11Programmability,
  level12TransactionsConcurrency,
  level13IndexingPerformance,
  level14SecurityCrudCapstone
];

export function getAllSqlLessons() {
  const lessons = [];
  sqlCurriculum.forEach(level => {
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

export function getSqlLessonByParams(chapterId, lessonId) {
  const all = getAllSqlLessons();
  return all.find(l => 
    (l.chapterId === chapterId || !chapterId) && 
    (l.id === lessonId || l.slug === lessonId)
  ) || null;
}

export function getSqlLessonBySlug(slug) {
  const all = getAllSqlLessons();
  return all.find(l => l.slug === slug || l.id === slug) || null;
}
