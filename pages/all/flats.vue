<script setup lang="ts">
import CatalogLayout from 'shared/layouts/CatalogLayout/ui/CatalogLayout.vue';
import Breadcrumbs from '~/src/features/Breadcrumbs/ui/Breadcrumbs.vue';
import Sort from 'widgets/Sort/ui/Sort.vue';
</script>
<template lang="html">
  <CatalogLayout>
    <Breadcrumbs />
    <Sort/>
  </CatalogLayout>
</template>
<style lang='scss'>
    
</style>