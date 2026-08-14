// Adapter to convert Flat Tutorial Questions into a Structured Curriculum for LessonLayout
export function createCurriculumFromQuestions(questions, defaultColor = '#9B4F96', defaultIcon = 'bi-book-half') {
  const categoryMap = new Map();

  questions.forEach((q) => {
    const catName = q.category || 'General';
    if (!categoryMap.has(catName)) {
      categoryMap.set(catName, []);
    }

    // Adapt question fields to match Lesson format expected by LessonLayout
    const adaptedLesson = {
      ...q,
      slug: `lesson-${q.id}`,
      order: `${q.id}`,
      concept: q.explanation || '',
      subtitle: q.summary || '',
      goal: q.summary || `Understand and master ${q.title}.`,
      prerequisites: q.id === 1 ? ['No prior experience required.'] : [`Lesson ${q.id - 1} completed.`]
    };

    categoryMap.get(catName).push(adaptedLesson);
  });

  const chapters = Array.from(categoryMap.entries()).map(([catName, lessons], idx) => {
    const chapterId = `chapter-${idx + 1}`;
    const mappedLessons = lessons.map(l => ({
      ...l,
      chapterId: chapterId,
      chapterTitle: catName
    }));

    return {
      id: chapterId,
      title: catName,
      lessons: mappedLessons
    };
  });

  const level = {
    id: 'complete-course',
    title: 'Complete Curriculum & Architecture Lessons',
    icon: defaultIcon,
    color: defaultColor,
    description: 'Master every concept step-by-step with interactive diagrams, code snippets, and real-world architectures.',
    chapters: chapters
  };

  return [level];
}

export function getAllLessonsFromCurriculum(curriculum) {
  const lessons = [];
  curriculum.forEach(level => {
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

export function getLessonByParamsFromCurriculum(curriculum, chapterId, lessonId) {
  const all = getAllLessonsFromCurriculum(curriculum);
  return all.find(l => 
    (l.chapterId === chapterId || !chapterId) && 
    (l.id === Number(lessonId) || l.id === lessonId || l.slug === lessonId)
  ) || null;
}
