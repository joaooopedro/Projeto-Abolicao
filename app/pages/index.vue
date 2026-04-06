<template>
  <div class="flex flex-col w-full bg-white">
    <Hero />
    <Carrossel />
    <Proposito />
    <FicouInteressado />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Proposito from '~/components/Proposito.vue'
const currentIndex = ref(0)
let carouselInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 3
  }, 4000)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})
</script>
