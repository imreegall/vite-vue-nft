<template>
  <div class="nft-main-info-page">
    <nft-main-info-page-welcome />
    <nft-main-info-page-menu />
    <nft-main-info-page-features />
    <nft-main-info-page-legends />
    <nft-main-info-page-about />
    <nft-main-info-page-team />
  </div>
</template>

<script>
import nftMainInfoPageMenu from "./nft-main-info-page-menu.vue"
import nftMainInfoPageFeatures from "./nft-main-info-page-features.vue";
import nftMainInfoPageLegends from "./nft-main-info-page-legends.vue";
import nftMainInfoPageAbout from "./nft-main-info-page-about.vue";
import nftMainInfoPageTeam from "./nft-main-info-page-team.vue";
import nftMainInfoPageWelcome from "./nft-main-info-page-welcome.vue";

export default {
  name: "nft-main-info-page",
  components: {
    nftMainInfoPageMenu,
    nftMainInfoPageFeatures,
    nftMainInfoPageLegends,
    nftMainInfoPageAbout,
    nftMainInfoPageTeam,
    nftMainInfoPageWelcome
  }
}
</script>

<style lang="scss">
  .nft-main-info-page {
    display: flex;
    flex-direction: column;

    @media (max-width: 1439px) {
      padding: 0 16px 150px;
      gap: 75px;
    }

    @media (min-width: 1440px) {
      padding-bottom: 25px;
    }
  }
</style>