<script setup lang="ts">

const state = useDefaultStore()

state.getRepositories()

</script>

<template>
  <main class="wrapper flex flex-col lg:max-w-400 m-auto">
    <TheHeader />
    <div class="flex flex-col">
      <RepoCard v-for="result in state.results" :key="result.id" class="item" :item="result" />
    </div>
    <TheFooter />
  </main>
</template>
