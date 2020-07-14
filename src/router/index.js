import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

import RecipeEntries from '../statics/data/recipes.json';

const recipeRoutes = Object.keys(RecipeEntries).map(section => {
  const children = RecipeEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => require(`../cookdata/${section}/${child.id}.json`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => require('../views/Recipe.vue'),
    children
  }
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...recipeRoutes
  ]
})
