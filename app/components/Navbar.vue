<template>
  <nav class="w-full bg-white shadow-sm">
    <div class="flex max-w-[1440px] px-5 md:px-10 lg:px-[70px] py-5 justify-between items-center mx-auto">
      <NuxtLink to="/" class="text-[#191A23] font-['Space_Grotesk'] text-sm md:text-base lg:text-lg font-medium leading-tight flex-shrink-0 hover:opacity-80 transition-opacity">
        Centro Cultural de Capoeira Abolição
      </NuxtLink>
      <div class="hidden lg:flex justify-center items-center rounded-full bg-[#4F4F4F]">
        <NuxtLink to="/" class="flex px-4 py-2 justify-center items-center gap-2 rounded-full font-['Space_Grotesk'] text-sm font-medium leading-tight transition-all duration-300 whitespace-nowrap" :class="Ativo('/') ? 'bg-black text-white' : 'bg-transparent text-white hover:bg-black/30'">
          Página Inicial
        </NuxtLink>
        <a href="/#sobre" class="flex px-4 py-2 justify-center items-center gap-2 rounded-full font-['Space_Grotesk'] text-sm font-medium leading-tight transition-all duration-300 whitespace-nowrap bg-transparent text-white hover:bg-black/30">
          Sobre
        </a>
        <NuxtLink to="/contato" class="flex px-4 py-2 justify-center items-center gap-2 rounded-full font-['Space_Grotesk'] text-sm font-medium leading-tight transition-all duration-300 whitespace-nowrap" :class="Ativo('/contato') ? 'bg-black text-white' : 'bg-transparent text-white hover:bg-black/30'">
          Contato
        </NuxtLink>
      </div>

      <NuxtLink to="/doacoes" class="hidden lg:flex px-5 py-3 items-center gap-2 rounded-xl border-2 border-[#191A23] text-[#191A23] font-['Space_Grotesk'] text-sm font-semibold leading-tight transition-all duration-300 hover:bg-[#191A23] hover:text-white whitespace-nowrap">
        Faça uma doação →
      </NuxtLink>

      <button @click="MenuAberto = !MenuAberto" class="lg:hidden p-2 text-[#191A23] hover:bg-gray-100 rounded-lg transition-colors" :aria-label="MenuAberto ? 'Fechar menu' : 'Abrir menu'" :aria-expanded="MenuAberto">
        <svg v-if="!MenuAberto" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition enter-active-class="transition-opacity duration-300" leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0" leave-to-class="opacity-0">
      <div v-if="MenuAberto" class="fixed inset-0 bg-black/50 z-40 lg:hidden" @click="MenuAberto = false" />
    </Transition>

    <Transition enter-active-class="transition-transform duration-300" leave-active-class="transition-transform duration-300" enter-from-class="translate-x-full" leave-to-class="translate-x-full">
      <div v-if="MenuAberto" class="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
        <div class="flex justify-between items-center p-5 border-b border-gray-200">
          <span class="text-[#191A23] font-['Space_Grotesk'] text-base font-semibold">Menu</span>
          <button @click="MenuAberto = false" class="p-2 text-[#191A23] hover:bg-gray-100 rounded-lg transition-colors" aria-label="Fechar menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex flex-col p-5 gap-1">
          <NuxtLink to="/" @click="MenuAberto = false" class="flex px-4 py-3 rounded-lg font-['Space_Grotesk'] text-sm font-medium leading-tight transition-all duration-300" :class="Ativo('/') ? 'bg-[#191A23] text-white' : 'text-[#191A23] hover:bg-gray-100'">
            Página Inicial
          </NuxtLink>

          <a href="/#sobre" @click="MenuAberto = false" class="flex px-4 py-3 rounded-lg font-['Space_Grotesk'] text-sm font-medium leading-tight transition-all duration-300 text-[#191A23] hover:bg-gray-100">
            Sobre
          </a>

          <NuxtLink to="/contato" @click="MenuAberto = false" class="flex px-4 py-3 rounded-lg font-['Space_Grotesk'] text-sm font-medium leading-tight transition-all duration-300" :class="Ativo('/contato') ? 'bg-[#191A23] text-white' : 'text-[#191A23] hover:bg-gray-100'">
            Contato
          </NuxtLink>

          <NuxtLink to="/doacoes" @click="MenuAberto = false" class="flex px-4 py-3 mt-4 justify-center items-center gap-2 rounded-xl border-2 border-[#191A23] text-[#191A23] font-['Space_Grotesk'] text-sm font-semibold leading-tight transition-all duration-300 hover:bg-[#191A23] hover:text-white">
            Faça uma doação →
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const MenuAberto = ref(false)

const Ativo = (path: string): boolean => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

watch(() => route.path, () => {
  MenuAberto.value = false
})

watch(MenuAberto, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})


onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>