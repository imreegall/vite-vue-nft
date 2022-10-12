<template>
  <div class="nft-main-info-page-welcome">
    <div class="title">
      <h3 dir="auto">{{$t('mainInfoPage.welcome.description')}}</h3>
    </div>
    <video playsinline autoplay loop muted src="/src/assets/video/video.mp4"></video>
    <div class="tag">
      <h1>TON<br></h1><h1 class="greenText">History<br>collection</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "nft-main-info-page-welcome"
}
</script>

<style lang="scss">
  .nft-main-info-page-welcome {
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 1439px) {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 118px;
      gap: 10px;

      .title {
        margin: 42px 23px 0 12px;
        width: 293px;
      }
    }

    @media (min-width: 1440px) {
      flex-direction: row-reverse;
      justify-content: flex-end;
      padding: 91px 100px 150px;
      gap: 41px;
    }

    video {
      position: relative;
      @include user-select(none);

      @media (max-width: 1439px) {
        width: 100%;
      }

      @media (min-width: 1440px) {
        max-width: 651px;
      }
    }

    .tag {
      position: absolute;

      @media (max-width: 1439px) {
        bottom: 31px;
        left: 24px;
      }

      @media (min-width: 1440px) {
        bottom: 95px;
        left: 563px;
      }
    }
  }
</style>