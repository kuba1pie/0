import { defineStore } from 'pinia'
import { Repo } from '~/types';

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    results: [] as Repo[]
  }),
  actions: {
    async getRepositories() {
      const url = 'https://api.github.com/users/kuba1pie/repos?sort=pushed'
      const response = await fetch(url)
      const data = await response.json()
      this.results = data
    }
  },
  getters: {
  },
})
