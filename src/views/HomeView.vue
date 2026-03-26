<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import WorksSection from '../components/sections/WorksSection.vue'
</script>

<template>
  <HeroSection />
  <AboutSection />
  <WorksSection :limit="4" />
</template>
