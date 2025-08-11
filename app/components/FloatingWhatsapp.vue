<script setup lang="ts">
const {whatsappLink} = usePricing();
</script>

<template>
  <div id="kontak" class="fixed bottom-6 right-6 z-30">
    <a :href="whatsappLink" target="_blank"
       class="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
       aria-label="Hubungi via WhatsApp">
      <IconsWhatsAppIcon/>
    </a>
  </div>
</template>