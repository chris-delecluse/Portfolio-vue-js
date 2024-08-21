<script setup lang="ts">
import type {ParagraphProps} from "@/types/props/ParagraphProps";

withDefaults(defineProps<ParagraphProps>(), {
  horizontalAlign: "start",
  fontSize: "text-base"
})
</script>

<template>
  <p :class="fontSize">{{ text }}</p>
</template>

<style scoped>
p {
  text-align: v-bind(horizontalAlign);
}

</style>