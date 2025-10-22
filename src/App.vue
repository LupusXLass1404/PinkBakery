<template>
  <div class="min-h-screen bg-pink-50">
    <!-- Header -->
    <AppHeader :title="title" />

    <!-- Main -->
    <RouterView />

    <!-- Footer -->
    <AppFooter :title="title" />

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router';

import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';

let title = ref("PinkBakery");
</script>

<style>
body {
  font-family: "Comic Sans MS", "Microsoft JhengHei", sans-serif;
}
</style>