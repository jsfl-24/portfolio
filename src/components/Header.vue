<template>
    <header class="header relative w-full h-[100px] bg-primary">
        <!-- Logo/Brand text - Top Left -->
        <div class="absolute top-[25px] left-[55px] text-[32px] z-10 font-jersey text-secondary">jsfl</div>

        <!-- Navigation Menu - Top Right with hover functionality -->
        <nav class="fixed top-[0px] right-[0px] z-50" @mouseenter="showMenu = true" @mouseleave="showMenu = false">
            <div @click="toggleMenu"
                class="cursor-pointer w-[100px] h-[100px] flex items-center justify-center transition-all duration-300"
                :class="showMenu ? 'bg-primary' : 'bg-secondary'">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <rect width="100" height="100" :fill="showMenu ? 'white' : 'black'" />
                    <line x1="43" y1="54" x2="67" y2="54" :stroke="showMenu ? 'black' : 'white'" stroke-width="2" />
                    <line x1="34" y1="44" x2="67" y2="44" :stroke="showMenu ? 'black' : 'white'" stroke-width="2" />
                </svg>
            </div>


            <!-- Overlay Menu Component - positioned at top-right -->
            <transition name="slide-left">
                <Menu v-if="showMenu" class="absolute top-0 right-[100px]" />
            </transition>
        </nav>
    </header>
    <!-- Arrow positioned directly below the SVG button -->
    <div class="absolute top-[890px] right-[0px] w-[100px] h-[40px] flex items-center justify-center cursor-pointer"
        @click="onArrowIconClick">
        <img src="../assets/Arrow 1.svg" alt="down arrow"
            class="w-[24px] h-[24px] transition-transform duration-300 transform hover:scale-110" />
    </div>

    <!-- Vertical line - 100px from right, FULL SCREEN HEIGHT -->
    <div class="fixed z-40"
        style="right: 100px; top: 0px; bottom: 0px; width: 2px; height: 100vh; background-color: black;"></div>
</template>

<script>
import Menu from './Menu.vue'

export default {
    name: 'Header',
    components: {
        Menu
    },
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
            console.log('Menu toggled', this.showMenu);
        },
        onArrowIconClick() {
            console.log('Arrow clicked');
            // Add scroll down or navigation logic here
        }
    }
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.3s ease;
}

.slide-left-enter-from {
    transform: translateX(100%);
}

.slide-left-leave-to {
    transform: translateX(100%);
}
</style>