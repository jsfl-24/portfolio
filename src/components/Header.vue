<template>
    <header class="header relative w-full h-[100px] bg-primary">
        <!-- Logo/Brand text - Top Left -->
        <div class="absolute top-[25px] left-[55px] text-[32px] z-10 font-jersey text-secondary">jsfl</div>
        
        <!-- Navigation Menu - Top Right -->
        <nav class="absolute top-[0px] right-[0px] z-10">
            <div @click="toggleMenu" class="cursor-pointer p-4" >
                <img src="../assets/menu.svg" alt="Menu" class="w-8 h-8" />
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toggleMenu() {
            // Navigation menu toggle logic
            console.log('Menu toggled');
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
</style>