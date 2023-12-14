<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { fetchisland, currentisland } = useAPI()


const route = useRoute()

const island = ref('')
onMounted(async () => {
  await fetchisland(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentIsland.value = null
})

</script>

<template>
  <main
    class="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 font-poppins"
  >
    <div
      v-if="currentIsland"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img class="p-8 h-64 w-64"
        :src="currentIsland.image"
        :alt="currentIsland.name"
      />
      <h1 class="text-white-800 text-6xl font-bold">
        {{ currentIsland.name }}
      </h1>
      
    </div>
  </main>
</template>