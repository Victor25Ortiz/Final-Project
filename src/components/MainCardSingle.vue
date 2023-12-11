<script setup>
    import { ref } from 'vue'

    import useAPI from '@/composables/useAPI'

    const selectCard = () => {
        console.log(`${props.song.name} selected`)
    }

    const props = defineProps({
        song: {
            type: Object,
            required: true,
            default: () => {
                return {
                    createdAt: '2022-01-01',
                    songId: '123',
                    name: 'john doe',
                    image: 'url',
                    artist: 'name',
                    title: 'title',
                    album: 'album',
                    genera: 'genera',
                }
            },    
        },
    })
</script>

<template>
    <RouterLink v-if="props.song.songId" :to="`/api/songs/${props.song.songId}`">
  <div class="card" @click="selectCard">
    <div class="card-image">
      <img :src="props.song.image" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-artist font-poppins">{{ props.song.artist }}</p>
      <p class="card-details-title font-poppins">{{ props.song.title }}</p>  
    </div>
  </div>
</RouterLink>
</template>

<style scoped lang="postcss">
    .card {
        @apply cursor-pointer overflow-hidden rounded-md bg-purple-800 p-8 shadow-md
        transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-400;
        &-image {
            img {
                @apply mx-auto rounded-full object-contain;
            }
        }
        &-details {
            @apply flex flex-col gap-2 pt-6 text-center;
            &-name {
                @apply text-4xl font-bold tracking-wide text-orange-800;
            }
            &-title {
                @apply -mt-2 text-3xl font-bold text-white;
            }
            &-artist {
                @apply -mt-2 text-sm font-bold text-yellow-500;
            }
            &-album {
                @apply text-sm text-yellow-500;
            }
            &-genera {
                @apply pt-4 text-lg italic text-white;
            }
        }
    }
</style>