<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Journey from './components/Journey.vue'
import { provide } from 'vue'

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

// Scroll to Journey section function
const scrollToJourney = () => {
  const journeySection = document.getElementById('journey-section');
  if (journeySection) {
    journeySection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Smart scroll function - detects current section and scrolls to next
const scrollToNext = () => {
  const heroSection = document.getElementById('hero-section');
  const aboutSection = document.getElementById('about-section');

  if (heroSection && aboutSection) {
    const heroRect = heroSection.getBoundingClientRect();
    const aboutRect = aboutSection.getBoundingClientRect();

    // Check if Hero section is in view (within 100px of top)
    if (heroRect.top >= -100 && heroRect.top <= 100) {
      console.log('Currently in Hero - scrolling to About');
      scrollToAbout();
    }
    // Check if About section is in view (within 100px of top)
    else if (aboutRect.top >= -100 && aboutRect.top <= 100) {
      console.log('Currently in About - scrolling to Journey');
      scrollToJourney();
    }
    // Default fallback - scroll to About
    else {
      console.log('Default - scrolling to About');
      scrollToAbout();
    }
  }
}

// Provide the scroll functions to child components
provide('scrollToAbout', scrollToAbout)
provide('scrollToJourney', scrollToJourney)
provide('scrollToNext', scrollToNext)
</script>

<template>
  <div class="app bg-primary min-h-screen font-poppins" id="app">
    <div id="hero-section">
      <Hero />
    </div>
    <div id="about-section">
      <About />
    </div>
    <div id="journey-section">
      <Journey />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>