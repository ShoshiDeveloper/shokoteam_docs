<script setup lang="ts">
import KTelecom from '@/components/icons/companies/ktelecom.vue'
import Shoko from '@/components/icons/companies/shoko.vue'

interface Props {
    dateStart: string
    dateEnd: string
    companyName: string
    position: string
}

const props = defineProps<Props>();

</script>

<template>
    <div class="flex flex-col gap-[6px] w-[300px]">
        <div class="text-st-c flex flex-row justify-between text-white">
            <p>{{ props.dateStart }} - {{ props.dateEnd }}</p>
        </div>
        <div class="flex flex-row gap-2">
            <KTelecom v-if="props.companyName == 'К-Телеком'"/>
            <Shoko class="w-[32px] h-[32px]" v-if="props.companyName == 'ShokoTeam'"/>
            <div class="">
                <p class="text-st-b1 font-medium text-st-content-brand">{{ props.companyName }}</p>
                <p class="text-st-c text-white">{{ props.position }}</p>
            </div>
        </div>

    </div>
</template>