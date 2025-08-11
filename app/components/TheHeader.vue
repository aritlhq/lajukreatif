<script setup lang="ts">
const {whatsappLink} = usePricing();
</script>

<template>
  <header class="bg-white/80 backdrop-blur-md sticky top-0 z-30 shadow-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-brand-green">
        Laju Kreatif
      </a>
      <nav class="hidden md:flex items-center space-x-6">
        <a href="#harga" class="text-gray-600 hover:text-brand-green transition-colors">Paket Harga</a>
        <a href="#kontak" class="text-gray-600 hover:text-brand-green transition-colors">Kontak</a>
      </nav>
      <a :href="whatsappLink" target="_blank"
         class="hidden md:inline-block bg-brand-green text-white font-bold py-2 px-5 rounded-full hover:bg-brand-green-dark transition-transform hover:scale-105">
        Konsultasi Gratis
      </a>
    </div>
  </header>
</template>