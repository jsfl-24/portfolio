<template>
    <div class="menu">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
.menu {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1000;
}
.menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu li {
    margin: 8px 0;
}
.menu a {
    color: #333;
    text-decoration: none;
}
.menu a:hover {
    text-decoration: underline;
}
</style>