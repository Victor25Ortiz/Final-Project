<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <main>
    <div class="card">
  <NavBar />
  <RouterView />
  </div>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
}</style>
