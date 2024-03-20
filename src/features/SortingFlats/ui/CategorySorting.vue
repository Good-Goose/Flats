<script setup lang="ts">
import { SortItem } from "shared/ui/SortItem";
import type { ISortFlat } from "..";
import { ref } from "vue";

interface IProps {
  sortList: ISortFlat[];
}

const props = defineProps<IProps>();
const selectCategoryIndex = ref<number | null>(null);
</script>

<template lang="html">
  <div class="flex flex-wrap gap-2">
    <SortItem
      @click="() => (selectCategoryIndex = item.id)"
      :is-active="item.id === selectCategoryIndex"
      v-for="item in props.sortList"
      :name="item.name"
      :count="item.count"
    />
  </div>
</template>
<style lang="scss"></style>
