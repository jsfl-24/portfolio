<template>
    <section class="relative h-[500px] bg-primary">
        <!-- Logo/Brand text - Top Left -->
        <div class="absolute top-[25px] left-[40px] text-[30px] z-10 font-jersey text-secondary">jsfl</div>

        <div class="flex items-center justify-center h-full">
            <!--svg line   -->
            <section class="absolute top-[90px] left-[-10px] right-[1354px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="502" viewBox="0 0 88 502" fill="none">
                    <path
                        d="M1 1C38.5052 32.3067 107.086 130.764 81.3684 274.14C55.6505 417.515 70.6526 485.12 81.3684 501"
                        stroke="black" />
                </svg>
            </section>
            <!-- Main content section -->
            <section class="relative h-[1200px] w-full bg-gray-100">
                <h1 class="absolute left-[84px] top-[630px] text-[180px] font-jersey text-secondary">
                    WELCOME<span style="color: red;">!</span>
                </h1>
            </section>
            <section class="absolute top-[620px] bottom-[174px] left-[885px] right-[122px]">
                <p class="text-[32px] leading-normal text-secondary"
                    style="font-family: 'Poppins', sans-serif; font-weight: 200;">
                    CRAFTING UNIQUE WEBSITES<br />
                    AND VISUALS — WHERE<br />
                    DESIGN MEETS DEVELOPMENT.
                </p>
            </section>
        </div>

        <!-- Horizontal line positioned closer to WELCOME text -->
        <div class="absolute left-[0px] right-[92px] top-[590px] h-[2px]"
            style="width: calc(100% - 100px); background-color: black;"></div>
    </section>

    <!-- Vertical line - 100px from right, FULL SCREEN HEIGHT -->
    <div class="fixed z-40"
        style="right: 100px; top: 0px; bottom: 0px; width: 2px; height: 100vh; background-color: black;"></div>

    <!-- Vertical line above arrow - 100px length, 50px above arrow -->
    <div class="fixed bottom-[45px] right-[50px] w-[2px] rotate-90 h-[100px] bg-secondary z-30"></div>

    <!-- Arrow positioned at bottom of page - 50px from right -->
    <div class="fixed bottom-[28px] right-[3px] w-[100px] h-[40px] flex items-center justify-center cursor-pointer z-30"
        @click="onArrowIconClick">
        <img src="../assets/Arrow 1.svg" alt="down arrow"
            class="w-[24px] h-[24px] transition-transform duration-300 transform hover:scale-110" />
    </div>
</template>

<script>
export default {
    name: 'Hero',
    methods: {
        onArrowIconClick() {
            console.log('Arrow clicked - scroll to top or next section');
            // Add scroll to top or next section logic here
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

/* Ensure font is available */
.font-jersey {
    font-family: 'Jersey 25', cursive;
}

.poppins-extralight {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
}
</style>