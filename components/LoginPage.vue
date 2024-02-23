  <template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center" style="{backgroundImage:`url(${backgroundImg})`}">
      <div class="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 class="text-2xl font-semibold mb-4 ">Login</h1>
        <form @submit.prevent="login">
          <input type="text" v-model="username" placeholder="Username" required class="block w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-400">
          <input type="password" v-model="password" placeholder="Password" required class="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-400">
          <button type="submit" @click.prevent="log(username,password)" class="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:text-green-700">Login</button>
          <!-- <div>
            <p>For login you need to register first!</p>
            <p @click="register">Click here to register</p>
          </div> -->
          <div class="p-4">
             <p class="mb-4">For login you need to register first!</p>
             <p class="text-green-500 cursor-pointer hover:text-green-900" @click="register">Click here to register</p>
          </div>

        </form>
      </div>
    </div>
  </template>
    
  
  <script setup>
  import { useSSRContext } from 'vue';
const backgroundImg= '/bazaar'
const {login}=useNuxtApp()
const users=usersList()
  const username = ref('');
  const password = ref('');
  const loginStatus=isLoggedIn()
  const showError=ref(false)
  const log= (username,password) => {
        let a=login(username,password)
    console.log(a)
    loginStatus.value=true
    if(loginStatus){
        navigateTo('/')
    }
    else{
      showError.value=true
    }
  };
  const register=()=>{
    navigateTo('/register')
  }
  definePageMeta({
    middleware:["auth"],
})
  </script>
