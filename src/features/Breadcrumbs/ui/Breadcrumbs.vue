<script setup lang='ts'>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import routeNaming from '../model/routeNaming.json'

const route = useRoute()

const path = ref(route.fullPath.split('/').length === 2 ? [''] : route.fullPath.split('/'))
</script>
<template lang='html'>
  <div class="flex gap-2 items-center">
    <div v-for="(item, index) in path" :key="index" class="flex gap-2 items-center">
      <p class="text-grey-text" v-if="item !== ''">/</p>
      <RouterLink :to="`/${item}`" class="text-gray-secondary block hover:text-[#656565] duration-300">

        {{ `
        ${//@ts-ignore
      routeNaming[item]
      }` }}
      </RouterLink>

    </div>

  </div>
</template>
<style lang='scss'></style>