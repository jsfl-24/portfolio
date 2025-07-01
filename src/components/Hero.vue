<template>
    <section class="relative h-[500px] bg-primary">
        <div class="flex items-center justify-center h-full">
            <section class="relative h-[1200px] w-full bg-gray-100">
                <h1 class="absolute left-[84px] top-[478px] text-[180px] font-jersey text-secondary">
                    WELCOME<span style="color: red;">!</span>
                </h1>
            </section>
            <section class="absolute top-[-63px] left-[0px] right-[1354px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="502" viewBox="0 0 88 502" fill="none">
                    <path
                        d="M1 1C38.5052 32.3067 107.086 130.764 81.3684 274.14C55.6505 417.515 70.6526 485.12 81.3684 501"
                        stroke="black" />
                </svg>
            </section>
            <section class="absolute top-[500px] bottom-[174px] left-[885px] right-[122px]">
                <p class="text-[32px] leading-normal text-secondary"
                    style="font-family: 'Poppins', sans-serif; font-weight: 200;">
                    CRAFTING UNIQUE WEBSITES<br />
                    AND VISUALS — WHERE<br />
                    DESIGN MEETS DEVELOPMENT.
                </p>
            </section>
        </div>

        <!-- Horizontal line positioned closer to WELCOME text -->
        <div class="absolute left-0 right-[92px] top-[437px] h-[2px] z-20"
            style="width: calc(100% - 100px); background-color: black;"></div>
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

.poppins-extralight {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
}
</style>