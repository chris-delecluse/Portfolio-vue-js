<script setup lang="ts">
import Paragraph from "@/components/texts/Paragraph.vue";
import Title from "@/components/texts/Title.vue";
</script>

<template>
    <Title
        class="py-2"
        text="Hello Title... !"
        font-size="text-4xl"
        horizontal-align="center"/>
    <Paragraph
        text="Hello world !"
        horizontal-align="center"/>
</template>
