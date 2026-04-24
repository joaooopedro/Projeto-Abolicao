<template>
  <footer class="w-full bg-white py-8">
    <div class="w-full max-w-[1200px] mx-auto rounded-[20px] border border-black px-6 py-8 min-h-[220px]">
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8 h-full">
        
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <h3 class="text-black font-['Poppins'] text-[20px] md:text-[24px] font-semibold leading-snug">
            Projeto Capoeira Abolição
          </h3>
          <p class="text-black font-['Poppins'] text-[13px] md:text-[14px] font-bold mt-2">
            Centro Cultural de Capoeira Abolição
          </p>

          <address class="not-italic text-black font-['Poppins'] text-[13px] md:text-[14px] font-medium mt-4">
            Rua Robson da Costa Magalhães,<br />
            67 Bela Aurora,<br />
            Juiz de Fora, Brasil
          </address>

        
        </div>

        
        <div class="hidden md:flex md:items-center md:justify-center">
          <img src="/images/bonecos footer.png" alt="Capoeiristas" class="w-[420px] h-auto object-contain" />
        </div>

       
        <div class="flex-1 md:flex md:justify-end">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ul class="flex flex-col gap-2 text-black font-['Poppins'] text-[13px] md:text-[14px] font-medium">
              <li><a href="/#" class="hover:text-[#FF8400] transition-colors">Página Inicial</a></li>
              <li><a href="/#sobre" class="hover:text-[#FF8400] transition-colors">Sobre</a></li>
              <li><NuxtLink to="/contato" class="hover:text-[#FF8400] transition-colors">Contato</NuxtLink></li>
            </ul>

            <ul class="flex flex-col gap-2 text-black font-['Poppins'] text-[13px] md:text-[14px] font-medium">
              <li><a href="https://www.facebook.com/projetoabolicao2016" target="_blank" rel="noopener noreferrer" class="hover:text-[#FF8400] transition-colors">Facebook</a></li>
              <li><a href="https://wa.me/5532988736118" target="_blank" rel="noopener noreferrer" class="hover:text-[#FF8400] transition-colors">WhatsApp</a></li>
            </ul>

            <div class="flex flex-col gap-2 text-black font-['Poppins'] text-[13px] md:text-[14px] font-medium">
              <NuxtLink to="/doacoes" class="hover:text-[#FF8400] transition-colors">Doações</NuxtLink>
              <NuxtLink to="/cadastro" class="hover:text-[#FF8400] transition-colors">Matricular</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      
      <div class="mt-6 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-black font-['Poppins'] text-[13px] md:text-[14px] font-semibold">
          © 2025 Projeto Capoeira Abolição. Todos os direitos reservados.
        </p>

        <p class="text-black font-['Space_Grotesk'] text-[12px] md:text-[14px] font-bold text-right">
          Desenvolvido por estudantes de Engenharia de Software
        </p>
      </div>
    </div>
  </footer>
</template>