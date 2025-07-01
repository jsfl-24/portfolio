<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'

// Scroll to About section function
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about-section');
  if (aboutSection) {
    aboutSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Provide the scroll function to child components
import { provide } from 'vue'
provide('scrollToAbout', scrollToAbout)
</script>

<template>
  <div class="app bg-primary min-h-screen font-poppins" id="app">
    <Hero />
    <div id="about-section">
      <About />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>