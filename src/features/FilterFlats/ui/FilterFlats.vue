<script setup lang="ts">
import ButtonFilter from "./ButtonFilter.vue";
import LinkItem from "./LinkItem.vue";
import Search from "./Search.vue";
import { ref, onMounted } from "vue";

const isHD = ref(false);
const isDV = ref(false);

const onResize = () => {
  isHD.value = window.innerWidth < 1280;
  isDV.value = window.innerWidth < 768;
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});
</script>
<template>
  <div
    class="flex items-center justify-between gap-6 w-full max-[1280px]:flex-col max-[768px]:flex-row"
  >
    <Search class="w-full" v-if="isHD && !isDV" />
    <ButtonFilter v-if="isDV" is-hide-title />
    <div class="flex gap-3 justify-between w-full">
      <LinkItem title="Купить" link="#" />
      <LinkItem title="Квартиру" link="#" />
      <LinkItem title="Во вторичке" link="#" />
      <LinkItem title="Комнтаность" link="#" />
      <LinkItem title="Цена" link="#" />
      <LinkItem title="Площадь" link="#" />
    </div>
    <Search v-if="!isHD" />
  </div>
</template>
<style lang="scss"></style>
