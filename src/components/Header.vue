<template>
    <header class="header relative w-full h-[100px] bg-primary">
        <!-- Logo/Brand text - Top Left -->
        <div class="absolute top-[25px] left-[55px] text-[32px] z-10 font-jersey text-secondary">jsfl</div>

        <!-- Navigation Menu - Top Right (moved to top edge) -->
        <nav class="fixed top-[0px] right-[0px] z-50">
            <div @click="toggleMenu"
                class="cursor-pointer w-[100px] h-[100px] bg-secondary flex items-center justify-center">
                <img src="../assets/menu.svg" alt="Menu" class="w-8 h-8" />
            </div>
        </nav>
    </header>

    <!-- Vertical line - 106px from right, FULL SCREEN HEIGHT -->
    <div class="fixed z-40"
        style="right: 100px; top: 0px; bottom: 0px; width: 2px; height: 100vh; background-color: black;"></div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toggleMenu() {
            console.log('Menu toggled');
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
</style>