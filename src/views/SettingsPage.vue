<script setup>
import axios from 'axios'
import { ref } from 'vue'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})


const IslandName = ref('')
const Datesvisited = ref('')
const Description = ref('')
  
const addIsland = async () => {
    const { data } = await api.post('/api/islands', {
    IslandName: IslandName.value,
    Datesvisited: Datesvisited.value,
    Description: Description.value,
  })
}
</script>

<template >
  <main class="min-h-screen bg-gradient-to-b from-purple-900 to-pink-300 font-poppins flex items-center ">
    <form class="login-form" @submit.prevent="addSong">
      <input v-model="IslandName" type="text" placeholder="Island Name" />
      <input v-model="Datesvisited" type="text" placeholder="Dates Visited" />
      <input v-model="Description" type="text" placeholder="Journal Log" />
      <button type="submit" class="bg-green-500 px-4 py-2">Add Island</button>
    </form>
  </main>
</template>

<style scoped lang="postcss">
  .login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-slate-400 p-8 shadow-lg;
    & input {
      @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
  }
</style>