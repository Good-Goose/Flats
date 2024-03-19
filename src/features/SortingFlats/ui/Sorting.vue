<script setup lang="ts">

interface IProps {
  valueAds: number;
}

const props = defineProps<IProps>();
</script>

<template lang="html">
  <div class="flex flex-wrap justify-between items-center">
    <span class="text-gray-secondary text-base font-medium"
      >{{ valueAds }} объявлений</span
    >
    <div class="flex gap-4">
      <button class="text-base font-medium">По умолчанию</button>
      <button
        class="bg-gray-secondary text-sm font-medium px-[91px] py-3 text-white duration-300 hover:bg-gray-secondary/80"
      >
        На карте
      </button>
    </div>
  </div>
</template>
<style lang="scss"></style>
