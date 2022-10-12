<template>
  <div class="nft-main-info-page-legends">
    <div class="img">
      <img src="/src/assets/images/svg/people.svg" alt="">
      <div class="round"></div>
    </div>
    <aside>
      <div class="title">
        <h4 class="greenText">3333</h4>
        <h5>{{$t('mainInfoPage.legends.persons')}}</h5>
      </div>
      <div class="quote">
        <h3 dir="auto">{{$t('mainInfoPage.legends.fact')}}</h3>
      </div>
    </aside>
    <div class="decorationLines"></div>
  </div>
</template>

<script>
export default {
  name: "nft-main-info-page-legends"
}
</script>

<style lang="scss">
  .nft-main-info-page-legends {
    display: flex;
    position: relative;

    @media (max-width: 1439px) {
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: 1440px) {
      border-top: 1px solid #F5F5F5;
      border-bottom: 1px solid #F5F5F5;
    }

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      @media (max-width: 1439px) {
        margin-bottom: -50px;
        max-width: 600px;
      }

      @media (min-width: 1440px) {
        width: 56.6%;
        padding: 150px 0 100px 46px;
      }

      img {
        @media (max-width: 1439px) {
          width: 100%;
        }

        @media (min-width: 1440px) {
          width: 788px;
        }
      }

      .round {
        filter: blur(75px);
        @include backdrop-filter(100px);
        position: absolute;
        z-index: -1;

        @media (max-width: 1439px) {
          width: 243px;
          height: 252px;
          background-color: rgba(238, 29, 192, 0.54);
        }

        @media (min-width: 1440px) {position: absolute;
          width: 429px;
          height: 445px;
          background: rgba(131, 248, 76, 0.57);
        }
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      z-index: 2;

      @media (max-width: 1439px) {
        gap: 44px;
        padding: 0 4px;
      }

      @media (min-width: 1440px) {
        width: 43.4%;

        .quote {
          padding: 29px 140px 0 20px;
        }
      }

      .title {
        @media (max-width: 1439px) {
          text-align: center;
        }

        @media (min-width: 1440px) {
          border-left: 1px solid #F5F5F5;
          border-bottom: 1px solid #F5F5F5;
          padding: 245px 0 15px 20px;
        }
      }
    }

    .decorationLines {
      @media (max-width: 1439px) {
        display: none;
      }

      @media (min-width: 1440px) {
        position: absolute;
        border-left: 1px solid #F5F5F5;
        border-right: 1px solid #F5F5F5;
        width: 43px;
        height: 100%;
        right: 57px;
      }
    }
  }
</style>