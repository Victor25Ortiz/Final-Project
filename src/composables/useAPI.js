import { ref } from 'vue'
import axios from 'axios'

const islands = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(12)
const currentIsland = ref(null)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getIslands = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/island', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  islands.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const fetchIslands = async (id) => {
    const { data } = await api.get(`/api/islands/${id}`)
    currentIsland.value = data
    console.log(data)
  }

const useAPI = () => {
  return { islands, pages, activePage, loading, pageSize, getIslands, fetchIslands, currentIsland}
}

export default useAPI