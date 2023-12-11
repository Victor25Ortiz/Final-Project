import { ref } from 'vue'
import axios from 'axios'

const songs = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(12)
const currentSongs = ref(null)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getSongs = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/songs', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  songs.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const fetchSongs = async (id) => {
    const { data } = await api.get(`/api/songs/${id}`)
    currentSongs.value = data
    console.log(data)
  }

const useAPI = () => {
  return { songs, pages, activePage, loading, pageSize, getSongs, fetchSongs, currentSongs}
}

export default useAPI