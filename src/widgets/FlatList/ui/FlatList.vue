<script setup lang="ts">
import { FlatCard, type IFlat } from "entities/flat";
import Slider from "primevue/slider";
import { ref } from "vue";
import arrowDown from "shared/ui/Ico/arrow-down.svg";

interface IProps {
  flats: IFlat[];
  totalCount?: number;
}

const props = defineProps<IProps>();

const rangeValue = ref((props.flats.length * 100) / (props.totalCount || 0));
</script>
<template lang="html">
  <div class="flex flex-col items-center justify-center">
    <div class="w-full" v-for="(flat, index) in flats">
      <FlatCard class="w-full" :key="flat.id" :data="flat" />
      <div
        v-if="index !== flats.length - 1"
        class="w-full h-[1px] bg-gray-middle my-10"
      ></div>
    </div>
    <div v-if="totalCount" class="flex flex-col text-center w-fit mt-16">
      <span class="text-base font-medium text-gray-dark-1"
        >Показано {{ flats.length }} из {{ totalCount }}</span
      >
      <Slider disabled v-model="rangeValue" class="w-72" />
    </div>
    <div class="flex flex-col w-fit">
      <button class="bg-dark py-3 px-7 flex items-center gap-2 mt-10 duration-300 hover:bg-dark/90">
        <arrow-down />
        <span class="text-sm font-medium text-white">Посмотреть еще</span>
      </button>
      <span
        class="text-gray-dark-1 text-sm font-medium ml-auto mt-4 cursor-pointer duration-300 hover:text-dark"
        >Изменить поиск</span
      >
    </div>
  </div>
</template>
<style lang="scss">
.p-slider-range {
  background: #898989;
}

.p-slider-handle {
  display: none;
  background-color: transparent;
}
.p-slider-handle::before {
  display: none;
}
</style>
