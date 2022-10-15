<template>
  <div class="nft-main-info-page-about" id="mainPageAbout">
    <div class="text" dir="auto">
      <h2 class="greenText mobile">{{$t('mainInfoPage.about.team.mobile')}}</h2>
      <h2 class="greenText desktop">{{$t('mainInfoPage.about.team.desktop')}}</h2>

      <template v-for="(arrayOfText, index) in $tm('mainInfoPage.about.text')">
        <h3 v-for="text in arrayOfText">{{text}}</h3>

        <img v-if="index !== 'no-image'" class="mobile" :src="'assets/images/about/' + index + 'M.svg'" alt="">
        <img v-if="index !== 'no-image'" class="desktop" :src="'assets/images/about/' + index + 'D.svg'" alt="">
      </template>

    </div>
    <button><a rel="nofollow" target="_blank" title="https://t.me/historicalcollection" href="https://t.me/historicalcollection"><img src="/src/assets/images/svg/telegram.svg" alt=""></a></button>
    <div class="decorationLines"></div>
  </div>
</template>

<script>
export default {
  name: "nft-main-info-page-about-us"
}
</script>

<style lang="scss">
  .nft-main-info-page-about {
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 1439px) {
      gap: 55px;
    }

    @media (min-width: 1440px) {
      padding-bottom: 243px;
      gap: 93px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > img {
        @include user-select(none);

        &:nth-of-type(1),
        &:nth-of-type(2) {
          transform: rotate(-11.23deg);
        }

        &:nth-of-type(3),
        &:nth-of-type(4) {
          transform: rotate(7.11deg);
          align-self: flex-end;
        }

        &:nth-of-type(5),
        &:nth-of-type(6) {
          transform: rotate(-10.08deg);
        }
      }

      @media (max-width: 1439px) {
        gap: 22px;

        > *:first-child {
          margin-left: 6px;
        }
      }

      @media (min-width: 1440px) {
        padding: 92px 200px 0 100px;
        gap: 42px;

        > *:first-child {
          margin-left: 10px;
        }
      }
    }

    button {
      background-color: #83F84C;
      box-shadow: 0 0 16px 1px #ACF08C;
      @include border-radius(15px);
      width: 240px;
      height: 55px;
      align-self: center;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          width: 38px;
          height: 34px;
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