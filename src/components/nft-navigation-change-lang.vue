<template>
  <div class="nft-navigation-change-lang">
    <div class="changeLangBtn" @click="displayLangMenu">
      <h6 class="changeLangBtnValue">
        {{this.$i18n.locale.toUpperCase()}}
      </h6>
      <div class="figure"></div>
    </div>
    <ul class="changeLangMenu">
      <li
          v-for="(item, index) in this.languages"
          @click="changeLang"
      >
        <h6>{{index.toUpperCase()}}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
import {languages} from "/src/i18n"

export default {
  name: "nft-navigation-change-lang",
  data() {
    return {
      languages,
      pageLang: ''
    }
  },
  methods: {
    //открытие/закрытие панели с выбором языков
    displayLangMenu: (elem) => {
      elem.currentTarget.nextElementSibling.classList.toggle('active')
    },

    //смена и сохранение языка на выбранный
    changeLang(elem) {
      this.pageLang = elem.currentTarget.innerText.toLowerCase().trim()
    }
  },
  watch: {
    //при изменении языка менять локаль, сохранять его в локалСтор и изменять атрибут html
    pageLang(newLang) {
      this.$i18n.locale = newLang
      localStorage.setItem('lang', newLang)
      document.documentElement.setAttribute('lang', newLang)
    }
  },
  mounted() {
    //обновить переменную языка
    this.pageLang = this.$i18n.locale
  }
}
</script>

<style lang="scss">
  .nft-navigation-change-lang {
    @include user-select(none);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .changeLangBtn  {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;

      .figure {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid #83F84C;
      }

      &.active {
        .figure {
          border-top: none;
          border-bottom: 8px solid #83F84C;
        }
      }
    }

    .changeLangMenu {
      display: none;
      flex-direction: column;
      background-color: rgba(4, 4, 4, 0.09);
      @include backdrop-filter(4px);
      border: 1px solid #F5F5F5;
      position: absolute;
      padding: 25px 15px 27px;
      @include border-radius(10px);
      gap: 46px;
      z-index: 1;

      @media (max-width: 1439px) {
        top: 50px;
      }

      @media (min-width: 1440px) {
        top: 60px;
      }

      &.active {
        display: flex;
      }

      > li {
        cursor: pointer;
      }
    }

    &.hide {
      display: none;
    }
  }
</style>