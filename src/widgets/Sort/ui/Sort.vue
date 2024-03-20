<script setup lang="ts">
import {
  Sorting,
  CategorySorting,
  type ISortFlat,
} from "features/SortingFlats";

const dataTest: ISortFlat[] = [
  {
    id: 1,
    name: "1-комнатные",
    count: 100,
  },
  {
    id: 2,
    name: "2-комнатные",
    count: 5472,
  },
  {
    id: 3,
    name: "3-комнатные",
    count: 235,
  },
  {
    id: 4,
    name: "4-комнатные",
    count: 124,
  },
  {
    id: 5,
    name: "5-комнатные",
    count: 124,
  },
];
</script>
<template lang="html">
  <div>
    <h2 class="text-3xl font-bold text-dark">Продажа квартир в Москве</h2>
    <Sorting class="mt-4" :value-ads="124124" />
    <CategorySorting class="mt-6" :sort-list="dataTest" />
  </div>
</template>
<style lang="scss"></style>
