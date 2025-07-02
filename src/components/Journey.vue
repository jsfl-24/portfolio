<template>
    <section class="relative h-screen bg-primary">
        <!-- Left Side Brand Panel -->
        <div class="absolute w-[55px] h-[200px] bg-secondary left-[-8px] right-[1365px] top-[412px] font-jersey bottom-[412px]">
            <div class="absolute top-[20px] left-[20px] right-[19px] bottom-[156px]" style="color: red;">J</div>
            <div
                class="absolute top-[148px] left-[14px] right-[24px] bottom-[20px] font-jersey text-[20px] text-primary rotate-270">
                journey</div>
        </div>

        <!-- Journey Content -->
        <div class="absolute top-[100px] left-[160px] right-[200px]">
            <h2 class="text-[70px] font-jersey text-secondary mb-8">My <span style="color: red; text-decoration: underline;">Journey</span></h2>
            <div class="space-y-8">
                <!-- Journey Item 1 -->
                <div class="flex items-start space-x-6">
                    <div class="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                        <h3 class="text-2xl font-jersey text-secondary mb-2">2020 <span style="color: red;">></span> Started Web Development</h3>
                        <p class="text-lg font-poppins text-secondary leading-relaxed">
                            Began my journey into web development, learning HTML, CSS, and JavaScript fundamentals.
                            Discovered my passion for creating beautiful and functional user interfaces.
                        </p>
                    </div>
                </div>

                <!-- Journey Item 2 -->
                <div class="flex items-start space-x-6">
                    <div class="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                        <h3 class="text-2xl font-jersey text-secondary mb-2">2021 <span style="color: red;">></span> Frontend Frameworks</h3>
                        <p class="text-lg font-poppins text-secondary leading-relaxed">
                            Dove deep into modern frontend frameworks like Vue.js and React.
                            Started building more complex applications and understanding component-based architecture.
                        </p>
                    </div>
                </div>

                <!-- Journey Item 3 -->
                <div class="flex items-start space-x-6">
                    <div class="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                        <h3 class="text-2xl font-jersey text-secondary mb-2">2022 <span style="color: red;">></span> Full Stack Development</h3>
                        <p class="text-lg font-poppins text-secondary leading-relaxed">
                            Expanded into backend technologies, learning Node.js, databases, and API development.
                            Started creating end-to-end web applications with modern tools and frameworks.
                        </p>
                    </div>
                </div>

                <!-- Journey Item 4 -->
                <div class="flex items-start space-x-6">
                    <div class="w-4 h-4 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                        <h3 class="text-2xl font-jersey text-secondary mb-2">2023 <span style="color: red;">></span> Present</h3>
                        <p class="text-lg font-poppins text-secondary leading-relaxed">
                            Currently working on portfolio projects and exploring new technologies.
                            Focusing on creating unique, user-centered design solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'Journey',
    methods: {
        onArrowClick() {
            console.log('Journey arrow clicked');
            // Add scroll to next section logic here
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&family=Poppins:wght@200;400;600&display=swap');

.font-jersey {
    font-family: 'Jersey 25', cursive;
}

.font-poppins {
    font-family: 'Poppins', sans-serif;
}


</style>