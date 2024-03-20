<script setup lang="ts">
import { ref } from "vue";
import { typeSortings } from "../model/lib/TypeSorting";

interface IProps {
  valueAds: number;
}

const props = defineProps<IProps>();

const sortSelectIndex = ref(0);
const isAnimationSkipping = ref(false);

const toggleSort = () => {
  isAnimationSkipping.value = true;

  setTimeout(() => {
    if (typeSortings[sortSelectIndex.value + 1] !== undefined) {
      sortSelectIndex.value++;
    } else {
      sortSelectIndex.value = 0;
    }
    isAnimationSkipping.value = false;
  }, 250);
};
</script>

<template lang="html">
  <div class="flex flex-wrap justify-between items-center">
    <span class="text-gray-secondary text-base font-medium"
      >{{ valueAds }} объявлений</span
    >
    <div class="flex gap-4">
      <button @click="toggleSort" class="overflow-hidden">
        <div
          class="text-base font-medium duration-400"
          :class="
            isAnimationSkipping
              ? 'animation-scroll-down'
              : 'animation-scroll-up'
          "
        >
          {{ typeSortings[sortSelectIndex].name }}
        </div>
      </button>
      <button
        class="bg-gray-secondary text-sm font-medium px-[91px] py-3 duration-300 text-white hover:bg-gray-secondary/80"
      >
        На карте
      </button>
    </div>
  </div>
</template>
<style>
.animation-scroll-down {
  animation: scrollAnimationDown 0.2s forwards;
}

.animation-scroll-up {
  animation: scrollAnimationUp 0.2s forwards;
}

@keyframes scrollAnimationUp {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollAnimationDown {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
