<script setup lang="ts">
import { FilterFlats } from "features/FilterFlats";
</script>
<template>
  <div class="h-[100px]">
    <div
      class="absolute left-0 w-full border-b border-solid overflow-auto border-gray-middle flex items-center justify-center"
    >
      <FilterFlats class="w-full max-w-[86vw] my-4" />
    </div>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
</style>
