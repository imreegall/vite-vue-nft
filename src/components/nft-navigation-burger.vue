<template>
  <div class="nft-navigation-burger">
    <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>
  </div>
</template>

<script>
export default {
  name: "nft-navigation-burger",
}
</script>

<style lang="scss">
  .nft-navigation-burger {
    @media (max-width: 1439px) {
      width: 37px;
      height: 29px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      align-items: center;
      gap: 7px;
      z-index: 4;
      margin: 10px 6px;

      div {
        width: 100%;
        height: 5px;
        background-color: #F5F5F5;
        @include border-radius(999px);
        transition: .3s;

        &.div {
          &1 {
            top: 0;
            position: absolute;
          }

          &2 {

          }

          &3 {
            bottom: 0;
            position: absolute;
          }
        }
      }

      &.active {
        position: sticky;
        top: 29px;
        right: 9px;

        .div {
          &1 {
            top: calc(50% - 2.5px);
            transform: rotate(45deg);
            background-color: #47145F;
          }

          &2 {
            transform: rotate(45deg);
            background-color: #47145F;
          }

          &3 {
            bottom: calc(50% - 2.5px);
            transform: rotate(-45deg);
            background-color: #47145F;
          }
        }
      }
    }

    @media (min-width: 1440px) {
      display: none;
    }
  }
</style>