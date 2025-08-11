<script setup lang="ts">
import type {NuxtError} from '#app'

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <div class="bg-gray-50 flex flex-col items-center justify-center min-h-screen text-center px-4">
    <div class="max-w-md">
      <h1 class="text-9xl font-extrabold text-brand-green">{{ error.statusCode }}</h1>
      <p class="text-2xl md:text-3xl font-light text-gray-700 mt-4">
        {{ error.statusCode === 404 ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan' }}
      </p>
      <p class="mt-4 text-gray-500">
        Maaf, halaman yang Anda cari tidak ada atau terjadi masalah pada sistem kami.
      </p>
      <button
          @click="handleError"
          class="mt-8 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-dark transition-transform hover:scale-105">
        Kembali ke Beranda
      </button>
    </div>
  </div>
</template>