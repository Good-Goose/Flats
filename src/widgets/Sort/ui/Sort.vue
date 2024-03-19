<script setup lang="ts">
import {
  Sorting,
  CategorySorting,
  type ISortFlat,
} from "features/SortingFlats";

const dataTest: ISortFlat[] = [
  {
    name: "1-комнатные",
    count: 100,
  },
  {
    name: "2-комнатные",
    count: 5472,
  },
  {
    name: "3-комнатные",
    count: 235,
  },
  {
    name: "4-комнатные",
    count: 124,
  },
  {
    name: "5-комнатные",
    count: 124,
  },
];
</script>
<template lang="html">
  <div>
    <h2 class="text-3xl font-bold text-dark">Продажа квартир в Москве</h2>
    <Sorting :value-ads="124124" />
    <CategorySorting :sort-list="dataTest" />
  </div>
</template>
<style lang="scss"></style>
