import { News } from 'models'
import axios from 'axios'
import { URL, api_token } from './constants'

const instance = axios.create({ baseURL: URL })

interface Meta {
  found: number
  limit: number
  page: number
}

export interface getResponse {
  meta: Meta
  data: News[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNews = async (): Promise<getResponse> =>
  await instance.get('news/all', { params: { api_token, limit: 3 } })
