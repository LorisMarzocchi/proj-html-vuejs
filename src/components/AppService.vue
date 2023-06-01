
<script>
export default {
    props: {
        ArrService: Array,
    }
}
</script>
<template>
    <div class="infoContainer text-center bg-white">

        <p class="titleSmall fs-5 fw-bold">MENS GROOMING</p>
        <h1>Services</h1>
        <div class="serviceContainer d-flex justify-content-around">
            <div v-for="service in ArrService" :key="service.id" class="cardService align-items-center">
                <img :src="service.image" alt="">
                <h3 class="mt-4">{{ service.title }}</h3>
                <p class="serviceInfo">{{ service.parag }}</p>

            </div>

        </div>
        <a href="">READ ABOUT OUR SERVICES</a>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.infoContainer {
    // height: 700px;
    padding-bottom: 150px;

    a {
        @include linkBtn;
        font-weight: bold;

        &:hover {
            color: black;
            border: 4px solid black;
        }
    }

    .titleSmall {
        color: $color-btn;
        font-weight: bold;

    }

    h1 {
        @include titleSection;
        margin-bottom: 90px;
    }
}

.cardService {
    padding-inline: 35px;
    font-size: 1.3rem;


    img {
        height: 150px;
        width: 100px;
    }

    h3 {
        color: $color-btn;
        font-weight: bold;
        margin-top: 20px;


    }

    .serviceInfo {
        color: $text-color;
        margin-top: 20px;

    }


}

.serviceContainer {
    max-width: 1200px;
    margin: auto;
    margin-bottom: 80px;
    margin-top: 40px;

    h3 {
        font-family: $font-title;
        font-size: 2rem;
    }



}
</style>