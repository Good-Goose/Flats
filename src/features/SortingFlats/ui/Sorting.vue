<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
import { typeSortings, type ITypeSorting } from "../model/lib/TypeSorting";
import icMark from "shared/ui/Ico/ic_mark.svg";
import icSort from "shared/ui/Ico/ic_sort.svg";

interface IProps {
  valueAds: number;
}

const props = defineProps<IProps>();

const sortSelect = ref<ITypeSorting>(typeSortings[0]);
</script>

<template lang="html">
  <div class="flex flex-wrap justify-between items-center">
    <span class="text-gray-dark-1 text-base font-medium"
      >{{ valueAds }} объявлений</span
    >
    <div class="flex gap-4">
      <div class="flex items-center">
        <ic-sort />
        <Dropdown
          class="text-base font-medium outline-none shadow-none"
          v-model="sortSelect"
          :options="typeSortings"
          optionLabel="name"
          placeholder="Select a City"
        />
      </div>

      <button
        class="flex gap-2 items-center bg-gray-dark-1 px-[91px] py-3 duration-300 hover:bg-gray-dark-1/80"
      >
        <ic-mark class="text-white" />
        <span class="text-white text-sm font-medium">На карте</span>
      </button>
    </div>
  </div>
</template>
<style>
.p-dropdown-trigger {
  display: none;
}
</style>
