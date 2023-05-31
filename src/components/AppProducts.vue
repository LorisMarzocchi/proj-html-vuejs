
<script>
export default {
    data() {
        return {
            ArrProduct: [
                {
                    image: "src/assets/imgProject/brush_dark-400x400.png",
                    title: "Brush",
                    price: "$ 15.00"

                },
                {
                    image: "src/assets/imgProject/scissors-400x400.png",
                    title: "Brush",
                    price: "$ 15.00"

                },
                {
                    image: "src/assets/imgProject/hot_oil_dark-400x400.png",
                    title: "Brush",
                    price: "$ 15.00"

                },
                {
                    image: "src/assets/imgProject/straight_razor_dark-400x400.png",
                    title: "Brush",
                    price: "$ 15.00"

                },

            ],
        }
    },

}
</script>
<template>
    <div class="service"></div>
    <div class="products text-center">
        <p>WE HAVE YOU COVERED</p>
        <h1>Avada Grooming Products</h1>
    </div>
    <div class="cardProduct d-flex justify-content-around">
        <div class="cardDescription text-center" v-for="products in ArrProduct" :key="products.id">
            <img :src="products.image" alt="">
            <h3 class="">{{ products.title }}</h3>
            <p>{{ products.price }}</p>
        </div>

    </div>
    <div class="text-center d-flex justify-content-center mt-5">

        <a href="">SHOP OUR PRODUCT RANGE</a>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.cardDescription {
    width: 25%;
}

a {

    text-decoration: none;
    display: flex;
    width: 450px;
    color: #be9359;
    border: 4px solid $color-btn;
    padding: 20px;
    padding-inline: 80px;
    font-size: 1.2rem;
    margin-bottom: 150px;
    margin-top: 120px;
}

.service {
    background-image: url(/src/assets/imgProject/triangleBlack.svg);
    background-image: $bg-color;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100px;
    background-color: white;

}

.cardProduct {
    background-image: url(/src/assets/imgProject/avadabarbers-reviewsbackground.jpg);
    background-size: cover;
    width: 100%;
    height: 500px;
    margin: auto;
    color: white;
    padding-inline: 150px;
    margin-top: 60px;


    img {
        width: 100%;
    }

    h3 {
        color: $color-btn;
        font-family: $font-title;
        font-size: 3rem;
    }

    p {
        color: $color-btn;
        font-family: $font-title;
        font-size: 1.2rem;
        text-align: center;


    }
}

.products {


    p {
        @include titleSmall
    }

    h1 {
        @include titleSection
    }

}
</style>