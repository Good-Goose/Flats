<script setup lang="ts">
import { ref } from "vue";
import { typeSortings, type ITypeSorting } from "../model/lib/TypeSorting";
import Dropdown from 'primevue/dropdown';
import checkmark from 'shared/ui/Ico/checkmark.svg'
import icSort from 'shared/ui/Ico/ic_sort.svg'

interface IProps {
  valueAds: number;
}

const props = defineProps<IProps>();

const sortSelect = ref<ITypeSorting>(typeSortings[0]);
</script>

<template lang="html">
  <div class="flex flex-wrap justify-between items-center">
    <span class="text-gray-secondary text-base font-medium"
      >{{ valueAds }} объявлений</span
    >
    <div class="flex gap-4">
      <div class="flex items-center">
        <ic-sort/>
        <Dropdown class="text-base font-medium" v-model="sortSelect" :options="typeSortings" sho optionLabel="name"/>
      </div>

      <button
        class="flex items-center bg-gray-secondary px-[91px] py-3 duration-300 hover:bg-gray-secondary/80"
      >
        <checkmark class="mr-2 text-white"/>
        <span class="text-sm font-medium text-white">На карте</span>
      </button>
    </div>
  </div>
</template>
<style>

.p-dropdown-trigger{
  display: none;
}
.p-dropdown{
  box-shadow: none;
  outline: none;
}
</style>
