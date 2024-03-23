<script setup lang="ts">
import CatalogLayout from "shared/layouts/CatalogLayout/ui/CatalogLayout.vue";
import Breadcrumbs from "~/src/features/Breadcrumbs/ui/Breadcrumbs.vue";
import Sort from "widgets/Sort/ui/Sort.vue";
import type { IFlat } from "~/src/entities/flat";
import { FlatList } from "widgets/FlatList";

const dataTest: IFlat[] = [
  {
    id: 1,
    title: "5-комн. квартира, 198 м², 25/25 этаж",
    price: 97500200,
    priceM: 1975000,
    complex: "ЖК Континент",
    addressDescription: "метро Полянка • 5 минут пешком",
    address: "Пресненский р-н, Пожарский пер., дом 3",
    description:
      "Представляем Вашему вниманию двухкомнатную квартиру рядом с объектом исторического и культурного наследия — Нижегородской Ярмаркой! Общая площадь 42,6 кв.м Комнаты изолир...",
    contact: "авп",
    phone: "124",
    images: [
      "https://1pofasadu.ru/wp-content/uploads/2022/07/evroremont-kvartiry-opisanie-osobennosti-stoimost.jpg",
      "https://zemeks.ru/wp-content/uploads/ekspertiza-kvartiry.jpg",
      "https://static.tildacdn.com/tild6333-6330-4765-b366-396632306565/0278356001509830021.jpg",
      "https://dipplast.ru/wp-content/uploads/a/8/0/a808795934fc3a94c9bb4d8ac065d8b6.jpeg",
      "https://1pofasadu.ru/wp-content/uploads/2022/07/evroremont-kvartiry-opisanie-osobennosti-stoimost.jpg",
    ],
  },
  {
    id: 1,
    title: "5-комн. квартира, 198 м², 25/25 этаж",
    price: 97500200,
    priceM: 1975000,
    complex: "ЖК Континент",
    addressDescription: "метро Полянка • 5 минут пешком",
    address: "Пресненский р-н, Пожарский пер., дом 3",
    description:
      "Представляем Вашему вниманию двухкомнатную квартиру рядом с объектом исторического и культурного наследия — Нижегородской Ярмаркой! Общая площадь 42,6 кв.м Комнаты изолир...",
    contact: "авп",
    phone: "124",
    images: [
      "https://zemeks.ru/wp-content/uploads/ekspertiza-kvartiry.jpg",
      "https://wp-s.ru/wallpapers/2/16/437120874480972/interer-zhiloj-komnaty-v-gorodskoj-kvartire.jpg",
      "https://1pofasadu.ru/wp-content/uploads/2022/07/evroremont-kvartiry-opisanie-osobennosti-stoimost.jpg",
    ],
  },
  {
    id: 1,
    title: "5-комн. квартира, 198 м², 25/25 этаж",
    price: 97500200,
    priceM: 1975000,
    complex: "ЖК Континент",
    addressDescription: "метро Полянка • 5 минут пешком",
    address: "Пресненский р-н, Пожарский пер., дом 3",
    description:
      "Представляем Вашему вниманию двухкомнатную квартиру рядом с объектом исторического и культурного наследия — Нижегородской Ярмаркой! Общая площадь 42,6 кв.м Комнаты изолир...",
    contact: "авп",
    phone: "124",
    images: [
      "https://zemeks.ru/wp-content/uploads/ekspertiza-kvartiry.jpg",
      "https://wp-s.ru/wallpapers/2/16/437120874480972/interer-zhiloj-komnaty-v-gorodskoj-kvartire.jpg",
      "https://1pofasadu.ru/wp-content/uploads/2022/07/evroremont-kvartiry-opisanie-osobennosti-stoimost.jpg",
    ],
  },
];

</script>
<template lang="html">
  <CatalogLayout>
    <Breadcrumbs />
    <Sort />
    <FlatList class="mt-20" :flats="dataTest" :total-count="55" />
  </CatalogLayout>
</template>
<style lang="scss"></style>
