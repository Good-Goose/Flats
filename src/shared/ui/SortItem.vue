<template>
    {{ props.name }}
</template>

<script setup lang="ts">
interface IProps {
    name: string;
    count: number;
}

const props = defineProps<IProps>();

</script>
