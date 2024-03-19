<script setup lang="ts">
import { SortItem } from "shared/ui/SortItem";
import type { ISortFlat } from "../model";

interface IProps {
  sortList: ISortFlat[];
}

const props = defineProps<IProps>();
</script>

<template lang="html">
    <div class="flex flex-wrap gap-2">
      <SortItem
        v-for="item in props.sortList"
        :name="item.name"
        :count="item.count"
      />
  </div>
</template>
<style lang="scss"></style>
