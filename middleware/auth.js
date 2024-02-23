import { isLoggedIn } from "~/composables/states.js"

export default defineNuxtRouteMiddleware (( to, from ) => {
  const loginStatus=isLoggedIn()
  if(loginStatus.value===false && to.path!=='/login'){
      return navigateTo('/login')
  }else if(loginStatus.value===true && to.path==='/login'){
      return navigateTo('/')
  }
})