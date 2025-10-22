<template>
    <footer>
        © 2025 • Misty Moon All Rights Reserved • {{title}} • 新鮮烘焙坊 • 甜點製作
    </footer>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        title: String
    })
</script>