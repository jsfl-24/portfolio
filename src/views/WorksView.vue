<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portfolioData from '../data/portfolio.json'

gsap.registerPlugin(ScrollTrigger)

const data = portfolioData

onMounted(() => {
  gsap.fromTo('.works-hero-title',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
  )
  gsap.fromTo('.works-hero-sub',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.6 }
  )

  const cards = document.querySelectorAll('.project-card')
  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
        }
      }
    )
  })
})
</script>

<template>
  <div class="works-view">
    <!-- Header -->
    <section class="section works-hero">
      <p class="section-label">Works</p>
      <h1 class="works-hero-title">Selected<br /><em>Projects</em></h1>
      <p class="works-hero-sub">A curated collection of projects I've crafted,<br />spanning web, design, and interactive experiences.</p>
    </section>

    <!-- Projects Grid -->
    <section class="section projects-grid-section">
      <div class="projects-grid">
        <div
          v-for="work in data.works"
          :key="work.id"
          class="project-card"
        >
          <!-- Image Placeholder -->
          <div class="project-image-wrap">
            <div class="project-image-placeholder">
              <span class="project-image-num">{{ String(work.id).padStart(2, '0') }}</span>
            </div>
          </div>

          <!-- Meta -->
          <div class="project-meta">
            <div class="project-header">
              <h2 class="project-title">{{ work.title }}</h2>
              <div class="project-links">
                <a v-if="work.link" :href="work.link" target="_blank" rel="noopener" class="project-link">↗</a>
                <a v-if="work.github" :href="work.github" target="_blank" rel="noopener" class="project-link">GH</a>
              </div>
            </div>
            <div class="project-tags-row">
              <span class="project-category">{{ work.category }}</span>
              <span class="project-year">{{ work.year }}</span>
            </div>
            <p class="project-desc">{{ work.description }}</p>
            <div class="project-tech">
              <span v-for="tech in work.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.works-view {}

.works-hero {
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.works-hero-title {
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 200;
  letter-spacing: -0.04em;
  line-height: 1;
  opacity: 0;
}

.works-hero-sub {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.85;
  font-weight: 300;
  opacity: 0;
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
}

.project-card {
  background: transparent;
  border: 1px solid var(--border);
  opacity: 0;
  overflow: hidden;
  transition: border-color 0.3s;
}

.project-card:hover {
  border-color: var(--text-muted);
}

.project-image-wrap {
  overflow: hidden;
  aspect-ratio: 16/9;
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-image-placeholder {
  transform: scale(1.04);
}

.project-image-num {
  font-size: 3rem;
  font-weight: 100;
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-muted);
  letter-spacing: -0.05em;
}

.project-meta {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.project-links {
  display: flex;
  gap: 0.75rem;
}
.project-link {
  font-size: 0.78rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.project-link:hover { color: var(--text); border-color: var(--text); }

.project-tags-row {
  display: flex;
  gap: 1rem;
}
.project-category, .project-year {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.project-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.75;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.tech-tag {
  font-size: 0.65rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
