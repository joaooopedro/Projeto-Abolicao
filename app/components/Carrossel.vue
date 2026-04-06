<template>
  <section id="sobre" class="flex flex-col w-full bg-white py-12 sm:py-20">
    <div class="flex flex-col w-full items-center gap-8 sm:gap-12">
      
      <!-- título: padding e tamanho responsivos para não ocupar tanto espaço em mobile -->
      <div class="flex flex-col items-start px-4 py-2 gap-2 sm:px-[30px] sm:py-[10px] sm:gap-[10px] rounded-[7px] bg-[#FF8400]">
        <h2 class="text-white font-['Space_Grotesk'] text-[24px] sm:text-[40px] font-medium leading-normal">
          Nosso espaço de transformação
        </h2>
      </div>

      <!-- Carrossel Container: altura responsiva reduzida e padding interno para dar 'folga' à imagem. -->
      <div class="relative w-full max-w-[1200px] h-[180px] sm:h-[300px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-[24px] px-4">
        <div 
          class="flex transition-transform duration-700 ease-in-out h-full"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Imagem 1 -->
          <div class="w-full h-full flex-shrink-0 flex items-center justify-center px-2">
            <img 
              src="/images/imagem 1 carrousel.png" 
              alt="Espaço de transformação 1"
              class="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          <!-- Imagem 2 -->
          <div class="w-full h-full flex-shrink-0 flex items-center justify-center px-2">
            <img 
              src="/images/imagem 2 carrousel.png" 
              alt="Espaço de transformação 2"
              class="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          <!-- Imagem 3 -->
          <div class="w-full h-full flex-shrink-0 flex items-center justify-center px-2">
            <img 
              src="/images/imagem 3 carrousel.png" 
              alt="Espaço de transformação 3"
              class="w-full h-full object-cover rounded-[16px]"
            />
          </div>
        </div>

        <!-- Indicadores -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          <button
            v-for="i in 3"
            :key="i"
            @click="currentIndex = i - 1"
            class="w-3 h-3 rounded-full transition-colors"
            :class="currentIndex === i - 1 ? 'bg-[#FF8400]' : 'bg-white/50'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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