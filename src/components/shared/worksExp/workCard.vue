<script setup lang="ts">
import WorkExp from './workExp.vue';
import Tag from '../../shared/tag.vue';

interface Props {
    description: string,
    
    dateStart: string
    dateEnd: string
    companyName: string
    position: string
    platforms: Array<string>
    stack: Array<string>
}

const props = defineProps<Props>()

</script>

<template>
    <div class="flex gap-[32px] py-[16px] px-[32px] bg-st-bg-tertiary rounded-2xl">
        <div class="">
            <WorkExp 
                :dateStart="props.dateStart"
                :dateEnd="props.dateEnd"
                :companyName="props.companyName"
                :position="props.position"
            />
        </div>
        <div class="flex gap-[16px] flex-col">
            <p class="text-st-b2 text-white">
                {{ props.description }}
            </p>
            <div class="flex gap-[6px] flex-col">
                <div class="flex gap-[12px]">
                    <Tag
                        v-for="(item, index) in props.platforms" :key="index"
                            :text="item"
                    />
                </div>
                <div class="flex gap-[12px]">
                    <Tag v-if="props.stack.length > 0"
                        v-for="(item, index) in props.stack" :key="index"
                            :text="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>