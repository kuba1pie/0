<script setup lang="ts">
import type { PropType } from 'vue'
import type { RootObject } from '~/types'

const props = defineProps({
  item: {
    type: Object as PropType<RootObject>,

  },
})
const item = props.item as RootObject
</script>

<template>
  <div class="item m-5 border-1 p-5 text-5">
    <a :href="item.html_url">
      <h2>
        {{ item.name }}
      </h2>
    </a>
    <div class="description my-3">
      {{ item.description }}
    </div>
    <div class="links flex">
      <div v-if="item.homepage">
        <a :href="item.homepage">
          <span class="i-akar-icons:desktop-device  text-10 m-2" />
        </a>
      </div>   <div class="repo">
        <a :href="item.html_url">
          <span class="i-akar-icons:github-fill  text-10 m-2" />
        </a>
      </div>
    </div>
  </div>
</template>
