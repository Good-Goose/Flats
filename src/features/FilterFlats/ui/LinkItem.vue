<script setup lang="ts">
interface IProps {
  title: string;
  link: string;
}

const props = defineProps<IProps>();
</script>
<template>
  <div>
    <a
      @click="() => console.log(link)"
      class="text-base font-bold text-dark text-nowrap border-b border-solid border-gray-dark-1 px-1 py-[10px] duration-200 hover:pb-[14px] hover:border-dark"
      href="#"
      >{{ props.title }}</a
    >
  </div>
</template>
<style lang="scss"></style>
