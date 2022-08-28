<script setup lang="ts">
// @ts-expect-error due to octokit types
import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest'
import type { RootObject } from '~/types'

const store = reactive({
  results: [] as RootObject[], loading: false,
})

const octokit = new Octokit({
  auth: import.meta.env.OCTOKIT,
})
async function ddd() {
  const result = await octokit.request('GET /users/{username}/repos', {
    username: 'kuba1pie',
  })
  store.results = result.data
}
try {
  store.loading = true

  ddd()
}

catch (error) {
  console.error(error)
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
finally {
  store.loading = false
}
</script>

<template>
  <div class="wrapper flex flex-col">
    <RepoCard v-for="result in store.results" :key="result.id" class="item" :item="result" />
  </div>
</template>
