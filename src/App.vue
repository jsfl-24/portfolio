<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Journey from './components/Journey.vue'
import { provide, ref, onMounted } from 'vue'

// Current section tracking
const currentSection = ref('hero')

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

// Scroll to Hero section function
const scrollToHero = () => {
  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    heroSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Smart scroll function - scrolls to next section based on current position
const scrollToNext = () => {
  const heroSection = document.getElementById('hero-section');
  const aboutSection = document.getElementById('about-section');
  const journeySection = document.getElementById('journey-section');

  if (heroSection && aboutSection && journeySection) {
    const heroRect = heroSection.getBoundingClientRect();
    const aboutRect = aboutSection.getBoundingClientRect();
    const journeyRect = journeySection.getBoundingClientRect();

    // Check which section is currently in view
    if (heroRect.top >= -100 && heroRect.top <= 100) {
      // Currently in Hero section, scroll to About
      scrollToAbout();
    } else if (aboutRect.top >= -100 && aboutRect.top <= 100) {
      // Currently in About section, scroll to Journey
      scrollToJourney();
    } else if (journeyRect.top >= -100 && journeyRect.top <= 100) {
      // Currently in Journey section, scroll back to Hero
      scrollToHero();
    } else {
      // Default: scroll to About
      scrollToAbout();
    }
  }
}

// Provide the scroll functions to child components
provide('scrollToAbout', scrollToAbout)
provide('scrollToJourney', scrollToJourney)
provide('scrollToHero', scrollToHero)
provide('scrollToNext', scrollToNext)

// Track current section on scroll
onMounted(() => {
  const handleScroll = () => {
    const heroSection = document.getElementById('hero-section');
    const aboutSection = document.getElementById('about-section');
    const journeySection = document.getElementById('journey-section');

    if (heroSection && aboutSection && journeySection) {
      const heroRect = heroSection.getBoundingClientRect();
      const aboutRect = aboutSection.getBoundingClientRect();
      const journeyRect = journeySection.getBoundingClientRect();

      if (heroRect.top >= -200 && heroRect.top <= 200) {
        currentSection.value = 'hero';
      } else if (aboutRect.top >= -200 && aboutRect.top <= 200) {
        currentSection.value = 'about';
      } else if (journeyRect.top >= -200 && journeyRect.top <= 200) {
        currentSection.value = 'journey';
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
})
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