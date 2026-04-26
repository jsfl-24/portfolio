<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioData from "../../data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

const data = portfolioData;
const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!sectionRef.value) return;
  const items = sectionRef.value.querySelectorAll(".reveal");
  // Set initial state via GSAP so elements are visible if JS fails
  items.forEach((el) => gsap.set(el, { opacity: 0, y: 40 }));
  items.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<template>
  <section class="section about-section" ref="sectionRef">
    <p class="section-label reveal">About</p>

    <div class="about-grid">
      <!-- Description left side -->
      <div class="about-text">
        <p class="about-paragraph reveal">{{ data.meta.description }}</p>

        <div class="about-details reveal reveal-delay-1">
          <div class="detail-item">
            <span class="detail-label">Location</span>
            <span class="detail-value">{{ data.meta.location }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Email</span>
            <a
              :href="`mailto:${data.meta.email}`"
              class="detail-value detail-link"
              >{{ data.meta.email }}</a
            >
          </div>
          <div class="detail-item">
            <span class="detail-label">Status</span>
            <span
              class="detail-value status-available"
              v-if="data.meta.availableForWork"
            >
              <span class="status-dot" /> Available
            </span>
          </div>
        </div>
      </div>

      <!-- Skills right side -->
      <div class="skills-grid">
        <div
          v-for="(group, i) in data.skills"
          :key="group.category"
          class="skill-group reveal"
          :class="`reveal-delay-${i}`"
        >
          <h3 class="skill-category">{{ group.category }}</h3>
          <ul class="skill-list">
            <li v-for="item in group.items" :key="item" class="skill-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="experience-section">
      <div
        v-for="(exp, i) in data.experience"
        :key="i"
        class="experience-item reveal"
      >
        <div class="experience-left">
          <p class="exp-period">{{ exp.period }}</p>
        </div>
        <div class="experience-right">
          <p class="exp-role">{{ exp.role }}</p>
          <p class="exp-company">— {{ exp.company }}</p>
          <p class="exp-desc">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  border-bottom: 1px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.about-paragraph {
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  font-weight: 300;
  line-height: 1.9;
  color: var(--text);
  margin-bottom: 3rem;
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.detail-item {
  display: flex;
  gap: 1.5rem;
  font-size: 0.82rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.75rem;
}
.detail-label {
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  width: 80px;
  flex-shrink: 0;
}
.detail-value {
  color: var(--text);
}
.detail-link:hover {
  opacity: 0.6;
}

.status-available {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #4ade80;
}
.status-dot {
  width: 6px;
  height: 6px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-content: start;
}

.skill-category {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.skill-item {
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--text);
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--border);
}

/* Experience */
.experience-section {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.experience-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);
}

.exp-period {
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  padding-top: 0.2rem;
}

.exp-role {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
}
.exp-company {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}
.exp-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 480px;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .detail-item {
    flex-wrap: wrap;
    gap: 0.4rem 0.8rem;
  }

  .detail-label {
    width: auto;
    min-width: 70px;
  }

  .detail-value {
    overflow-wrap: anywhere;
  }

  .about-paragraph {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .skills-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
  }
  .experience-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1.75rem 0;
  }
  .exp-desc {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .experience-item {
    padding: 1.4rem 0;
  }

  .exp-role {
    font-size: 0.95rem;
  }

  .exp-company,
  .exp-desc {
    overflow-wrap: anywhere;
  }
}
</style>
