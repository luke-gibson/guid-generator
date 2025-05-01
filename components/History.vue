<script setup lang="ts">
defineProps<{
  history: { guid: string; timestamp: string }[]
  clearHistory: () => void
}>();

function formatTimestamp(ts: string): string {
  const date = new Date(ts)
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}
</script>

<template>
  <details class="py-4 border-b border-grey-lighter">
    <summary class="text-xl font-bold text-white cursor-pointer">History</summary>
    <div class="flex justify-between items-center my-6">
      <h2 class="text-lg font-bold text-white">Your Previous Guids</h2>
      <button
        @click="clearHistory"
        class="bg-red-900 hover:bg-white hover:text-red-900 text-white transition-all text-sm px-3 h-9 py-1 flex items-center rounded-full">
          <IconsTrash class="w-4 h-4 mr-2"/> Clear History
      </button>
    </div>

    <ul v-if="history.length" class="space-y-1 text-sm">
      <li
        v-for="(item, index) in history"
        :key="index"
        :class="{
          'border-b border-grey-lighter pb-4 pt-2 px-2': index < history.length - 1,
          'text-gray-300 pt-2 px-2': true
        }"
      >
        <p class="font-mono text-xs sm:text-sm leading-none">{{ item.guid }}</p>
        <p class="text-white text-xs sm:text-sm">{{ formatTimestamp(item.timestamp) }}</p>
      </li>
    </ul>
    <p v-else class="text-gray-200 text-xs sm:text-sm">No history yet.</p>
  </details>
</template>