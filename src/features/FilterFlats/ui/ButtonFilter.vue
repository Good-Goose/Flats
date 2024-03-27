<script setup lang="ts">
import icFilter from "shared/ui/Ico/ic_filter.svg";

interface IProps {
  isHideTitle?: boolean;
}
const props = defineProps<IProps>();
</script>
<template lang="html">
  <button
    class="flex items-center gap-2 px-6 py-2 border border-solid border-dark duration-300 hover:bg-dark/10"
  >
    <ic-filter />
    <span v-if="!props.isHideTitle" class="text-base font-medium text-dark"
      >Фильтры</span
    >
  </button>
</template>
<style lang="scss"></style>
