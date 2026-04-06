<template>
  <section class="w-full">
    <div class="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[70px] py-16 md:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="lg:sticky lg:top-24 lg:self-start">
          <div class="inline-block bg-[#FF8C00] text-white px-6 py-2.5 rounded-xl mb-4">
            <h2 class="font-['Space_Grotesk'] text-xl md:text-2xl font-bold">Propósito</h2>
          </div>
          <p class="text-[#191A23] font-['Space_Grotesk'] text-sm md:text-base leading-relaxed text-justify mb-6">
            Buscamos fortalecer a autoestima, a disciplina e o senso de comunidade oferecendo diversas atividades esportivas, 
            culturais e educativas, totalmente gratuitas. Elas são as ferramentas para que cada aluno possa descobrir seu potencial e 
            construir um futuro com mais dignidade e oportunidades.
          </p>


          <div class="flex justify-center">
            <img src="/images/boneco laranja.png" alt="Ilustração Capoeira" class="w-64 md:w-80 lg:w-96" />
          </div>
        </div>

        <div class="space-y-8">
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div class="aspect-video w-full overflow-hidden">
              <img src="/images/proposito imagem roda de capoeira.png" alt="Roda de Capoeira" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#191A23] mb-3">
                Roda de Capoeira
              </h3>
              <p class="font-['Space_Grotesk'] text-sm md:text-base text-gray-600 leading-relaxed">
                A Essência da Capoeira: Nossas turmas em um momento de união e celebração, vivenciando a força e a cultura da capoeira.
              </p>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div class="aspect-video w-full overflow-hidden">
              <img src="/images/proposito imagem ballet.png" alt="Ballet e Dança" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#191A23] mb-3">
                Ballet/Dança
              </h3>
              <p class="font-['Space_Grotesk'] text-sm md:text-base text-gray-600 leading-relaxed">
                Dança e Expressão: Nossas aulas de dança oferecem um espaço de alegria e desenvolvimento corporal, incentivando a disciplina e a criatividade.
              </p>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div class="aspect-video w-full overflow-hidden">
              <img src="/images/proposito imagem formatura.png" alt="Atividades Culturais" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#191A23] mb-3">
                Atividades Culturais
              </h3>
              <p class="font-['Space_Grotesk'] text-sm md:text-base text-gray-600 leading-relaxed">
                Cultura e Educação: Promovemos eventos e atividades que valorizam a cultura local e incentivam o aprendizado contínuo.
              </p>
            </div>
          </article>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>