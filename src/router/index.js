import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Questions from '@/components/Questions'
import TestPage from '@/components/TestPage'
import upload from '@/components/upload'
import category from '@/components/CategorySelection'
import DevAssessment from '@/components/DeveloperAssessment'
import assesscomplete from '@/components/AssessmentCompletion'
import DesAssessment from '@/components/designerassessment'
import presentation from '@/components/presentation'
import proBody from '@/components/proBody'
import career from '@/components/career'
import develo from '@/components/develo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'career',
      component: career
    },
    {
      path: '/develo',
      name: 'develo',
      component: develo
    },
    {
      path: '/horus.findworka.com',
      name: 'career',
      component: career
    },

    {
      path: '/presentation',
      name: 'presentation',
      component: presentation
    },
    {
      path: '/assesscomplete',
      name: 'assesscomplete',
      component: assesscomplete
    },
    {
      path: '/test',
      name: 'testPage',
      component: TestPage
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/devassessment',
      name: 'DevAssessment',
      component: DevAssessment
    },
    {
      path: '/desassessment',
      name: 'desassessment',
      component: DesAssessment
    },
    {
      path: '/probody',
      name: 'proBody',
      component: proBody
    },
    {
      path: '/*',
      name: 'Not Found',
      component: NotFound
    }
  ]
});
