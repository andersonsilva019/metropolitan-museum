import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const http = axios.create({
  baseURL: `https://collectionapi.metmuseum.org/public/collection/v1/`,
})

type Department = {
  departmentId: number
  displayName: string
}

type ObjectArt = {
  objectID: number
  primaryImageSmall: string
  isPublicDomain: boolean
  artistDisplayName: string
  artistBeginDate: string
  artistEndDate: string
  title: string
  accessionNumber: string
  dimensions: string
}

type GetDepartmentsResponseType = {
  departments: Department[]
}

type GetObjectsResponseType = ObjectArt[]

type GetObjectsByDepartmentId = ObjectArt[]

type GetObjectBySearch = ObjectArt[]

async function searchObjects(query: string) {
  const response = await http.get(`/search?${query}`)
  const getMoreRelevant = response.data.objectIDs?.slice(0, 20)

  const results = await Promise.all(
    getMoreRelevant.map(async (id: number) => {
      const response = await http.get(`/objects/${id}`)
      return response.data
    }))

  return results
}

async function getObjects() {
  const response = await http.get('/objects')
  const getMoreRelevant = response.data.objectIDs?.slice(40, 70)

  const results = await Promise.all(
    getMoreRelevant.map(async (id: number) => {
      const response = await http.get(`/objects/${id}`)
      return response.data
    }))

  return results
}

async function getDepartments() {
  const response = await http.get('/departments')
  return response.data
}


async function getObjectsByDepartmentId(departmentId: number) {
  const response = await http.get(`/objects?departmentIds=${departmentId}`)
  const getMoreRelevant = response.data.objectIDs?.slice(0, 30)

  const results = await Promise.all(
    getMoreRelevant.map(async (id: number) => {
      const response = await http.get(`/objects/${id}`)
      return response.data
    }))

  return results
}

export function useDepartments() {
  return useQuery<GetDepartmentsResponseType>({
    queryKey: ['departments'],
    queryFn: getDepartments,
    staleTime: 1000 * 60 * 60 * 1, // 1 hour 
    cacheTime: 1000 * 60 * 60 * 12, // 12 hours
    refetchOnWindowFocus: false,
  })
}

export function useGetObjectByDepartment(departmentId: number) {
  return useQuery<GetObjectsByDepartmentId>({
    queryKey: ['departments', departmentId],
    queryFn: () => getObjectsByDepartmentId(departmentId),
    staleTime: 1000 * 60 * 60 * 1, // 1 hour 
    cacheTime: 1000 * 60 * 60 * 12, // 12 hours
    refetchOnWindowFocus: false,
    enabled: departmentId !== 0,
  })
}

export function useGetObjects() {
  return useQuery<GetObjectsResponseType>({
    queryKey: ['objects'],
    queryFn: getObjects,
    staleTime: 1000 * 60 * 60 * 1, // 1 hour 
    cacheTime: 1000 * 60 * 60 * 12, // 12 hours
    refetchOnWindowFocus: false,
  })
}

export function useSearchObject(query: string) {
  return useQuery<GetObjectBySearch>({
    queryKey: ['search', query],
    queryFn: () => searchObjects(query),
    staleTime: 1000 * 60 * 60 * 1, // 1 hour
    cacheTime: 1000 * 60 * 60 * 12, // 12 hours
    refetchOnWindowFocus: false,
    enabled: !!query,
  })
}