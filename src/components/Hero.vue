<template>
    <section class="hero relative w-full h-screen" style="background-color:     white; min-height: 100vh;">
        <div class="absolute top-[40px] left-[55px] text-[32px] z-10 text-white" style="font-family: 'Jersey 25', cursive;">jsfl</div>
        
        
        <!-- Top Right Box with hamburger menu -->
        <div class="absolute top-0 left-0 w-[100px] h-[100px] z-20 flex flex-col justify-center items-center gap-2" style="background-color: black;">
            <div class="w-8 h-0.5" style="background-color: black;"></div>
            <div class="w-8 h-0.5" style="background-color: white;"></div>
        </div>
        
        <div class="absolute bottom-0 left-0 w-[100px] h-[100px] z-20" style="background-color: black;"></div>
        <div class="absolute bottom-0 right-0 w-[100px] h-[100px] z-20" style="background-color: black;"></div>
    </section>
</template>


<script>
export default {
    name: 'Hero'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
</style>