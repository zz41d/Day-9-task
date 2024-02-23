// with provide key
export default defineNuxtPlugin((nuxtApp)=>{
    const users=usersList()
    return{
        provide:{
            register:(username,password)=>{
                users.value.push({user:username,pass:password})
                return "User Registered"
            }
        }
    }
})