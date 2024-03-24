<script setup lang="ts">
interface IProps {
  selected: boolean;
  preview: string;
  onClick: () => void;
}

const props = defineProps<IProps>();
</script>
<template lang="html">
  <div class="w-full">
    <div class="embla-thumbs__slide">
      <button
        @click="onClick"
        type="button"
        class="embla-thumbs__slide__number"
      >
        <div :class="selected ? 'embla-thumbs__slide--selected' : 'embla-thumbs__slide--non-selected'">
          <div
          :style="`background-image: url(${preview}); width: 100%`"
          :class="`h-[92px] bg-cover`"
        ></div>
        </div>
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.embla-thumbs__slide__number {
  border-radius: 1.8rem;
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  font-size: 1.8rem;
  font-weight: 600;
  width: 100%;
}
.embla-thumbs__slide--selected {
  border: 1px solid #333;
}
.embla-thumbs__slide--non-selected {
  border: 1px solid transparent;
}
</style>
