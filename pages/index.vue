<script setup>
const guidStore = useGuidStore()
const { generateGuid, clearHistory } = guidStore
const currentGuid = computed(() => guidStore.currentGuid)
const history = computed(() => guidStore.history)
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
  <section class="p-6 max-w-xl mx-auto space-y-6">
    <h1 class="text-white text-3xl sm:text-4xl font-bold">Easy GUID Generator</h1>
    <button
      @click="generateGuid"
      class="text-white bg-[#00DC82] hover:bg-white hover:text-[#0D162B] px-4 py-2 rounded-full transition-colors flex items-center justify-center">
        Generate GUID <IconsGenerateIcon class="inline-block w-5 h-5 ml-2" />
    </button>
    <CurrentGuid :guid="currentGuid" :copied="copied" @copy="copyToClipboard" />        
    <History :history="history" :clearHistory="clearHistory" />
  </section>

  <PillComponent 
    to="https://ovalcreative.co.uk" 
    target="_blank"
    class="fixed bottom-2 sm:bottom-6 right-2 sm:right-6">
    Powered by: <IconsLogoIcon class="w-24 ml-2"/>
  </PillComponent> 
</template>
