import { level1Beginner } from './level1-beginner.js';
import { level2Workflow } from './level2-workflow.js';
import { level3Collaboration } from './level3-collaboration.js';
import { level4Intermediate } from './level4-intermediate.js';
import { level5Advanced } from './level5-advanced.js';
import { level6Automation } from './level6-automation.js';
import { level7Projects } from './level7-projects.js';

export const githubCurriculum = [
  level1Beginner,
  level2Workflow,
  level3Collaboration,
  level4Intermediate,
  level5Advanced,
  level6Automation,
  level7Projects
];

/**
 * Returns a flat array of all lessons across all levels and chapters
 */
export function getAllLessons() {
  const lessons = [];
  githubCurriculum.forEach(level => {
    level.chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        lessons.push({
          ...lesson,
          levelId: level.id,
          levelTitle: level.title,
          levelColor: level.color,
          chapterId: chapter.id,
          chapterTitle: chapter.title
        });
      });
    });
  });
  return lessons;
}

/**
 * Find a specific lesson by chapterId and lessonId with resilient fuzzy fallback
 */
export function getLessonByParams(chapterId, lessonId) {
  const all = getAllLessons();
  if (!lessonId) return null;

  // 1. Exact match with chapterId & lessonId/slug
  let match = all.find(l => 
    (l.chapterId === chapterId || !chapterId) && 
    (l.id === lessonId || l.slug === lessonId)
  );
  if (match) return match;

  // 2. Direct match on lessonId / slug across all chapters
  match = all.find(l => l.id === lessonId || l.slug === lessonId);
  if (match) return match;

  // 3. Word-level permutation matching (e.g. three-trees-mental-model <-> mental-model-three-trees)
  const paramWords = lessonId.toLowerCase().split(/[-_]+/).filter(Boolean);
  match = all.find(l => {
    const idWords = (l.id || '').toLowerCase().split(/[-_]+/);
    const slugWords = (l.slug || '').toLowerCase().split(/[-_]+/);
    const combined = new Set([...idWords, ...slugWords]);
    // Match if most words match
    const matchCount = paramWords.filter(w => combined.has(w)).length;
    return matchCount >= Math.min(2, paramWords.length);
  });
  if (match) return match;

  // 4. Substring inclusion fallback
  match = all.find(l => 
    (l.id && l.id.includes(lessonId)) || 
    (l.slug && l.slug.includes(lessonId)) ||
    (lessonId.includes(l.id || '')) ||
    (lessonId.includes(l.slug || ''))
  );
  if (match) return match;

  // 5. Default fallback to first lesson if route is completely invalid
  return all[0] || null;
}

/**
 * Find a specific lesson by unique slug
 */
export function getLessonBySlug(slug) {
  return getLessonByParams(null, slug);
}
