<script>
import AppReviews from './AppReviews.vue';
import AppProducts from './AppProducts.vue';
import AppBlog from './AppBlog.vue';
import AppService from './AppService.vue';
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
        AppService,
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
    <AppService :ArrService="this.ArrService" />
    <AppProducts />
    <AppReviews />
    <AppBlog />
</template>
<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;



.mainInfo {
    margin-top: 8rem;
    margin-bottom: 8rem;

    h1 {
        @include titleSection;
    }

    h3 {
        color: $color-btn;
        font-size: 1.5rem;

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