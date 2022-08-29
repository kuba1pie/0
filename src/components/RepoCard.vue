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
  <div class="item mx-6 my-3 border-2 p-5">
    <a :href="item.html_url">
      <h2 class="font-bold text-8">
        {{  item.name  }}
      </h2>
    </a>
    <div class="description my-3 text-5 text-gray-800/60" :class="{'text-white': isDark}">
      {{  item.description  }}
    </div>
    <div class="links flex justify-between">
      <div class="links flex">
        <div class="repo">
          <a :href="item.html_url" title="Github repository" class="p-2">
            <span class="i-akar-icons:github-fill  text-10 m-2" />
          </a>
        </div>
        <div v-if="item.homepage">
          <a :href="item.homepage" title="Deploy" class="p-2">
            <span class="i-akar-icons:desktop-device  text-10 m-2" />
          </a>
        </div>
      </div>

      <div class="dates text-right text-5">
        <div class="date">
          Created: {{  item.created_at.toString().slice(0, 10)  }}
        </div>
        <div class="date">
          Last update: {{  item.updated_at.toString().slice(0, 10)  }}
        </div>
      </div>
    </div>
  </div>
</template>
