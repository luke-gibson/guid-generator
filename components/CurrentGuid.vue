<script setup>
  const guidStore = useGuidStore()
  const currentGuid = computed(() => guidStore.currentGuid)

  const copied = ref(false)

  const copyToClipboard = async () => {
    if (!currentGuid.value) return

    try {
      await navigator.clipboard.writeText(currentGuid.value)
      copied.value = true
      setTimeout(() => (copied.value = false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
</script>

<template>
  <section v-if="currentGuid">
    <p class="text-lg font-semibold mb-1 text-white">Current GUID:</p>
    <div class="flex items-center">
      <span class="bg-white px-3 flex items-center text-xs sm:text-sm h-10 sm:h-12 font-mono rounded-tl-full rounded-bl-full">{{ currentGuid }}</span>
      <button
        @click="copyToClipboard"
        class="bg-[#00DC82] hover:bg-white hover:text-[#0D162B] text-white transition-all text-sm px-3 h-10 sm:h-12 py-1 sm:px-6 flex items-center rounded-tr-full rounded-br-full"
        title="Copy to clipboard"
      >
        <IconsCopyIcon class="w-4 h-4 sm:mr-2" /> <span class="hidden sm:block">Copy</span>
      </button>
    </div>
    <div v-if="copied"  class="flex items-center p-4 mb-4 text-[#0D162B] bg-white bg-opacity-80 rounded-lg shadow-sm fixed top-2 right-2" role="alert">
      <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-white bg-[#00DC82] rounded-lg">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Copied to clipboard!</div>
    </div>    
  </section>
</template>