<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import portfolioData from '../../data/portfolio.json'

const data = portfolioData
const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!heroRef.value) return
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.fromTo('.hero-tag', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })
    .fromTo('.hero-title-line', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }, '-=0.7')
    .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '-=0.6')
    .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
})
</script>

<template>
  <section class="hero-section section" ref="heroRef">
    <div class="hero-inner">
      <!-- Tag  -->
      <div class="hero-tag">
        <span class="tag-dot" />
        <span>{{ data.meta.availableForWork ? 'Available for work' : 'Currently unavailable' }}</span>
      </div>

      <!-- Title -->
      <h1 class="hero-title">
        <span class="hero-title-line">{{ data.meta.name.split(' ')[0] }}</span>
        <span class="hero-title-line hero-title-line--italic">{{ data.meta.name.split(' ').slice(1).join(' ') }}</span>
      </h1>

      <!-- Role -->
      <p class="hero-sub">{{ data.meta.tagline }}</p>

      <!-- CTAs -->
      <div class="hero-ctas">
        <a href="/works" class="hero-cta hero-cta--primary">View Works</a>
        <a :href="`mailto:${data.meta.email}`" class="hero-cta hero-cta--secondary">Say Hello →</a>
      </div>
    </div>

    <!-- Location badge -->
    <div class="hero-location">
      <span class="location-marker">◎</span>
      <span>{{ data.meta.location }}</span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 4rem;
}

.hero-tag {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  opacity: 0;
}

.tag-dot {
  width: 6px;
  height: 6px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0;
  font-size: clamp(3.5rem, 7vw, 7rem);
  font-weight: 200;
  letter-spacing: -0.04em;
  line-height: 0.95;
  overflow: hidden;
}

.hero-title-line {
  display: block;
  opacity: 0;
}

.hero-title-line--italic {
  font-style: italic;
  font-weight: 300;
}

.hero-sub {
  font-size: clamp(0.85rem, 1.5vw, 1.05rem);
  font-weight: 300;
  color: var(--text-muted);
  max-width: 460px;
  line-height: 1.8;
  opacity: 0;
}

.hero-ctas {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.hero-cta {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.25s;
}

.hero-cta--primary {
  padding: 0.75rem 2rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}
.hero-cta--primary:hover {
  background: var(--text);
  color: var(--bg);
  border-color: var(--text);
}

.hero-cta--secondary {
  color: var(--text-muted);
  transition: color 0.25s;
}
.hero-cta--secondary:hover {
  color: var(--text);
}

.hero-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(3rem, 11vw, 5rem);
  }
}
</style>
