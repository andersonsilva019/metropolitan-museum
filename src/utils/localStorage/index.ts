import { ArtCardProps } from "../../components/ArtCard"

const APP_KEY = 'APP'

export function getStorageItem(key: string) {
  const data = localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data || '[]')
}

export function setStorageItem(key: string, value: ArtCardProps[]) {
  localStorage.setItem(`${APP_KEY}_${key}`, JSON.stringify(value))
}