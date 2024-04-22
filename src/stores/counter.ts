import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  persistence: ["zaochen"],
  state: () => ({
    zaochen: 1,
    zhongwu: 2,
    wanshang: 3
  })
})
