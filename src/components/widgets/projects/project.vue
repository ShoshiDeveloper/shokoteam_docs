<script setup lang="ts">
import Tag from '../../shared/tag.vue';

interface Props {
    withFlutter: boolean
    withVue: boolean
    name: string
    description: string
    stack: Array<string>
    links: Array<string>
}

const props = defineProps<Props>()
</script>

<template>
    <div class="flex flex-col gap-[12px] p-[16px] bg-st-bg-tertiary rounded-[16px]">
        <div class="flex flex-row justify-between h-[54px]">
            <div class="w-[32px] h-[32px] bg-red-500"/>
            <div class="flex flex-col gap-[4px] items-end">
                <Tag v-if="props.withFlutter":text="'Flutter'"/>
                <Tag v-if="props.withVue":text="'Vue3'"/>
            </div>
        </div>
        <p class="text-st-b1 font-bold">{{ props.name }}</p>
        <p class="text-st-b2 h-[64px]">{{ props.description }}</p>
        <div class="flex flex-wrap gap-[10px]">
            <Tag 
                v-for="(item, index) in props.stack" :key="index"
                :text="item"
            />
        </div>
        <div class="flex flex-col">
            <a 
                v-for="(item, index) in props.links" :key="index"
                :text="item"
                :href="'https://'+item"
                target="_blank"
            />
        </div>
    </div>
</template>