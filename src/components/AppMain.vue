<script></script>

<template>
    <div class="mainInfo text-center text-light">
        <h3>AWARD WINNING</h3>
        <h1 class="mt-4 mb-5">Pro Barbers</h1>
        <a href="">MEET YOUR NEW BARBER</a>
    </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.mainInfo {
    margin-top: 8rem;

    h1 {
        font-weight: bold;
        font-size: 5rem;
        color: $text-color;
    }

    h3 {
        color: $color-btn;
    }

    a {

        text-decoration: none;
        height: 80px;
        width: 350px;
        color: #be9359;
        border: 4px solid $color-btn;
        text-align: center;
        padding: 20px;
        font-size: 1.5rem;
    }
}
</style>