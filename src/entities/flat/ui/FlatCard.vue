<script setup lang="ts">
import { type IFlat } from "../model/types";
import icMessage from "shared/ui/Ico/ic_message.svg";
import icPhoneCall from "shared/ui/Ico/ic_phone-call.svg";
import {Carousel} from "shared/ui/carousel";

interface IProps {
  data: Omit<IFlat, "id">;
}

const props = defineProps<IProps>();

</script>
<template lang="html">
  <div class="flex max-[640px]:flex-col">
    <Carousel class="w-[100%] max-w-[380px] max-[640px]:max-w-[100%]" :images="data.images" />
    <div class="pl-8 w-full relative max-[768px]:pl-6 max-[640px]:pl-0">
      <h4
        class="text-dark text-xl font-bold leading-6 max-[768px]:text-base max-[768px]:font-semibold"
      >
        {{ data.title }}
      </h4>
      <div class="mt-6 max-[768px]:mt-4 max-[640px]:mt-1">
        <p class="text-dark text-2xl font-bold leading-6 max-[768px]:text-xl">
          {{ data.price }}
        </p>
        <p
          class="text-gray-dark-1 text-base text-gray- font-medium mt-2 leading-5 max-[768px]:text-sm max-[640px]:mt-1"
        >
          {{ data.priceM }}/м²
        </p>
      </div>
      <div class="mt-7 max-[768px]:mt-4 max-[640px]:mt-2">
        <a
          class="text-dark text-base font-bold border-solid border-b-[1px] leading-5 border-dark duration-300 hover:text-dark/60 hover:border-dark/60 max-[768px]:text-sm"
          href="#"
          >{{ data.complex }}</a
        >
        <div>
          <p
            class="text-dark text-base font-medium mt-2 leading-5 max-[768px]:text-sm max-[768px]:mt-1 max-[640px]:mt-1"
          >
            {{ data.addressDescription }}
          </p>
          <p
            class="text-gray-dark-1 text-base font-medium mt-2 leading-5 max-[768px]:text-sm max-[768px]:mt-1 max-[640px]:mt-1"
          >
            {{ data.address }}
          </p>
        </div>
      </div>

      <div
        class="flex gap-9 max-[864px]:gap-3 max-[768px]:flex-col absolute bottom-0 w-full max-w-[509px] max-[640px]:hidden"
      >
        <div
          class="w-full overflow-hidden max-w-[301px] h-full max-h-[120px] text-dark text-base leading-5 font-medium max-[768px]:max-h-[65px] max-[768px]:text-sm max-[768px]:leading-4"
        >
          {{ data.description }}
        </div>
        <div class="flex flex-col">
          <div
            class="mt-auto flex flex-col gap-2 max-[768px]:flex-row max-[768px]:mt-2"
          >
            <button
              class="flex items-center gap-2 bg-gray-light px-6 py-3 text-base font-medium text-dark duration-300 hover:bg-gray-dark-1/20"
            >
              <ic-phone-call />
              <a :href="`tel:${data.phone}`">Позвонить</a>
            </button>
            <button
              class="flex items-center gap-2 bg-gray-light px-6 py-3 text-base font-medium text-dark duration-300 hover:bg-gray-dark-1/20"
            >
              <ic-message />
              <a :href="data.contact">Написать</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
