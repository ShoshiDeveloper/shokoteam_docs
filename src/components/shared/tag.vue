<script setup lang="ts">
interface Props {
    text: string
}

const props = defineProps<Props>();

</script>

<template>
    <div class="bg-st-bg-secondary px-[16px] py-[4px] rounded-full h-min w-min text-st-c font-mplus">
        {{ props.text }}
    </div>
</template>