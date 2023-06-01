
<script>
export default {
    data() {
        return {
            ArrReviws: [
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery6-200x200.jpg",
                    name: "John Doe",
                },
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery7-200x201.jpg",
                    name: "Pete Jones",
                },
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery3-200x201.jpg",
                    name: "Mark Wilson",
                },

            ],
        }
    },
}
</script>
<template>
    <div class="rewContainer d-flex justify-content-center">
        <div class="featured">
            <div class="imageInfo">
                <img src="../assets/imgProject/shaving_butter-200x200.png" alt="">

            </div>
            <div class="info">
                <p class="infoTitleSmall">THIS MONTHS FEATURED PRODUCT</p>
                <h1>Shaving Butter</h1>
                <p class="infoParag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto sit ullam
                    sapiente quod
                    distinctio deserunt amet. Minima, possimus porro quibusdam alias, voluptas omnis id quam deserunt nemo,
                    ipsum neque.</p>
                <a href="">BUY NOW</a>
            </div>

        </div>
    </div>
    <div class=" reviews text-center bg-white">

        <p>WHAT PEOPLE SAY</p>
        <h1>Reviews</h1>
        <div class=" cardRewContainer d-flex justify-content-around">
            <div class="peopleRew" v-for="reviews in ArrReviws" :key="reviews.id">
                <p>{{ reviews.reviews }}</p>
                <img class=" rounded-circle" :src="reviews.image" alt="">
                <h3 class="mt-2">{{ reviews.name }}</h3>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.info {
    width: 50%;

    .infoTitleSmall {
        @include titleSmall;
        padding-top: 40px;
    }

    h1 {
        @include titleSection;
    }

    .infoParag {
        color: $text-color;
        margin-bottom: 70px;
    }

    a {
        @include linkBtn;
        padding-inline: 45px;

        &:hover {
            color: white;
            border: 4px solid white;
        }
    }


}

.cardRewContainer {
    margin-top: 3rem;
    max-width: 1300px;
    margin: auto;
    background-color: white;

}

.peopleRew {

    height: 100%;
    width: calc(100% / 3);
    margin-inline: 50px;

    p {
        color: $text-color !important;
    }

    h3 {
        color: $color-btn;
    }

}

.imageInfo {
    background-image: url(/src/assets/imgProject/avadabarbers-cta-background.jpg);
    background-size: 100%;
    background-repeat: no-repeat;

    margin-right: 70px;

    img {
        width: 90%;
        height: 100%;
    }
}

.reviews {
    padding-top: 100px;
    padding-bottom: 100px;


    p {
        @include titleSmall;
        font-size: 1.2rem;
    }

    h1 {
        @include titleSection;
        margin-bottom: 50px;
    }
}

.featured {
    position: absolute;
    height: 450px;
    width: 1200px;
    top: -50px;
    border-top: 5px solid $color-btn;
    display: flex;
    background-color: $bg-color;
}

.rewContainer {
    padding-top: 450px;
    background-color: white;
    position: relative;
}
</style>