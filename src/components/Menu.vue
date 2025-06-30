<template>
    <div class="fixed top-0 right-0 bg-secondary w-[360px] h-[512px] z-40 text-left text-xl text-primary font-jersey">

        <!-- Menu Items - repositioned to start from top -->
        <div class="absolute top-[0px] left-[0px] bg-primary border-secondary border-solid border-b-[1px] box-border w-[260px] h-[103px]" />
        <div class="absolute top-[103px] left-[0px] bg-primary border-secondary border-solid border-b-[1px] box-border w-[260px] h-[103px]" />
        <div class="absolute top-[206px] left-[0px] bg-primary border-secondary border-solid border-b-[1px] box-border w-[260px] h-[103px]" />
        <div class="absolute top-[309px] left-[0px] bg-primary border-secondary border-solid border-b-[1px] box-border w-[260px] h-[103px]" />

        <!-- Journey -->
        <div class="absolute top-[34px] left-[23px] w-[164px] h-[25px] cursor-pointer text-secondary"
            @click="onMenuItemClick('journey')">
            <div class="absolute top-[5px] left-[105px]">journey</div>
            <div class="absolute top-[0px] left-[0px] text-2xl">J.</div>
        </div>

        <!-- Skills -->
        <div class="absolute top-[137px] left-[23px] w-[145px] h-[25px] cursor-pointer text-secondary"
            @click="onMenuItemClick('skills')">
            <div class="absolute top-[5px] left-[105px]">skills</div>
            <div class="absolute top-[0px] left-[0px] text-2xl">S.</div>
        </div>

        <!-- Featured -->
        <div class="absolute top-[240px] left-[23px] w-[171px] h-[25px] cursor-pointer text-secondary"
            @click="onMenuItemClick('featured')">
            <div class="absolute top-[5px] left-[105px]">featured</div>
            <div class="absolute top-[0px] left-[0px] text-2xl">F.</div>
        </div>

        <!-- Links -->
        <div class="absolute top-[343px] left-[23px] w-[141px] h-[25px] cursor-pointer text-secondary"
            @click="onMenuItemClick('links')">
            <div class="absolute top-[5px] left-[105px]">links</div>
            <div class="absolute top-[0px] left-[0px] text-2xl">L.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    methods: {
        onMenuItemClick(section) {
            console.log('Navigate to:', section);
            // Add navigation logic here
        }
    }
}
</script>

<style></style>