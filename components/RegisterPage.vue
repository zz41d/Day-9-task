    <template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-80">
      <h1 class="text-2xl font-semibold mb-4">Register</h1>
      <form @submit.prevent="login">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          class="block w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-400"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-400"
          required
        />
        <button
          @click="reg(username, password)"
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:text-green-700"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>
    <script setup>
const users = usersList();
const { $register } = useNuxtApp();
const username = ref("");

const password = ref("");
const registered = ref(false);
function reg() {
  let a = $register(username.value, password.value);
  console.log(users.value);
  registered.value = true;
  if (registered.value === true) {
    navigateTo({ path: "/login" });
  }
  registered.value = false;
}
</script>
  
  
    