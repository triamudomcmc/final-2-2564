import { writable } from "svelte/store"
import { LOCALSTORAGE_KEY } from "./constants"

export type TClass = "4" | "5"
export type TProgramme = "sci-math" | "arts-lang" | "arts-math"
export type TDimension = "ipad" | "iphone8" | "iphonex" | "huawei"
export type TTheme = "red" | "pink"

interface IDataStore {
  class: TClass
  programme: TProgramme
  dimension: TDimension
  theme: TTheme
}

const DEFAULT: IDataStore = {
  class: "4",
  programme: "sci-math",
  dimension: "ipad",
  theme: "pink",
}

function storeSettings(_data: IDataStore) {
  window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(_data))
}

export const data = writable<IDataStore>(JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY)) || DEFAULT)

data.subscribe((value) => {
  storeSettings(value)
})
