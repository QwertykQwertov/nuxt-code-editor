<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{ type: string; id: string }>()
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel v-if="$slots.default" :for="id"><slot /></AppLabel>
    <AppInput v-bind="$attrs" :id="id" />
  </div>
</template>
