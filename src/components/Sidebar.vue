<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { useTheme } from "../composables/useTheme";
import portfolioData from "../data/portfolio.json";
import { ref } from "vue";

const { isDark, toggleTheme } = useTheme();
const data = portfolioData;
const router = useRouter();

const isMenuOpen = ref(false);

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Works", to: "/works" },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

// Close on route change
router.afterEach(() => {
  isMenuOpen.value = false;
});
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <!-- Logo / Name -->
      <RouterLink to="/" class="sidebar-logo" @click="closeMenu">
        <span class="logo-text">{{ data.meta.name.split(" ")[0] }}</span>
      </RouterLink>

      <!-- Navigation (desktop) -->
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
      <button
        class="theme-toggle"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <span v-if="isDark">☀</span>
        <span v-else>☽</span>
      </button>

      <!-- Copyright -->
      <p class="sidebar-footer">© {{ new Date().getFullYear() }}</p>
    </div>

    <!-- ── Mobile: right side controls ─────────── -->
    <div class="mobile-controls">
      <button
        class="theme-toggle-mobile"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <span v-if="isDark">☀</span>
        <span v-else>☽</span>
      </button>
      <!-- Hamburger -->
      <button
        class="hamburger"
        :class="{ 'hamburger--open': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="ham-line" />
        <span class="ham-line" />
        <span class="ham-line" />
      </button>
    </div>
  </aside>

  <!-- ── Mobile Drawer Backdrop ─────────────────── -->
  <Transition name="backdrop">
    <div v-if="isMenuOpen" class="drawer-backdrop" @click="closeMenu" />
  </Transition>

  <!-- ── Mobile Drawer ───────────────────────────── -->
  <Transition name="drawer">
    <nav v-if="isMenuOpen" class="mobile-drawer">
      <!-- Drawer header -->
      <div class="drawer-header">
        <span class="logo-text">{{ data.meta.name.split(" ")[0] }}</span>
        <button class="drawer-close" @click="closeMenu" aria-label="Close menu">
          ✕
        </button>
      </div>

      <!-- Nav links -->
      <div class="drawer-links">
        <RouterLink
          v-for="(link, i) in navLinks"
          :key="link.to"
          :to="link.to"
          class="drawer-link"
          active-class="drawer-link--active"
          :style="`transition-delay: ${0.05 + i * 0.06}s`"
        >
          <span class="drawer-link-num">0{{ i + 1 }}</span>
          <span class="drawer-link-label">{{ link.label }}</span>
          <span class="drawer-link-arrow">→</span>
        </RouterLink>
      </div>

      <!-- Social + footer -->
      <div class="drawer-footer">
        <div class="drawer-social">
          <a
            v-for="s in data.social"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="drawer-social-link"
          >
            {{ s.label }}
          </a>
        </div>
        <p class="drawer-copy">
          © {{ new Date().getFullYear() }} {{ data.meta.name }}
        </p>
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
/* ─── Desktop sidebar ─────────────────────────────── */
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
.logo-text:hover {
  opacity: 0.6;
}

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
  content: "";
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
.social-link:hover {
  color: var(--text);
}

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
  cursor: pointer;
  transition:
    border-color 0.25s,
    color 0.25s;
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

/* ─── Mobile controls (hidden on desktop) ─────────── */
.mobile-controls {
  display: none;
}

/* ─── Hamburger button ─────────────────────────────── */
.hamburger {
  background: none;
  border: none;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 201;
}

.ham-line {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
  border-radius: 2px;
  transform-origin: center;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease;
}

.hamburger--open .ham-line:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.hamburger--open .ham-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger--open .ham-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.theme-toggle-mobile {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    border-color 0.25s,
    color 0.25s;
}
.theme-toggle-mobile:hover {
  border-color: var(--text);
  color: var(--text);
}

/* ─── Drawer backdrop ──────────────────────────────── */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 299;
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* ─── Mobile Drawer ────────────────────────────────── */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 88vw);
  background: var(--bg);
  border-left: 1px solid var(--border);
  z-index: 300;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 2.5rem;
  overflow-y: auto;
}

/* Drawer slide transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.drawer-close {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
}
.drawer-close:hover {
  color: var(--text);
  border-color: var(--text);
}

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: var(--text-muted);
  transition:
    color 0.25s ease,
    padding-left 0.3s ease;
}

.drawer-link:hover,
.drawer-link--active {
  color: var(--text);
  padding-left: 0.5rem;
}

.drawer-link-num {
  font-size: 0.62rem;
  font-family: "JetBrains Mono", monospace;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  flex-shrink: 0;
}

.drawer-link-label {
  font-size: 1.35rem;
  font-weight: 200;
  letter-spacing: -0.02em;
  flex: 1;
}

.drawer-link-arrow {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}
.drawer-link:hover .drawer-link-arrow {
  transform: translateX(4px);
}

.drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;
}

.drawer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.drawer-social-link {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.2s;
}
.drawer-social-link:hover {
  color: var(--text);
}

.drawer-copy {
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

/* ─── Responsive: Show hamburger on mobile ─────────── */
@media (max-width: 768px) {
  .sidebar-top {
    flex: 1;
    gap: 0;
    min-width: 0;
  }

  .sidebar-bottom {
    display: none;
  }

  .sidebar-logo {
    min-width: 0;
  }

  .logo-text {
    font-size: 0.95rem;
  }

  .sidebar-nav,
  .sidebar-social,
  .sidebar-footer,
  .theme-toggle {
    display: none;
  }

  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: auto;
    flex-shrink: 0;
  }

  /* Hide mobile drawer on desktop */
  .mobile-drawer {
    display: flex;
  }
}

@media (min-width: 769px) {
  .mobile-drawer,
  .drawer-backdrop {
    display: none !important;
  }
  .hamburger,
  .theme-toggle-mobile {
    display: none;
  }
}
</style>
