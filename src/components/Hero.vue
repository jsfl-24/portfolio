<template>
    <section class="relative h-screen bg-primary overflow-x-hidden">
        <!-- Logo/Brand text - Top Left -->
        <div
            class="absolute top-[25px] left-[55px] md:left-[55px] sm:left-[20px] text-[32px] md:text-[32px] sm:text-[24px] z-10 font-jersey text-secondary">
            jsfl</div>

        <div class="flex items-center justify-center h-full">
            <!--svg line   -->
            <section
                class="absolute top-[90px] left-[-10px] md:left-[-10px] sm:left-[-20px] right-[1354px] md:block sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="502" viewBox="0 0 88 502" fill="none"
                    class="md:w-[88px] md:h-[502px] sm:w-[50px] sm:h-[300px]">
                    <path
                        d="M1 1C38.5052 32.3067 107.086 130.764 81.3684 274.14C55.6505 417.515 70.6526 485.12 81.3684 501"
                        stroke="black" />
                </svg>
            </section>
            <!-- Main content section -->
            <section>
                <!-- Tagline above WELCOME -->
                <div class="absolute left-[92px] md:left-[92px] sm:left-[20px] top-[448px] md:top-[448px] sm:top-[200px] bottom-[536px] text-secondary text-[20px] md:text-[20px] sm:text-[14px]"
                    style="font-family: 'Poppins', sans-serif; font-weight: 200;">
                    LETS DESIGN, DEVELOP, RELAX;
                </div>

                <h1
                    class="absolute left-[84px] md:left-[84px] sm:left-[20px] top-[280px] md:top-[280px] sm:top-[120px] text-[180px] md:text-[180px] sm:text-[60px] xs:text-[40px] font-jersey text-secondary">
                    WELCOME<span style="color: red;">!</span>
                </h1>
            </section>
            <section
                class="absolute top-[620px] md:top-[620px] sm:top-[300px] bottom-[174px] left-[885px] md:left-[885px] sm:left-[20px] right-[122px] md:right-[122px] sm:right-[20px]">
                <p class="text-[32px] md:text-[32px] sm:text-[18px] xs:text-[16px] leading-normal text-secondary"
                    style="font-family: 'Poppins', sans-serif; font-weight: 200;">
                    CRAFTING UNIQUE WEBSITES<br />
                    AND VISUALS — WHERE<br />
                    DESIGN MEETS DEVELOPMENT.
                </p>
            </section>
        </div>

        <!-- Horizontal line positioned closer to WELCOME text -->
        <div class="absolute left-[0px] right-[92px] md:right-[92px] sm:right-[20px] top-[590px] md:top-[590px] sm:top-[260px] h-[2px]"
            style="width: calc(100% - 100px); background-color: black;"></div>
    </section>

    <!-- Vertical line - 100px from right, FULL SCREEN HEIGHT -->
    <div class="fixed z-40 md:block sm:hidden"
        style="right: 100px; top: 0px; bottom: 0px; width: 2px; height: 100vh; background-color: black;"></div>

    <!-- Vertical line above arrow - 100px length, 50px above arrow -->
    <div
        class="fixed bottom-[45px] right-[50px] md:right-[50px] sm:right-[20px] w-[2px] h-[100px] md:h-[100px] sm:h-[50px] rotate-90 bg-secondary z-30">
    </div>

    <!-- Arrow positioned at bottom of page - 50px from right -->
    <div class="fixed bottom-[20px] right-[0px] md:right-[0px] sm:right-[20px] w-[100px] md:w-[100px] sm:w-[60px] h-[40px] md:h-[40px] sm:h-[30px] flex items-center justify-center cursor-pointer z-30"
        @click="onArrowIconClick">
        <img src="../assets/Arrow 1.svg" alt="down arrow"
            class="w-[24px] h-[24px] md:w-[24px] md:h-[24px] sm:w-[18px] sm:h-[18px] transition-transform duration-300 transform hover:scale-110" />
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'Hero',
    setup() {
        const scrollToAbout = inject('scrollToAbout')

        const onArrowIconClick = () => {
            console.log('Arrow clicked - scrolling to About section');
            if (scrollToAbout) {
                scrollToAbout()
            }
        }

        return {
            onArrowIconClick
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

/* Custom responsive breakpoints if needed */
@media (max-width: 480px) {
    .xs\:text-\[40px\] {
        font-size: 40px;
    }

    .xs\:text-\[16px\] {
        font-size: 16px;
    }
}
</style>