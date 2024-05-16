<script setup lang="ts">
import WorkCard from '../../shared/worksExp/workCard.vue';
</script>

<template>
    <div class="flex flex-col gap-st-3">
        <h2 class="text-st-t1 font-bold"><span class="text-st-content-brand">Опыт</span> работы</h2>
        <WorkCard 
            :description="'Моя задача заключается в разработке мобильного приложения для управления умным домом с чистого листа. Разработка мобильного приложения ведётся только мной.'"
            
            :dateStart="'Июль 2023'"
            :dateEnd="'Сейчас'"
            :companyName="'К-Телеком'"
            :position="'Mobile flutter-developer'"
            :platforms="['Android', 'IOS']"
            :stack="['BLoC', 'Hive', 'DIO', 'FL_Charts', 'WebSockets']"
        />
        <WorkCard 
            :description="'Тимлид команды интузиастов, которая занимается разработкой веб- и мобильных приложений для самых различных задач.'"
            
            :dateStart="'Апрель 2022'"
            :dateEnd="'Сейчас'"
            :companyName="'ShokoTeam'"
            :position="'TeamLead'"
            :platforms="['Android', 'Web']"
            :stack="[]"
        />
    </div>
</template>