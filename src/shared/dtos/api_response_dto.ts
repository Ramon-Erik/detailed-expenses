export interface ApiResponse<T> {
  success: boolean
  data: T
  meta: Meta | null
}

interface Meta {
  page: number
  pageSize: number
  total: number
}
