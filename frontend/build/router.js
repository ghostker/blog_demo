import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5791c8fc = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _78a2bb03 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _163c68d6 = () => interopDefault(import('..\\pages\\galleries\\_slug.vue' /* webpackChunkName: "pages/galleries/_slug" */))
const _5afaab33 = () => interopDefault(import('..\\pages\\gallery\\_slug.vue' /* webpackChunkName: "pages/gallery/_slug" */))
const _d1a18a32 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles/:slug?",
    component: _5791c8fc,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _78a2bb03,
    name: "categories-slug"
  }, {
    path: "/galleries/:slug?",
    component: _163c68d6,
    name: "galleries-slug"
  }, {
    path: "/gallery/:slug?",
    component: _5afaab33,
    name: "gallery-slug"
  }, {
    path: "/",
    component: _d1a18a32,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
