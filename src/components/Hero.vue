<template>
    <section class="relative h-[500px] bg-primary">
        <div class="flex items-center justify-center h-full">
            <section class="relative h-[1200px] w-full bg-gray-100">
                <h1 class="absolute left-[84px] top-[478px] text-[180px] font-jersey text-secondary">
                    WELCOME<span style="color: red;">!</span>
                </h1>
                <!-- Full width line positioning -->
                <div class="absolute left-0 right-0 top-[787px] h-[2px] bg-secondary w-full"></div>
            </section>
            <section class="absolute top-[-63px] left-[0px] right-[1354px]">
                <svg width="87" height="502" viewBox="0 0 87 502" fill="none" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path
                        d="M0.5 1C38.0052 32.3067 106.586 130.764 80.8684 274.14C55.1505 417.515 70.1526 485.12 80.8684 501"
                        stroke="black"></path>
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