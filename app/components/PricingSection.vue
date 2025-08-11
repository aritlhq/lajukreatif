<script setup lang="ts">
const {pricingPlans} = usePricing();
</script>

<template>
  <section id="harga" class="py-16 lg:py-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Paket Harga Fleksibel untuk Setiap Kebutuhan</h2>
      <p class="text-gray-600 mt-2">Pilih paket yang paling sesuai dengan budget dan target bisnis Anda.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
      <PricingCard v-for="plan in pricingPlans" :key="plan.name" :plan="plan"/>
    </div>
  </section>
</template>