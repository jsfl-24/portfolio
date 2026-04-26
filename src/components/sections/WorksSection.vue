<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RouterLink } from "vue-router";
import portfolioData from "../../data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

const data = portfolioData;
const sectionRef = ref<HTMLElement | null>(null);

const props = withDefaults(
  defineProps<{
    limit?: number;
  }>(),
  {
    limit: 0,
  },
);

const devWorks = computed(() => {
  const filtered = data.works.filter((w) => w.type === "development");
  return props.limit > 0 ? filtered.slice(0, props.limit) : filtered;
});

const designWorks = computed(() => {
  const filtered = data.works.filter((w) => w.type === "design");
  return props.limit > 0 ? filtered.slice(0, props.limit) : filtered;
});

onMounted(() => {
  if (!sectionRef.value) return;

  // Set initial states via GSAP
  gsap.set(".discipline-header", { opacity: 0, y: 30 });
  const rows = sectionRef.value.querySelectorAll(".work-row");
  rows.forEach((row) => gsap.set(row, { opacity: 0, x: -16 }));

  // Animate discipline headers
  gsap.to(".discipline-header", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: { trigger: sectionRef.value, start: "top 85%" },
  });

  // Animate rows
  rows.forEach((row, i) => {
    gsap.to(row, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "power3.out",
      delay: i * 0.05,
      scrollTrigger: {
        trigger: row,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<template>
  <section class="section works-section" ref="sectionRef">
    <p class="section-label">Selected Works</p>

    <div class="disciplines-grid">
      <!-- ── Development Column ── -->
      <div class="discipline-col">
        <div class="discipline-header">
          <span class="discipline-dot discipline-dot--dev" />
          <span class="discipline-label">Development</span>
        </div>
        <div class="works-list">
          <RouterLink
            v-for="work in devWorks"
            :key="work.id"
            to="/works"
            class="work-row"
            data-cursor-hover
          >
            <!-- Thumb -->
            <div class="work-thumb">
              <img
                v-if="work.clientLogo"
                :src="work.clientLogo"
                :alt="work.title"
                class="work-thumb-img"
              />
              <span v-else class="work-num">{{
                String(work.id).padStart(2, "0")
              }}</span>
            </div>
            <div class="work-title-wrap">
              <h2 class="work-title">{{ work.title }}</h2>
              <span class="work-category">{{ work.category }}</span>
            </div>
            <span class="work-year">{{ work.year }}</span>
            <span class="work-arrow">BE</span>
          </RouterLink>
        </div>
      </div>

      <!-- Divider -->
      <div class="discipline-divider" />

      <!-- ── Design Column ── -->
      <div class="discipline-col">
        <div class="discipline-header">
          <span class="discipline-dot discipline-dot--design" />
          <span class="discipline-label">Design</span>
        </div>
        <div class="works-list">
          <RouterLink
            v-for="work in designWorks"
            :key="work.id"
            to="/works"
            class="work-row"
            data-cursor-hover
          >
            <!-- Thumb -->
            <div class="work-thumb">
              <img
                v-if="work.clientLogo"
                :src="work.clientLogo"
                :alt="work.title"
                class="work-thumb-img"
              />
              <span v-else class="work-num">{{
                String(work.id).padStart(2, "0")
              }}</span>
            </div>
            <div class="work-title-wrap">
              <h2 class="work-title">{{ work.title }}</h2>
              <span class="work-category">{{ work.category }}</span>
            </div>
            <span class="work-year">{{ work.year }}</span>
            <a
              v-if="work.link"
              :href="work.link"
              target="_blank"
              rel="noopener noreferrer"
              class="work-arrow behance-arrow"
              @click.stop
              >↗</a
            >
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- View all -->
    <div class="works-footer" v-if="limit > 0">
      <RouterLink to="/works" class="view-all-link">
        View all projects <span class="arrow">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
/* ── Two-column layout ─────────────────────────────── */
.disciplines-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 0 3rem;
  margin-bottom: 0;
}

.discipline-divider {
  background: var(--border);
  width: 1px;
  align-self: stretch;
}

.discipline-col {
  display: flex;
  flex-direction: column;
}

/* ── Discipline Header ─────────────────────────────── */
.discipline-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 0;
}

.discipline-label {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 400;
}

.discipline-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.discipline-dot--dev {
  background: #60a5fa;
}
.discipline-dot--design {
  background: #c084fc;
}

/* ── Work list ─────────────────────────────────────── */
.works-list {
  display: flex;
  flex-direction: column;
}

.work-row {
  display: grid;
  grid-template-columns: 2.5rem 1fr auto 1.5rem;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s;
}

.work-row::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--text);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.5s;
  z-index: -1;
}

.work-row:hover::before {
  transform: scaleX(1);
  opacity: 0.04;
}

.work-thumb {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 6px;
  overflow: hidden;
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--border);
  transition: border-color 0.25s;
}
.work-row:hover .work-thumb {
  border-color: var(--text-muted);
}

.work-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  padding: 4px;
  filter: brightness(0) invert(1);
  opacity: 0.85;
}
html.light .work-thumb-img {
  filter: brightness(0);
  opacity: 0.7;
}

.work-num {
  font-size: 0.62rem;
  color: var(--text-muted);
  font-family: "JetBrains Mono", monospace;
  letter-spacing: 0.06em;
}

.work-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.work-title {
  font-size: clamp(0.95rem, 1.4vw, 1.3rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.work-category {
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.work-row:hover .work-title {
  transform: translateX(6px);
}

.work-year {
  font-size: 0.65rem;
  color: var(--text-muted);
  font-family: "JetBrains Mono", monospace;
}

.work-arrow {
  font-size: 0.9rem;
  color: var(--text-muted);
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.work-row:hover .work-arrow {
  transform: translateX(4px);
  color: var(--text);
}

.behance-arrow {
  font-size: 0.8rem;
  border: 1px solid var(--border);
  padding: 0.15rem 0.35rem;
  border-radius: 2px;
  transition:
    color 0.2s,
    border-color 0.2s;
}
.behance-arrow:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

/* ── Footer ────────────────────────────────────────── */
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
.view-all-link:hover {
  color: var(--text);
}
.view-all-link:hover .arrow {
  transform: translateX(4px);
}
.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .disciplines-grid {
    grid-template-columns: 1fr;
    gap: 3rem 0;
  }
  .discipline-divider {
    display: none;
  }
}

@media (max-width: 640px) {
  .work-row {
    grid-template-columns: 2rem minmax(0, 1fr);
    gap: 0.75rem;
    padding: 1rem 0;
  }

  .work-thumb {
    width: 2rem;
    height: 2rem;
  }

  .work-year {
    display: none;
  }
  .work-arrow {
    display: none;
  }

  .work-title {
    font-size: 0.95rem;
    white-space: normal;
    line-height: 1.25;
  }

  .work-category {
    letter-spacing: 0.1em;
    white-space: normal;
  }
}
</style>
