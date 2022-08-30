<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <footer>
    <nav class="flex justify-center text-12">
      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>

      <button
        class="icon-btn mx-2 !outline-none"
        :title="t('button.toggle_dark')"
        @click="toggleDark()"
      >
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>
      <a
        class="icon-btn mx-2"
        rel="noreferrer"
        href="https://github.com/kuba1pie"
        target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </a>

      <a class="icon-btn mx-2" mailto="kontakt@kubapietruszewski.pl">
        <div i-mdi:mail />
      </a>
    </nav>
  </footer>
</template>
