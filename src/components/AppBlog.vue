
<script>
export default {
    data() {
        return {
            arrArticle: [
                {
                    image: "src/assets/imgProject/avadabarbers-second-blog-320x202.jpg",
                    title: "Avada Barbers Now Open",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam."
                },
                {
                    image: "src/assets/imgProject/avadabarbers-choosing-blog-320x202.jpg",
                    title: "Choosing The Right Barber",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam."
                },
                {
                    image: "src/assets/imgProject/avadabarbers-ourservice-blog-320x202.jpg",
                    title: "Quick Service Guide",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam."
                },
            ],
        }
    },
}
</script>

<template>
    <div class="blogSection"></div>
    <div class="blogTitle">
        <p>TALES FROM THE BARBER SHOP</p>
        <h1>Recent Blog Posts</h1>
    </div>
    <div class="blogArticle text-center d-flex justify-content-around">
        <div class="cardBlog" v-for="article in arrArticle" :key="article.id">
            <img :src="article.image" alt="">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
        </div>
    </div>
    <div class=" d-flex justify-content-center pt-5" style="background-color: #F5F5F5;">
        <a href="">READ MORE FROM OUR BLOG</a>
    </div>
</template>


<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

a {
    text-decoration: none;
    font-weight: bold;
    display: flex;
    width: 450px;
    color: #be9359;
    border: 4px solid $color-btn;
    padding: 20px;
    padding-inline: 70px;
    font-size: 1.2rem;
    margin-bottom: 50px;

}

.blogArticle {
    background-color: #F5F5F5;
    height: 100%;
    padding-inline: 200px;
    padding-top: 50px;

    .cardBlog {

        height: 100%;
        width: calc((100% / 3) - 180px);

        img {
            height: 300px;
            width: 100%;
        }

        h2 {
            color: $color-btn;
            margin-top: 20px;
            font-size: 3rem;
            margin-bottom: 20px;
            font-family: $font-title;
            font-weight: bold;
        }

        p {
            color: $text-color;
            font-size: 1.2rem;
        }
    }

}

.blogTitle {
    text-align: center;
    background-color: #F5F5F5;


    p {
        padding-top: 50px;
        font-size: 1.2rem;
        @include titleSmall;
    }

    h1 {
        margin: 0;
        @include titleSection;
    }
}

.blogSection {
    background-image: url(/src/assets/imgProject/triangleWhite.svg);
    transform: rotate(180deg);
    border: white;
    background-color: #F5F5F5;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 120px;
}
</style>