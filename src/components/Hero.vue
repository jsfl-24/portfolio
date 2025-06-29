<template>
    <section class="relative h-[500px] bg-primary">
        <!-- Your hero content here -->
        <div class="flex items-center justify-center h-full">
            <section class="relative h-[1200px] w-full bg-gray-100">
                <h1 class="absolute left-[84px] top-[478px] text-[180px] font-jersey text-secondary">
                    WELCOME<span style="color: red;">!</span>
                </h1>
                <!-- Full width line positioning -->
                <div class="absolute left-0 right-0 top-[787px] h-[2px] bg-secondary w-full"></div>
            </section>
        
        </div>
        </section>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

/* Ensure font is available */
.font-jersey {
    font-family: 'Jersey 25', cursive;
}
</style>