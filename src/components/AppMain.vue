<script>
import AppReviews from './AppReviews.vue';
import AppProducts from './AppProducts.vue';
import AppBlog from './AppBlog.vue';
export default {
    data() {
        return {
            ArrService: [
                {
                    image: "src/assets/imgProject/avadabarbers-trimcut-icon-before.png",
                    title: "Trim & Cut",
                    parag: "Avada Barbers are expert in the lickety split and trim and hair cut. Quick but careful and ridiculously good looking."
                },
                {
                    image: "src/assets/imgProject/avadabarbers-washndry-icon.png",
                    title: "Wash & Dry",
                    parag: "Take a seat in our fine leather chairs, lean back us lather you a fresch head in a luxurios fashion"
                },
                {
                    image: "src/assets/imgProject/avadabarbers-beardtrim-icon.png",
                    title: "Beard Tidy",
                    parag: "Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy service from Avada Barbers. "
                },
            ],
        };

    },
    components: {
        AppProducts,
        AppReviews,
        AppBlog,
    }
}

</script>

<template>
    <div class="mainInfo text-center text-light">
        <h3>AWARD WINNING</h3>
        <h1 class="mt-4 mb-5">Pro Barbers</h1>
        <a href="">MEET YOUR NEW BARBER</a>
    </div>
    <div class="service text-center"></div>
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
    <AppProducts />
    <AppReviews />
    <AppBlog />
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

.mainInfo {
    margin-top: 8rem;
    margin-bottom: 8rem;

    h1 {
        @include titleSection;
    }

    h3 {
        color: $color-btn;

    }

    a {

        @include linkBtn;

        &:hover {
            color: white;
            border: 4px solid white;
        }

    }
}

.service {
    background-image: url(/src/assets/imgProject/triangle.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100px;
    padding-bottom: 170px;

}
</style>