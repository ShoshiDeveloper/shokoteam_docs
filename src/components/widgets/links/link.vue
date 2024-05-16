<script setup lang="ts">
import Tag from '../../shared/tag.vue';
interface Props {
    source: string
    tags: Array<string>
    name: string
    description: string
    href: string
}

const props = defineProps<Props>()

</script>

<template>
    <a :href=props.href target="_blank">
        <div class="bg-st-bg-tertiary flex flex-col w-full gap-[12px] p-[16px] rounded-[16px]">
            <Tag 
                :text="props.source"
            />
            <div class="flex flex-row gap-[6px]">
                <Tag 
                        v-for="(item, index) in props.tags" :key="index"
                            :text="item"
                    />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-st-b1 font-bold">{{props.name}}</p>
                <p class="text-st-b2">{{props.description}}</p>
            </div>
        </div>
    </a>
</template>