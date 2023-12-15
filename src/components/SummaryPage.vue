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

</script>

<template>
  <div>
    <div class="credits">
            <h1 class="text-center mb-6"> <strong>Protected page and Project summary</strong></h1>

        <p>
          This web project I created started out as a type of island guide for the state of Hawaii, however it ended up becoming a sort of island
          visiting recorder. You can create logs of your island visits with the dates and some minor details of the trip! This is a rough draft of
          what could be a great online travel journal. Thank you for checking it out.
          -Victor Ortiz
        </p>
      </div>
      
    </div>
</template>

<style scoped lang="postcss">
  .credits {
    @apply mt-4 bg-blue-200 p-8 m-9 rounded-md shadow-lg;
  }

  p {
    @apply mt-4 ;
  }
</style>