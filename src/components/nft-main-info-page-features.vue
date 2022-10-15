<template>
  <div class="nft-main-info-page-features">

    <div class="card" v-for="card in $tm('mainInfoPage.features')" dir="auto">
      <img :src="'assets/images/features/' + card.img + '.svg'" alt="">
      <h3 v-for="text in Array.isArray(card.text) ? card.text : [card.text]">{{text}}</h3>
    </div>

  </div>
</template>

<script>
export default {
  name: "nft-main-page-features"
}
</script>

<style lang="scss">
  .nft-main-info-page-features {
    display: flex;

    @media (max-width: 1439px) {
      flex-direction: column;
      align-items: center;
      gap: 54px;
    }

    @media (min-width: 1440px) {
      flex-wrap: wrap;
      border-bottom: 1px solid #F5F5F5;;
      margin-bottom: -64px;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (max-width: 1439px) {
        gap: 24px;
        max-width: 500px;
      }

      @media (min-width: 1440px) {
        padding: 100px;
        gap: 60px;
        border-top: 1px solid #F5F5F5;

        &:nth-child(2n+1) {
          width: 49.3%;
          border-right: 1px solid #F5F5F5;
        }

        &:nth-child(2n) {
          width: 50.7%;
        }

        &:nth-child(5),
        &:nth-child(6) {
          padding-bottom: 164px;
        }
      }

      > img {
        @include user-select(none);
      }
    }

    @media (max-width: 1439px) {

      .card:nth-child(1) > img {
        width: 47px;
        height: 47px;
      }

      .card:nth-child(2) > img {
        width: 44px;
        height: 56px;
      }

      .card:nth-child(3) > img {
        width: 56px;
        height: 45px;
      }

      .card:nth-child(4) > img {
        width: 54px;
        height: 54px;
      }

      .card:nth-child(5) > img {
        width: 54px;
        height: 54px;
      }

      .card:nth-child(6) > img {
        width: 58px;
        height: 58px;
      }
    }

    @media (min-width: 1440px) {

      .card:nth-child(1) > img {
        width: 84px;
        height: 80px;
      }

      .card:nth-child(2) > img {
        width: 61px;
        height: 78px;
      }

      .card:nth-child(3) > img {
        width: 87px;
        height: 79px;
      }

      .card:nth-child(4) > img {
        width: 79px;
        height: 79px;
      }

      .card:nth-child(5) > img {
        width: 79px;
        height: 79px;
      }

      .card:nth-child(6) > img {
        width: 79px;
        height: 79px;
      }
    }
  }
</style>