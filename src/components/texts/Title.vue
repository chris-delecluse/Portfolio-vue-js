<script setup lang="ts">
import type {TitleProps} from "@/types/props/TitleProps";

withDefaults(defineProps<TitleProps>(), {
  horizontalAlign: "start",
  variant: "h3",
  fontSize: "text-3xl"
})
</script>

<template>
  <Component
      class="title" 
      :class="fontSize" 
      :is="variant">
    {{ text }}
  </Component>
</template>

<style scoped>
.title {
  text-align: v-bind(horizontalAlign);
}
</style>