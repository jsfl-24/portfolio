<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RouterLink } from 'vue-router'
import portfolioData from '../../data/portfolio.json'

gsap.registerPlugin(ScrollTrigger)

const data = portfolioData
const sectionRef = ref<HTMLElement | null>(null)

const props = withDefaults(defineProps<{
  limit?: number
}>(), {
  limit: 0,
})

const works = props.limit > 0 ? data.works.slice(0, props.limit) : data.works

onMounted(() => {
  if (!sectionRef.value) return
  const rows = sectionRef.value.querySelectorAll('.work-row')
  rows.forEach((row, i) => {
    gsap.fromTo(
      row,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.06,
        scrollTrigger: {
          trigger: row,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )
  })
})
</script>

<template>
  <section class="section works-section" ref="sectionRef">
    <p class="section-label">Selected Works</p>

    <div class="works-list">
      <RouterLink
        v-for="work in works"
        :key="work.id"
        to="/works"
        class="work-row"
        data-cursor-hover
      >
        <div class="work-meta-left">
          <span class="work-num">{{ String(work.id).padStart(2, '0') }}</span>
        </div>

        <div class="work-title-wrap">
          <h2 class="work-title">{{ work.title }}</h2>
        </div>

        <div class="work-meta-right">
          <span class="work-category">{{ work.category }}</span>
          <span class="work-year">{{ work.year }}</span>
        </div>

        <div class="work-arrow">→</div>
      </RouterLink>
    </div>

    <!-- If limited, show "view all" link -->
    <div class="works-footer" v-if="limit > 0">
      <RouterLink to="/works" class="view-all-link">
        View all projects <span class="arrow">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.works-list {
  display: flex;
  flex-direction: column;
}

.work-row {
  display: grid;
  grid-template-columns: 3rem 1fr auto 2rem;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s;
  opacity: 0;
  position: relative;
  overflow: hidden;
}

.work-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--text);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s;
  z-index: -1;
}

.work-row:hover::before {
  transform: scaleX(1);
  opacity: 0.04;
}

.work-num {
  font-size: 0.65rem;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.06em;
}

.work-title {
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.work-row:hover .work-title {
  transform: translateX(8px);
}

.work-meta-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
}

.work-category {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.work-year {
  font-size: 0.68rem;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
}

.work-arrow {
  font-size: 1rem;
  color: var(--text-muted);
  transition: transform 0.3s ease, color 0.3s ease;
}
.work-row:hover .work-arrow {
  transform: translateX(4px);
  color: var(--text);
}

.works-footer {
  margin-top: 3rem;
}

.view-all-link {
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.view-all-link:hover { color: var(--text); }
.view-all-link:hover .arrow { transform: translateX(4px); }
.arrow { display: inline-block; transition: transform 0.3s ease; }

@media (max-width: 640px) {
  .work-row {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }
  .work-meta-left { display: none; }
  .work-arrow { display: none; }
}
</style>
