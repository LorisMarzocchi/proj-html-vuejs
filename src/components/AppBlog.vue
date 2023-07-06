<script>
export default {
  data() {
    return {
        activeIndex: 0,
        showLeftButton: false,
        showRightButton: true,
        
      arrArticle: [
        {
          image: "src/assets/imgProject/avadabarbers-second-blog-320x202.jpg",
          title: "Avada Barbers Now Open",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
        },
        {
          image: "src/assets/imgProject/avadabarbers-choosing-blog-320x202.jpg",
          title: "Choosing The Right Barber",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
        },
        {
          image:
            "src/assets/imgProject/avadabarbers-ourservice-blog-320x202.jpg",
          title: "Quick Service Guide",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
        },
        {
          image: "src/assets/imgProject/hot_oil_dark-200x200.png",
          title: "Hot Oil Hair Treatments",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
        },
        {
          image: "src/assets/imgProject/straight_razor_dark-200x200.png",
          title: "Mastering the Straight Razor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
        },
        {
          image: "src/assets/imgProject/scissors-200x200.png",
          title: "The Art of Scissor Cuts",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dolor blanditiis totam aliquam doloribus sed, voluptatum deserunt, ab possimus atque corrupti, earum vitae ipsa nulla ratione pariatur. Enim, laboriosam.",
        },
      ],
    };
  },
  methods: {
        showPrevSlide() {
            this.activeIndex -= 3;
            if (this.activeIndex < 0) {
                this.activeIndex = 0;
            }
            this.showRightButton = true;
            this.showLeftButton = this.activeIndex !== 0;
        },
        showNextSlide() {
            this.activeIndex += 3;
            if (this.activeIndex >= this.arrArticle.length) {
                this.activeIndex = this.arrArticle.length - 3;
            }
            this.showLeftButton = true;
            this.showRightButton = this.activeIndex < this.arrArticle.length - 3;
        },
    },
};
</script>

<template>
  <div class="blogSection"></div>
  <div class="blogTitle">
    <p>TALES FROM THE BARBER SHOP</p>
    <h1>Recent Blog Posts</h1>
  </div>
  <div class="blogArticle text-center d-flex justify-content-around">
    <div
      class="cardBlog"
      v-for="(article, index) in this.arrArticle"
      :key="article.id"
      :class="{ active: index >= activeIndex && index < activeIndex + 3 }"
    >
      <img :src="article.image" alt="" />

      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </div>
    <!-- <div class="containerbtn d-flex justify-content-around"> -->
    <button v-if="showLeftButton" @click="showPrevSlide" class="btn-back align-self-center"><i class="fa-solid fa-chevron-left"></i></button>
    <button v-if="showRightButton" @click="showNextSlide" class="btn-forward align-self-center"><i class="fa-solid fa-chevron-right"></i></button>

    <!-- </div> -->
  </div>
  <div class="btnBlogContainer d-flex justify-content-center">
    <span>READ MORE FROM OUR BLOG</span>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;
button {
  &:hover {
    color: $color-btn;
  }
}
.btn-forward {
  position: absolute;
  background-color: #f5f5f5;
  border: 0;
  top: 170px;
  right: 50px;
  height: 150px;
  font-size: 4rem;
  color: #121315;
}
.btn-back {
  position: absolute;
  background-color: #f5f5f5;
  border: 0;
  top: 170px;
  left: 50px;
  height: 150px;
  font-size: 4rem;
  color: #121315;
}

.btnBlogContainer {
  background-color: #f5f5f5;
  padding-bottom: 150px;
  padding-top: 70px;
}

span {
  @include linkBtn;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
}

.blogArticle {
  background-color: #f5f5f5;
  position: relative;
  
  padding-inline: 100px;
  padding-top: 50px;

  .cardBlog {
    display: none;

    height: 100%;

    width: calc((100% / 3) - 50px);

    img {
      
      width: 350px; 
      height: 300px; 
      object-fit: contain;
      aspect-ratio: 1/1;
    }

    h2 {
      color: $color-btn;
      margin-top: 20px;
      font-size: 2.5rem;
      margin-bottom: 20px;
      font-family: $font-title;
      font-weight: bold;
    }

    p {
      color: $text-color;
      font-size: 1.2rem;
    }
  }

  .active {
    display: block;
  }
}

.blogTitle {
  text-align: center;
  background-color: #f5f5f5;

  p {
    padding-top: 120px;
    font-size: 1.3rem;
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
  background-color: #f5f5f5;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 120px;
}
</style>
