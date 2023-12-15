<script setup>
  import { ref, computed } from "vue";
  import useAPI from '@/composables/useAPI'
  import MainCardsSingle from '@/components/MainCardsSingle.vue'
  import MainSearch from '@/components/MainSearch.vue'
  
  const { islands } = useAPI()
  const search = ref('');

  const filteredList = computed(() => {
  return islands.value.filter(island =>
    island.name.toLowerCase().includes(search.value.toLowerCase())
  );
});


</script>

<template>
  <div class="sub-wrapper">
    <MainCardsSingle v-for="n in 20" />
  </div>
</template>

<style scoped lang="postcss">
  .sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
</style>