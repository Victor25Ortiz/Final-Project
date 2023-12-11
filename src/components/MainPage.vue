<script setup>
import { onMounted } from 'vue'
import MainSearch from '@/components/MainSearch.vue'
import MainCards from '@/components/MainCards.vue'
import useAPI from '@/composables/useAPI'

const { getSongs, loading } = useAPI()

onMounted(async () => {
await getSongs()
  })
</script>

<template>
  <div class="wrapper">
    <MainSearch />
    <MainCards />
  </div>
</template>

<style scoped lang="postcss">
main {
  @apply flex h-screen items-center justify-center bg-gradient-to-bl from-yellow-200 via-pink-200 to-pink-400;
  .wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
  }
}
</style>