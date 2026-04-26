<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioData from "../data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

const data = portfolioData;
type FilterType = "all" | "development" | "design";
const activeFilter = ref<FilterType>("all");

const filteredWorks = computed(() =>
  activeFilter.value === "all"
    ? data.works
    : data.works.filter((w) => w.type === activeFilter.value),
);

const devCount = computed(
  () => data.works.filter((w) => w.type === "development").length,
);
const designCount = computed(
  () => data.works.filter((w) => w.type === "design").length,
);

function setFilter(f: FilterType) {
  if (activeFilter.value === f) return;
  activeFilter.value = f;
  // Re-animate cards
  gsap.fromTo(
    ".project-card",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.07 },
  );
}

onMounted(() => {
  // Set initial hidden states via GSAP (not CSS) so elements are visible if JS fails
  gsap.set(".works-hero-title", { opacity: 0, y: 60 });
  gsap.set(".works-hero-sub", { opacity: 0, y: 30 });
  gsap.set(".filter-tabs", { opacity: 0, y: 20 });

  gsap.to(".works-hero-title", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2,
  });
  gsap.to(".works-hero-sub", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out",
    delay: 0.55,
  });
  gsap.to(".filter-tabs", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.8,
  });

  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, i) => {
    gsap.set(card, { opacity: 0, y: 50 });
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.9 + i * 0.08,
      scrollTrigger: { trigger: card, start: "top 92%" },
    });
  });
});
</script>

<template>
  <div class="works-view">
    <!-- ── Hero ─────────────────────────── -->
    <section class="section works-hero">
      <p class="section-label">Works</p>
      <h1 class="works-hero-title">Selected<br /><em>Projects</em></h1>
      <p class="works-hero-sub">
        A curated collection spanning web development<br />and graphic design.
      </p>

      <!-- Discipline pills count -->
      <div class="hero-pills">
        <span class="hero-pill hero-pill--dev">
          <span class="pill-dot pill-dot--dev" />
          {{ devCount }} Development
        </span>
        <span class="hero-pill hero-pill--design">
          <span class="pill-dot pill-dot--design" />
          {{ designCount }} Design
        </span>
      </div>
    </section>

    <!-- ── Filter Tabs ───────────────────── -->
    <div class="filter-tabs-wrap">
      <div class="filter-tabs">
        <button
          class="filter-tab"
          :class="{ 'filter-tab--active': activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          All
          <span class="filter-count">{{ data.works.length }}</span>
        </button>
        <button
          class="filter-tab filter-tab--dev"
          :class="{ 'filter-tab--active': activeFilter === 'development' }"
          @click="setFilter('development')"
        >
          Development
          <span class="filter-count">{{ devCount }}</span>
        </button>
        <button
          class="filter-tab filter-tab--design"
          :class="{ 'filter-tab--active': activeFilter === 'design' }"
          @click="setFilter('design')"
        >
          Design
          <span class="filter-count">{{ designCount }}</span>
        </button>
      </div>
    </div>

    <!-- ── Projects Grid ─────────────────── -->
    <section class="section projects-grid-section">
      <div class="projects-grid">
        <div
          v-for="work in filteredWorks"
          :key="work.id"
          class="project-card"
          :class="`project-card--${work.type}`"
        >
          <!-- Type badge -->
          <div class="card-type-badge" :class="`card-type-badge--${work.type}`">
            <span class="badge-dot" :class="`badge-dot--${work.type}`" />
            {{ work.type === "development" ? "Dev" : "Design" }}
          </div>

          <!-- Thumbnail -->
          <div class="project-image-wrap">
            <img
              v-if="work.image"
              :src="work.image"
              :alt="work.title"
              class="project-image"
            />
            <div v-else class="project-image-placeholder">
              <span class="project-image-num">{{
                String(work.id).padStart(2, "0")
              }}</span>
            </div>
            <!-- Client logo overlay -->
            <div v-if="work.clientLogo" class="client-logo-wrap">
              <img
                :src="work.clientLogo"
                :alt="work.title + ' logo'"
                class="client-logo"
              />
            </div>
          </div>

          <!-- Meta -->
          <div class="project-meta">
            <div class="project-header">
              <h2 class="project-title">{{ work.title }}</h2>
              <div class="project-links">
                <a
                  v-if="work.link"
                  :href="work.link"
                  target="_blank"
                  rel="noopener"
                  class="project-link"
                  >↗</a
                >
                <a
                  v-if="work.github"
                  :href="work.github"
                  target="_blank"
                  rel="noopener"
                  class="project-link"
                  >GH</a
                >
              </div>
            </div>
            <div class="project-tags-row">
              <span class="project-category">{{ work.category }}</span>
              <span class="project-year">{{ work.year }}</span>
            </div>
            <p class="project-desc">{{ work.description }}</p>
            <div class="project-tech">
              <span
                v-for="tech in work.technologies"
                :key="tech"
                class="tech-tag"
                >{{ tech }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Hero ──────────────────────────────────────────── */
.works-hero {
  min-height: 48vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
}

.works-hero-title {
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 200;
  letter-spacing: -0.04em;
  line-height: 1;
}

.works-hero-sub {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.85;
  font-weight: 300;
}

.hero-pills {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.4rem 0.85rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.pill-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
.pill-dot--dev {
  background: #60a5fa;
}
.pill-dot--design {
  background: #c084fc;
}

/* ── Filter Tabs ────────────────────────────────────── */
.filter-tabs-wrap {
  padding: 0 4rem;
  border-bottom: 1px solid var(--border);
}

.filter-tabs {
  display: flex;
  gap: 0;
}

.filter-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  cursor: pointer;
  transition:
    color 0.25s,
    border-color 0.25s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transform: translateY(2px); /* sit on the wrapper border */
  -webkit-tap-highlight-color: transparent;
}

.filter-tab:hover {
  color: var(--text);
}

.filter-tab--active {
  color: var(--text);
  border-bottom-color: var(--text);
}

.filter-tab--dev.filter-tab--active {
  border-bottom-color: #60a5fa;
  color: #60a5fa;
}
.filter-tab--design.filter-tab--active {
  border-bottom-color: #c084fc;
  color: #c084fc;
}

.filter-count {
  font-size: 0.6rem;
  opacity: 0.5;
  font-family: "JetBrains Mono", monospace;
}

/* ── Grid ───────────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
}

.project-card {
  background: transparent;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.3s;
  position: relative;
}

.project-card:hover {
  border-color: var(--text-muted);
}

/* ── Type badge ─────────────────────────────────────── */
.card-type-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
  z-index: 2;
  backdrop-filter: blur(4px);
  border: 1px solid transparent;
}

.card-type-badge--development {
  background: rgba(96, 165, 250, 0.08);
  border-color: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
}
.card-type-badge--design {
  background: rgba(192, 132, 252, 0.08);
  border-color: rgba(192, 132, 252, 0.2);
  color: #c084fc;
}

.badge-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
}
.badge-dot--development {
  background: #60a5fa;
}
.badge-dot--design {
  background: #c084fc;
}

/* ── Image ──────────────────────────────────────────── */
.project-image-wrap {
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.project-card:hover .project-image {
  transform: scale(1.04);
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

/* Client logo overlay */
.client-logo-wrap {
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.35rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80px;
  max-height: 40px;
}
.client-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.85;
}

.project-image-num {
  font-size: 3rem;
  font-weight: 100;
  font-family: "JetBrains Mono", monospace;
  color: var(--text-muted);
  letter-spacing: -0.05em;
}

/* ── Meta ───────────────────────────────────────────── */
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
  gap: 0.75rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  min-width: 0;
  overflow-wrap: anywhere;
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
  transition:
    color 0.2s,
    border-color 0.2s;
}
.project-link:hover {
  color: var(--text);
  border-color: var(--text);
}

.project-tags-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.project-category,
.project-year {
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

/* ── Responsive ────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .filter-tabs-wrap {
    padding: 0 1.5rem;
  }
}
@media (max-width: 768px) {
  .works-hero {
    min-height: 30vh;
    gap: 1rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .works-hero-title {
    font-size: clamp(2.2rem, 10vw, 3.5rem);
  }

  .works-hero-sub br {
    display: none;
  }

  .filter-tabs-wrap {
    padding: 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .filter-tabs-wrap::-webkit-scrollbar {
    display: none;
  }
  .filter-tabs {
    padding: 0 1.25rem;
    min-width: max-content;
    width: max-content;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-meta {
    padding: 1.25rem;
  }
}
@media (max-width: 480px) {
  .filter-tab {
    padding: 0.85rem 1rem;
    font-size: 0.68rem;
  }

  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-links {
    align-self: flex-start;
    gap: 0.5rem;
  }

  .project-desc {
    font-size: 0.8rem;
    line-height: 1.65;
  }

  .project-link {
    padding: 0.35rem 0.55rem;
  }

  .hero-pill {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
  }

  .card-type-badge {
    top: 0.75rem;
    right: 0.75rem;
    font-size: 0.54rem;
    padding: 0.2rem 0.45rem;
  }
}
</style>
