<script setup lang="ts">
interface IProps {
  name: string;
  count: number;
  isActive?: boolean;
}

const props = defineProps<IProps>();
</script>

<template>
  <button
    :class="isActive && 'bg-dark border-dark hover:bg-dark/90 border-dark/90'"
    class="flex border-2 border-solid border-gray px-4 py-2 gap-4 duration-300 hover:border-dark/60"
  >
    <p
      :class="isActive && 'text-white'"
      class="text-dark text-base font-medium"
    >
      {{ name }}
    </p>
    <p
      :class="isActive && 'text-slate-200'"
      class="text-gray-secondary text-base font-medium"
    >
      {{ count }}
    </p>
  </button>
</template>
