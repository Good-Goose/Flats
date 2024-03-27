<script setup lang="ts">
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import ButtonFilter from './ButtonFilter.vue'
import icSearch from "shared/ui/Ico/ic_search.svg";
import { ref } from "vue";

const valueInput = ref("");
</script>

<template>
  <div class="flex items-center gap-6">
    <IconField
      iconPosition="left"
      class="flex items-center gap-2 w-full border-b border-solid border-dark rounded-none pt-2 pl-1 py-3 pb-2"
    >
      <ic-search class="text-transparent" />
      <InputText
        v-model="valueInput"
        placeholder="Адрес или ЖК"
        class="text-base font-medium shadow-none outline-none w-40 rounded-none"
      />
    </IconField>
    <ButtonFilter/>
    <button
      class="bg-dark duration-300 py-2 px-14 text-base font-medium text-white hover:bg-dark/90"
    >
      Найти
    </button>
  </div>
</template>
<style lang="scss"></style>
