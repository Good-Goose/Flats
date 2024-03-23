<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Thumb from "./Thumb.vue";
import { ref } from "vue";
import arrowRight from "shared/ui/Ico/arrow-right.svg";
import arrowLeft from "shared/ui/Ico/arrow-left.svg";
import { watch } from "vue";

interface IProps {
  images: string[];
}

const props = defineProps<IProps>();

const [emblaRef, emblaApi] = emblaCarouselVue();
const [emblaThumbsRef, emblaThumbsApi] = emblaCarouselVue({
  containScroll: "keepSnaps",
  dragFree: true,
  duration: 200,
});

const selectedIndex = ref(0);

const isShowAll = ref(false);

watch(selectedIndex, () => {
  if (selectedIndex.value > 2) isShowAll.value = true;

  onThumbClick(selectedIndex.value);
});

const onThumbClick = (index: number) => {
  if (!emblaApi || !emblaThumbsApi) return;
  emblaApi.value?.scrollTo(index);
};
</script>
<template lang="html">
  <div>
    <div class="embla">
      <div class="relative">
        <button
          @click="() => selectedIndex !== 0 && selectedIndex--"
          class="absolute bg-gray-dark-1 p-3 opacity-50 left-5 top-[40%] z-10 duration-300 hover:opacity-80"
        >
          <arrow-left class="text-transparent" />
        </button>
        <div class="embla__viewport" ref="emblaRef">
          <div class="embla__container">
            <div
              v-for="(image, index) in images"
              class="embla__slide w-1/3"
              :key="index"
            >
              <div
                :style="`background-image: url(${image}); width: 100%`"
                class="embla__slide__number h-[300px] bg-cover"
              ></div>
            </div>
          </div>
        </div>
        <button
          class="absolute right-5 top-[40%] z-30 bg-gray-dark-1 p-3 opacity-50 duration-300 hover:opacity-80"
          @click="
            () => selectedIndex !== props.images.length - 1 && selectedIndex++
          "
        >
          <arrow-right class="text-transparent" />
        </button>
        <div class="absolute right-1 bottom-1 z-10 bg-dark/50 p-2">
          <p class="text-sm font-bold text-white">
            {{ selectedIndex + 1 }}/{{ images.length }}
          </p>
        </div>
      </div>

      <div class="embla-thumbs">
        <div class="embla-thumbs__viewport" ref="emblaThumbsRef">
          <div class="embla-thumbs__container">
            <div
              class="relative w-full"
              v-for="(image, index) in images.slice(0, 3)"
            >
              <Thumb
                :key="index"
                :preview="image"
                :on-click="() => (selectedIndex = index)"
                :selected="index === selectedIndex"
              />
              <div
                v-if="images.length > 3 && index === 2"
                class="absolute z-50 top-0 bg-black/30 w-[100%] h-[94%] text-center flex justify-center items-center"
              >
                <p class="text-xl font-bold text-white cursor-pointer">
                  Еще фото
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
.embla {
  max-width: 48rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
.embla__slide__number {
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.embla-thumbs {
  --thumbs-slide-spacing: 0.8rem;
  --thumbs-slide-height: 6rem;
  margin-top: 8px;
}
.embla-thumbs__viewport {
  overflow: hidden;
}
.embla-thumbs__container {
  display: flex;
  flex-direction: row;
  //   margin-left: calc(var(--thumbs-slide-spacing) * -1);
  gap: 8px;
}
.embla-thumbs__slide {
  flex: 0 0 22%;
  min-width: 0;
}
@media (min-width: 576px) {
  .embla-thumbs__slide {
    flex: 0 0 15%;
  }
}
</style>
