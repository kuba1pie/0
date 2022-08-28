<script setup lang="ts">
const { t } = useI18n()
// window.location.replace('https://kubapietruszewski.pl/repos')
</script>

<template>
  <div>
    <h2>Kuba Pietruszewski</h2>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
