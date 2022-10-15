<template>
  <div class="nft-burger-menu">
    <section>
      <a href="#mainPageMenuCollectionBut" @click="closeBurgerMenu"><h6>{{$t('nav.burgerMenu.collection')}}</h6></a>
      <a href="#mainPageMenuRoadMapBut" @click="closeBurgerMenu"><h6>{{$t('nav.burgerMenu.roadMap')}}</h6></a>
      <a href="#mainPageMenuPreSaleBut" @click="closeBurgerMenu"><h6>{{$t('nav.burgerMenu.preSale')}}</h6></a>
      <a href="#mainPageAbout" @click="closeBurgerMenu"><h6>{{$t('nav.burgerMenu.team')}}</h6></a>
    </section>
  </div>
</template>

<script>
import dispatchEventsForElem from "./mixins/dispatchEventsForElem.js";

export default {
  name: "nft-burger-menu",
  methods: {
    //закрытие меню и открытие вкладок с плюсиками при нажатии на ссылку
    closeBurgerMenu: (elem) => {
      const burgerBtn = document.querySelector('.nft-navigation-burger')
      dispatchEventsForElem(burgerBtn, 'click')

      const id = elem.currentTarget.getAttribute('href')

      const targetElem = document.querySelector(id)

      if (!targetElem.classList.contains('active')) {
        dispatchEventsForElem(targetElem, 'click')
      }
    }
  }
}
</script>

<style lang="scss">
  .nft-burger-menu {
    @media (max-width: 1439px) {
      display: none;
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: #83F84C;
      top: 0;
      left: 0;
      justify-content: center;
      padding: 79px 0;
      z-index: 5;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-height: 342px;

        > * {
          color: #47145F;
        }
      }

      &.active {
        display: flex;
      }
    }

    @media (min-width: 1440px) {
      display: none;
    }
  }
</style>