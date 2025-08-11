<script setup lang="ts">
defineProps({
  plan: {
    type: Object,
    required: true
  }
});

const {whatsappLink} = usePricing();
</script>

<template>
  <div
      class="bg-white rounded-2xl shadow-lg relative overflow-hidden transition-transform hover:-translate-y-2"
      :class="{'border-2 border-brand-green scale-105': plan.popular}">

    <div class="bg-brand-green text-center py-2 text-white font-semibold">
      {{ plan.discount }}
    </div>

    <div v-if="plan.popular"
         class="absolute top-10 -right-12 transform rotate-45 bg-amber-400 text-black text-xs font-bold px-16 py-1">
      POPULER
    </div>

    <div class="p-8">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ plan.name }}</h3>

      <div class="mb-6">
        <span class="text-xl font-medium text-red-500 line-through">Rp {{ plan.originalPrice }}</span>
        <p class="text-5xl font-extrabold text-brand-green my-1">
          Rp {{ plan.price }}
        </p>
        <p class="text-gray-500 text-sm">{{ plan.renewal }}</p>
      </div>

      <ul class="space-y-4 mb-8 text-gray-600">
        <li v-for="feature in plan.features" :key="feature" class="flex items-start space-x-3">
          <IconsCheckIcon/>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <p class="text-sm text-gray-500 italic mb-8 min-h-[60px]">{{ plan.note }}</p>

      <a :href="whatsappLink" target="_blank"
         class="w-full block text-center font-bold py-3 px-6 rounded-lg transition-colors"
         :class="plan.popular ? 'bg-brand-green text-white hover:bg-brand-green-dark' : 'bg-gray-200 text-brand-green hover:bg-gray-300'">
        {{ plan.ctaText }}
      </a>
    </div>
  </div>
</template>