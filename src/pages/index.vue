<script setup lang="ts">
import type { RootObject } from '../types'

const store = reactive({
  results: [] as RootObject[], loading: false,
})

async function getRepositories() {
  fetch('https://api.github.com/users/kuba1pie/repos')
    .then(response => response.json())
    .then((data) => {
      store.results = (data)
    })
}
try {
  store.loading = true
  getRepositories()
}

catch (error) {
  console.error(error)
}
finally {
  store.loading = false
}
</script>

<template>
  <main class="wrapper flex flex-col lg:max-w-400 m-auto">
    <TheHeader />
    <RepoCard v-for="result in store.results.slice().reverse()" :key="result.id" class="item" :item="result" />
    <TheFooter />
  </main>
</template>
