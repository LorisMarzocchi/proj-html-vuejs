
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
                    title: "Scissors",
                    price: "$ 85.00"

                },
                {
                    image: "src/assets/imgProject/hot_oil_dark-400x400.png",
                    title: "Hot Oil",
                    price: "$ 15.00"

                },
                {
                    image: "src/assets/imgProject/straight_razor_dark-400x400.png",
                    title: "Straight Razor",
                    price: "$ 30.00"

                },

            ],
        }
    },

}
</script>
<template>
    <div class="service"></div>
    <div class="container-fluid background-area">

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
        <div class="linkShop text-center d-flex justify-content-center ">
    
            <a href="#">SHOP OUR PRODUCT RANGE</a>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.cardDescription {
    width: 25%;

    h3 {
        font-weight: bold;
    }
}


.background-area {
    background-image: url(/src/assets/imgProject/avadabarbers-reviewsbackground.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.cardDescription {
    width: 25%;

    h3 {
        font-weight: bold;
    }
}

.linkShop {
 

    a {
        @include linkBtn;
        margin-bottom: 150px;

        &:hover {
            color: white;
            border: 4px solid white;
        }
    }
}

.service {
    background-image: url(/src/assets/imgProject/triangleBlack.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100px;
    background-color: white;
    // margin-bottom: 50px;
}

.cardProduct {
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
        @include titleSmall;
        font-size: 1.3rem;
    }

    h1 {
        @include titleSection
    }
}
</style>