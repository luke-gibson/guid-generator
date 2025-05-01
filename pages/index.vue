<script setup>
import { computed, onMounted } from 'vue'
const guidStore = useGuidStore()
const { generateGuid, clearHistory } = guidStore
const currentGuid = computed(() => guidStore.currentGuid)
const history = computed(() => guidStore.history)
const { useSeoMeta } = useHead()

onMounted(() => {
  if (!currentGuid.value) {
    generateGuid()
  }
})

useSeoMeta({
  title: 'Free GUID Generator Online – Create Unique GUIDs Instantly | EasyGUID',
  ogTitle: 'Free GUID Generator Online – Create Unique GUIDs Instantly | EasyGUID',
  description: 'Generate globally unique identifiers (GUIDs) instantly with EasyGUID. A fast, free, and secure online GUID generator with copy and history features. No sign-up needed.',
  ogDescription: 'Generate globally unique identifiers (GUIDs) instantly with EasyGUID. A fast, free, and secure online GUID generator with copy and history features. No sign-up needed.',
  ogImage: 'https://res.cloudinary.com/dqqarxqbu/image/upload/v1746107614/Screenshot_2025-05-01_at_14.53.10_fvlixj.png',
  twitterCard: 'summary_large_image',
})
</script>


<template>
  <section class="p-4 max-w-xl mx-auto space-y-6">
    <h1 class="text-white text-3xl sm:text-4xl font-bold">Easy GUID Generator</h1>
    <button
      @click="generateGuid"
      class="text-white bg-[#00DC82] hover:bg-white hover:text-[#0D162B] px-4 py-2 rounded-full transition-colors flex items-center justify-center">
        Generate GUID <IconsGenerateIcon class="inline-block w-5 h-5 ml-2" />
    </button>
    <CurrentGuid :guid="currentGuid" />
    <History :history="history" :clearHistory="clearHistory" />
  </section>

  <PillComponent 
    to="https://ovalcreative.co.uk" 
    target="_blank" 
    class="fixed bottom-3 sm:bottom-6 right-3 sm:right-6">
    Powered by: <IconsLogoIcon class="w-16 sm:w-24 ml-2"/>
  </PillComponent> 
</template>
