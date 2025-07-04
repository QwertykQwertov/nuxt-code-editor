<script setup lang="ts">
interface Item {
  label: 'string'
  link: 'string'
}

defineProps<{ list: { heading: string; items: Item[] } }>()
</script>

<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-4">
    <AppFooterListHeading>{{ list.heading }}</AppFooterListHeading>
    <ul class="flex flex-col gap-y-1 sm:gap-y-2">
      <AppFooterListItem v-for="item in list.items" :key="item.label" :link="item.link">
        {{ item }}
      </AppFooterListItem>
    </ul>
  </div>
</template>
