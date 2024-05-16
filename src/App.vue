<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <RouterLink to="/blog/post?uid=ya7dy78ads">test</RouterLink> -->
  <div class="py-[64px] bg-[#18181B] min-h-screen text-white font-mplus px-[24px] xl:px-[256px]">
    <div class="min-h-full">
        <RouterLink to="/forespolicy" :class="{}"></RouterLink>
      <RouterView />
    </div>
  </div>
</template>
