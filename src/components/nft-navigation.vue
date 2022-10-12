<template>
  <div class="nft-navigation">
    <a href="#app" class="logo">LOGO</a>
    <ul dir="auto">
      <li><a href="#mainPageMenuCollectionBut" @click="openMainMenu"><h6>{{$t('nav.collection')}}</h6></a></li>
      <li><h6>/</h6></li>
      <li><a href="#mainPageMenuPreSaleBut" @click="openMainMenu"><h6>{{$t('nav.preSale')}}</h6></a></li>
      <li><h6>/</h6></li>
      <li><a href="#mainPageMenuRoadMapBut" @click="openMainMenu"><h6>{{$t('nav.roadMap')}}</h6></a></li>
      <li><h6>/</h6></li>
      <li><a href="#mainPageAbout" @click="openMainMenu"><h6>{{$t('nav.team')}}</h6></a></li>
      <li><h6>/</h6></li>
      <li>
        <nft-navigation-change-lang />
      </li>
    </ul>
    <nft-navigation-burger @click="toggleBurgerMenu"/>
  </div>
</template>

<script>
import nftNavigationBurger from "./nft-navigation-burger.vue"
import nftNavigationChangeLang from "./nft-navigation-change-lang.vue";
import dispatchEventsForElem from "./mixins/dispatchEventsForElem.js";

export default {
  name: "nft-navigation",
  components: {
    nftNavigationBurger,
    nftNavigationChangeLang
  },
  methods: {
    //открытие вкладок с плюсиками
    openMainMenu: function(elem) {
      const id = elem.currentTarget.getAttribute('href')

      const targetElem = document.querySelector(id)

      if (!targetElem.classList.contains('active')) {
        dispatchEventsForElem(targetElem, 'click')
      }
    },

    //открытие/закрытие бургера
    toggleBurgerMenu: (elem) => {
      const element = elem.currentTarget
      element.classList.toggle('active')

      const burgerMenu = document.querySelector('.nft-burger-menu')
      burgerMenu.classList.toggle('active')

      const changeLang = document.querySelector('.nft-navigation-change-lang')
      changeLang.classList.toggle('hide')

      const parent = element.parentElement
      parent.classList.toggle('hide')
    }
  }

}
</script>

<style lang="scss">
  .nft-navigation {
    position: sticky;
    display: flex;
    align-items: center;
    z-index: 5;
    background-color: rgba(4, 4, 4, 0.09);
    border-bottom: 1px solid rgba(245, 245, 245, 0.2);

    @media (max-width: 1439px) {
      justify-content: flex-end;
      padding: 29px 9px 0;
      gap: 26px;
      top: -30px;
    }

    @media (min-width: 1440px) {
      justify-content: space-between;
      margin-top: 41px;
      border-top: 1px solid #F5F5F5;
      border-bottom: 1px solid #F5F5F5;
      padding: 21px 87px 27px 108px;
      top: -1px;
    }

    &:before {
      content:"";
      position:absolute;
      z-index:-1;
      @include backdrop-filter(8px);
      top:0;
      left:0;
      right:0;
      bottom:0;
    }

    .logo {
      @media (max-width: 1439px) {
        display: none;
      }

      @media (min-width: 1440px) {
        font-family: 'FS Albert Pro', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 25px;
        line-height: 100%;
        letter-spacing: 0.01em;
        @include user-select(none);
      }
    }

    > ul {
      display: flex;
      align-items: center;

      > li {
        display: flex;
        align-items: center;

        &:nth-of-type(2n) {
          @include user-select(none);
        }
      }

      @media (max-width: 1439px) {
        > li:not(:last-of-type) {
          display: none;
        }
      }

      @media (min-width: 1440px) {
        gap: 40px;
      }
    }

    &.hide {
      background-color: transparent;
      border: none
    }
  }
</style>