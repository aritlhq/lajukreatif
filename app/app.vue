<script setup lang="ts">
// Mengelola metadata <head> secara global dari entri utama aplikasi
useHead({
  htmlAttrs: {
    lang: 'id'
  },
  title: 'Laju Kreatif - Jasa Pembuatan Website Profesional untuk UMKM',
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {
      name: 'description',
      content: 'Jasa pembuatan website profesional untuk membantu meningkatkan citra dan daya saing perusahaan Anda di dunia digital. Paket lengkap, harga terjangkau.'
    },
    {
      name: 'keywords',
      content: 'jasa website, pembuatan website, website umkm, landing page, website murah, website profesional'
    }
  ],
})
</script>

<template>
  <div class="bg-gray-50 font-sans antialiased text-gray-800">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>