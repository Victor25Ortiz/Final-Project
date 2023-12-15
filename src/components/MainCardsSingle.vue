<script setup>
  import { ref } from 'vue'
  import { faker } from '@faker-js/faker'

  import useAPI from '@/composables/useAPI'

  const selectCard = () => {
    console.log(`${props.island.name} selected`)
  }

  const props = defineProps({
    island: {
      type: Object,
      required: true,
      default: () => {
        return {
          islandId: '123',
          name: 'John Doe',
          image: 'https://www.example.com'
        }
      },
    },
  })

</script>

<template>
  <RouterLink v-if="props.island.islandId" :to="`/api/islands/${props.island.islandId}`">
  <div class="card" @click="selectCard">
  <div class="card" @click="selectCard">
    <div class="card-image">
      <img :src="faker.image.city()" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ fullName }}</p>
      <p class="card-details-job">{{ faker.location.city() }}</p>
    </div>
  </div>
  </div>
  </RouterLink>
</template>

<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;
    &-image {
      img {
        @apply mx-auto rounded-full object-contain;
      }
    }
    &-details {
      @apply flex flex-col gap-2  pt-6 text-center;
      &-name {
        @apply text-4xl  text-black;
      }
      &-job {
        @apply -mt-2 text-xs font-bold text-yellow-700;
      }
      &-quote {
        @apply pt-4 text-lg italic text-slate-800;
      }
    }
  }
</style>