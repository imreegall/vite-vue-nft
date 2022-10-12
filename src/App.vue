<template>
  <div id="app">
    <nft-burger-menu />
    <nft-navigation />
    <nft-main-info-page />
  </div>
</template>

<script>
import nftBurgerMenu from "./components/nft-burger-menu.vue";
import nftNavigation from "./components/nft-navigation.vue"
import nftMainInfoPage from "./components/nft-main-info-page.vue"

export default {
  // *название компонента
  name: 'App',

  // дети компонента
  components: {
    nftBurgerMenu,
    nftNavigation,
    nftMainInfoPage
  },

  // не персональные данные компонента (из родителя)
  props: {},

  // персональные данные
  data() {
    return {
      title: '',
      pageLang: this.$i18n.locale
    }
  },

  // вычисляемое свойство
  computed: {},

  // события
  methods: {
    //закрытие языковой панели при клике на любое другое место
    closeLangMenu: (e) => {
      const menu = document.querySelector('.changeLangMenu')
      const menu_is_active = menu.classList.contains('active')

      if (menu_is_active) {
        const target = e.target

        const btn = document.querySelector('.changeLangBtn')

        const its_menu = target === menu
        const its_btn = target === btn || btn.contains(target)

        if (!its_menu && !its_btn) {
          menu.classList.toggle('active')
        }
      }
    }
  },

  // слежение за изменением
  watch: {},

  // хук, который отрабатывает после загрузки страницы
  mounted() {
    // закрытие меню выбора языка по клику в любое другое место
    document.addEventListener('click', this.closeLangMenu)

    // плавная прокрутка до якоря
    document.querySelectorAll('a[href*="#"]').forEach(elem => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = elem.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  },
}
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    color: #F5F5F5;
    min-height: 100vh;

    @media (max-width: 1439px) {
      background-color: $main-background-mobile;
    }

    @media (min-width: 1440px) {
      background-color: $main-background-desktop;
    }
  }
</style>