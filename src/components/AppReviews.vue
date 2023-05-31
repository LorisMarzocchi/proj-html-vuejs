
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
                    name: "John Doe",
                },
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery3-200x201.jpg",
                    name: "John Doe",
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
                <p></p>
                <h1></h1>
                <p></p>
                <a href=""></a>
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

.cardRewContainer {
    margin-top: 3rem;
    max-width: 1200px;
    margin: auto;
    background-color: white;

}

.peopleRew {

    height: 100%;
    width: calc(100% / 3);
    margin-inline: 20px;

    p {
        color: $text-color !important;
    }

    h3 {
        color: $color-btn;
    }

}

.imageInfo {
    background-image: url(/src/assets/imgProject/avadabarbers-cta-background.jpg);
    background-size: 45% 100%;
    background-repeat: no-repeat;
    height: 400px;

    img {
        width: 45%;
        height: 100%;
    }
}

.reviews {
    height: 750px;


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
    height: 400px;
    width: 850px;
    top: -50px;
    border: 1px solid red;
}

.rewContainer {
    padding-top: 400px;
    background-color: white;
    position: relative;
}
</style>