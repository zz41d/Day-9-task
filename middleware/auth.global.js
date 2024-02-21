
export default defineNuxt ({ store, redirect }) {
    // If user is not logged in, redirect to login page
  //   if (!store.state.auth.loggedIn) {
  //     return redirect('/login');
  //   }
  // }
  
  const  isLoggedIn=false
  if(!isLoggedIn && to.path!=='/login'){
      return navigateTo("/login")
  }
  else if(isLoggedIn && to.path==='/login'){
      
  return navigateTo("/")
}
}