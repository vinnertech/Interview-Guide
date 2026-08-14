// Angular Curriculum Aggregator & Helper Functions
import { level1Foundations } from './level1-foundations.js';
import { level2CliAnatomy } from './level2-cli-anatomy.js';
import { level3ComponentsLifecycle } from './level3-components-lifecycle.js';
import { level4TemplateBinding } from './level4-template-binding.js';
import { level5ControlFlowDirectives } from './level5-control-flow-directives.js';
import { level6PipesFormatting } from './level6-pipes-formatting.js';
import { level7CommunicationProjection } from './level7-communication-projection.js';
import { level8ServicesDependencyInjection } from './level8-services-dependency-injection.js';
import { level9HttpClientApis } from './level9-http-client-apis.js';
import { level10RxjsProgramming } from './level10-rxjs-programming.js';
import { level11SignalsState } from './level11-signals-state.js';
import { level12FormsValidation } from './level12-forms-validation.js';
import { level13RoutingGuardsInterceptors } from './level13-routing-guards-interceptors.js';
import { level14CrudCapstone } from './level14-crud-capstone.js';

export const angularCurriculum = [
  level1Foundations,
  level2CliAnatomy,
  level3ComponentsLifecycle,
  level4TemplateBinding,
  level5ControlFlowDirectives,
  level6PipesFormatting,
  level7CommunicationProjection,
  level8ServicesDependencyInjection,
  level9HttpClientApis,
  level10RxjsProgramming,
  level11SignalsState,
  level12FormsValidation,
  level13RoutingGuardsInterceptors,
  level14CrudCapstone
];

export function getAllAngularLessons() {
  const lessons = [];
  angularCurriculum.forEach(level => {
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

export function getAngularLessonByParams(chapterId, lessonId) {
  const all = getAllAngularLessons();
  return all.find(l => 
    (l.chapterId === chapterId || !chapterId) && 
    (l.id === lessonId || l.slug === lessonId)
  ) || null;
}

export function getAngularLessonBySlug(slug) {
  const all = getAllAngularLessons();
  return all.find(l => l.slug === slug || l.id === slug) || null;
}
