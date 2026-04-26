<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";

const dotRef = ref<HTMLElement | null>(null);
const ringRef = ref<HTMLElement | null>(null);
const isHovering = ref(false);
const isCursorDisabled = ref(false);

let xDot: ReturnType<typeof gsap.quickTo>;
let yDot: ReturnType<typeof gsap.quickTo>;
let xRing: ReturnType<typeof gsap.quickTo>;
let yRing: ReturnType<typeof gsap.quickTo>;

const onMove = (e: MouseEvent) => {
  xDot(e.clientX);
  yDot(e.clientY);
  xRing(e.clientX);
  yRing(e.clientY);
};

const onEnter = () => {
  isHovering.value = true;
};
const onLeave = () => {
  isHovering.value = false;
};

onMounted(() => {
  // Disable custom cursor on touch devices and small viewports
  isCursorDisabled.value = window.matchMedia(
    "(pointer: coarse), (max-width: 768px)",
  ).matches;
  if (isCursorDisabled.value) return;

  if (!dotRef.value || !ringRef.value) return;

  xDot = gsap.quickTo(dotRef.value, "x", { duration: 0.1, ease: "power3" });
  yDot = gsap.quickTo(dotRef.value, "y", { duration: 0.1, ease: "power3" });
  xRing = gsap.quickTo(ringRef.value, "x", { duration: 0.5, ease: "power3" });
  yRing = gsap.quickTo(ringRef.value, "y", { duration: 0.5, ease: "power3" });

  window.addEventListener("mousemove", onMove);

  // Delegate hover detection
  document.addEventListener("mouseover", (e) => {
    if ((e.target as HTMLElement).closest("a, button, [data-cursor-hover]")) {
      onEnter();
    }
  });
  document.addEventListener("mouseout", (e) => {
    if ((e.target as HTMLElement).closest("a, button, [data-cursor-hover]")) {
      onLeave();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMove);
});
</script>

<template>
  <template v-if="!isCursorDisabled">
    <div id="cursor-dot" ref="dotRef" />
    <div
      id="cursor-ring"
      ref="ringRef"
      :class="{ 'is-hovering': isHovering }"
    />
  </template>
</template>
