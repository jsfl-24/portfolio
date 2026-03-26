<script setup lang="ts">
import { RouterLink, useLink } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import portfolioData from '../data/portfolio.json'

const { isDark, toggleTheme } = useTheme()
const data = portfolioData

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Works', to: '/works' },
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <!-- Logo / Name -->
      <RouterLink to="/" class="sidebar-logo">
        <span class="logo-text">{{ data.meta.name.split(' ')[0] }}</span>
      </RouterLink>

      <!-- Navigation -->
      <nav class="sidebar-nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>

    <div class="sidebar-bottom">
      <!-- Social Links -->
      <div class="sidebar-social">
        <a
          v-for="s in data.social"
          :key="s.label"
          :href="s.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          {{ s.label }}
        </a>
      </div>

      <!-- Theme Toggle -->
      <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <span v-if="isDark">☀</span>
        <span v-else>☽</span>
      </button>

      <!-- Copyright -->
      <p class="sidebar-footer">© {{ new Date().getFullYear() }}</p>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-top {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.sidebar-logo {
  display: block;
}
.logo-text {
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text);
  transition: opacity 0.2s;
}
.logo-text:hover { opacity: 0.6; }

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-link {
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 0.35rem 0;
  position: relative;
  transition: color 0.25s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: var(--text);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover,
.nav-link--active {
  color: var(--text);
}
.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-social {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.social-link {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.25s;
}
.social-link:hover { color: var(--text); }

.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  cursor: none;
  transition: border-color 0.25s, color 0.25s;
}
.theme-toggle:hover {
  border-color: var(--text);
  color: var(--text);
}

.sidebar-footer {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}
</style>
