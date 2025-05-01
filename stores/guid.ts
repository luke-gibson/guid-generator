import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useGuidStore = defineStore('guid', {
  state: () => ({
    currentGuid: '',
    history: [] as { guid: string; timestamp: string }[],
  }),
  actions: {
    generateGuid() {
      const newGuid = uuidv4()
      const timestamp = new Date().toLocaleString()
      this.currentGuid = newGuid
      this.history.unshift({ guid: newGuid, timestamp })
    },
    clearHistory() {
      this.history = []
    },
  },
  persist: true,
});