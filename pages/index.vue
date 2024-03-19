<script setup lang="ts">
import type { ISortFlat } from "~/src/features/SortingFlats";
import {SortingFlats} from "~/src/features/SortingFlats";

const dataTest: ISortFlat[] = [
  {
    name: '1-комнатные',
    count: 100
  },
  {
    name: '2-комнатные',
    count: 5472
  },
  {
    name: '3-комнатные',
    count: 235
  },
  {
    name: '4-комнатные',
    count: 124
  },
  {
    name: '5-комнатные',
    count: 124
  }
  
]
</script>
<template lang="html">
  <div>
    <SortingFlats :sort-list="dataTest"/>
  </div>
</template>
<style lang="scss"></style>
