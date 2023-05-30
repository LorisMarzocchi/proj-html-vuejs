
<script>
export default {
    data() {
        return {
            ArrReviws: [
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery6-200x200.png",
                    name: "John Doe",
                },
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery6-200x200.png",
                    name: "John Doe",
                },
                {

                    reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
                    image: "src/assets/imgProject/avadabarbers-trimcut-gallery6-200x200.png",
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
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.imageInfo {
    background-image: url(/src/assets/imgProject/triangleBlack.svg);
    height: 400px;

    img {
        width: 40%;
        height: 100%;
    }
}

.reviews {
    p {
        @include titleSmall
    }

    h1 {
        @include titleSection
    }
}

.featured {
    position: absolute;
    height: 450px;
    width: 850px;
    top: -50px;
    border: 1px solid red;
}

.rewContainer {
    padding-top: 500px;
    background-color: white;
    position: relative;
}
</style>