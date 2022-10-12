<template>
  <div class="nft-main-info-page-menu">
    <ul dir="auto">
      <li id="mainPageMenuCollectionBut" @click="openMenuText">
        <h2>{{$t('mainInfoPage.menu.collection.title')}}</h2>
        <div class="but plus">
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
      </li>

      <li class="mainPageMenuCollectionText">
        <ul>
          <li v-for="text in $tm('mainInfoPage.menu.collection.text')">
            <h3>{{text}}</h3>
          </li>
        </ul>
      </li>

      <li id="mainPageMenuPreSaleBut" @click="openMenuText">
        <h2>{{$t('mainInfoPage.menu.preSale.title')}}</h2>
        <div class="but plus">
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
      </li>

      <li class="mainPageMenuPresaleText">
        <ul>
          <li><h3>{{$t('mainInfoPage.menu.preSale.text[0]')}}</h3></li>

          <li><h3>{{$t('mainInfoPage.menu.preSale.text[1]')}}</h3></li>

          <li class="greenText italic">{{$t('mainInfoPage.menu.preSale.text[2]')}}</li>

          <li><h3>{{$t('mainInfoPage.menu.preSale.text[3]')}}</h3></li>

          <li><button class="nft-btn">{{$t('mainInfoPage.menu.preSale.text[4]')}}</button></li>
        </ul>
      </li>

      <li id="mainPageMenuRoadMapBut" @click="openMenuText">
        <h2>{{$t('mainInfoPage.menu.roadMap.title')}}</h2>
        <div class="but plus">
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
      </li>

      <li class="mainPageMenuRoadmapText">
        <ul class="roadmapMainList">

          <li v-for="(list, Q) in $tm('mainInfoPage.menu.roadMap.text')">
            <ul class="roadmapOneOfList">
              <li>{{Q}}</li>

              <li>
                <ul class="roadmapListOfQ">
                  <li v-for="elem in list">{{elem}}</li>
                </ul>
              </li>
            </ul>
          </li>

        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nft-main-info-page-menu",
  methods: {
    //открыть/закрыть текст в меню
    openMenuText: (elem) => {
      const element = elem.currentTarget

      //если нажали на закрытую кнопку - сначала закрыть все остальные
      if (!element.classList.contains('active')) {
        element.parentElement.childNodes.forEach(elem => {
          elem.classList.remove('active')
        })
      }

      element.classList.toggle('active')
      element.nextElementSibling.classList.toggle('active')
    }
  }
}
</script>

<style lang="scss">
  .nft-main-info-page-menu {
    > ul {
      > li {
        &:nth-of-type(2n+1) {
          @include user-select(none);
          border-bottom: 1px solid #F5F5F5;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

          @media (max-width: 1439px) {
            padding: 20px 23px 20px 3px;
          }

          @media (min-width: 1440px) {
            padding: 10px 205px 22px 110px;

            &:nth-of-type(5) {
              border-bottom: none;
            }
          }

          &:first-of-type {
            border-top: 1px solid #F5F5F5;
          }

          .but {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            > div {
              background-color: $whiteSmoke;
              @include border-radius(20px);

              @media (max-width: 1439px) {
                width: 19px;
                height: 4px;
              }

              @media (min-width: 1440px) {
                width: 33px;
                height: 9px;
              }

              &.line2 {
                transform: rotate(90deg);
                position: absolute;
              }
            }
          }

          &.active {
            border-bottom: none;

            .but {
              .line2 {
                display: none;
              }
            }
          }
        }

        &:nth-of-type(2n) {
          &.mainPageMenuCollectionText {
            display: none;

            @media (max-width: 1439px) {
              padding: 10px 8px 17px;
            }

            @media (min-width: 1440px) {
              padding: 51px 260px 102px 100px;
            }

            > ul {
              display: flex;
              flex-direction: column;

              @media (max-width: 1439px) {
                gap: 21px;
              }

              @media (min-width: 1440px) {
                gap: 29px;
              }
            }
          }

          &.mainPageMenuPresaleText {
            align-items: center;
            flex-direction: column;
            display: none;

            @media (max-width: 1439px) {
              padding: 17px 10px 39px;
            }

            @media (min-width: 1440px) {
              padding: 51px 100px 102px;
            }

            > ul {
              display: flex;
              flex-direction: column;

              @media (max-width: 1439px) {
                gap: 21px;
              }

              @media (min-width: 1440px) {
                gap: 29px;
              }

              > li {
                &:last-of-type {
                  align-self: center;

                  button {
                    @include border-radius(16px);
                    background-color: #83F84C;
                    box-shadow: 0 0 16px 1px #ACF08C;
                    margin-top: 74px;
                    color: $jet-black;

                    @media (max-width: 1439px) {
                      padding: 14px 22px;
                    }

                    @media (min-width: 1440px) {
                      padding: 32px 212px;
                    }
                  }
                }
              }
            }
          }

          &.mainPageMenuRoadmapText {
            display: none;

            @media (max-width: 1439px) {
              padding-top: 10px;
            }

            @media (min-width: 1440px) {
              padding: 58px 100px 100px;
            }

            > .roadmapMainList {
              display: flex;
              flex-direction: column;
              gap: 32px;

              .roadmapOneOfList {
                display: flex;
                flex-direction: column;
                gap: 10px;

                > li {
                  &:first-of-type {
                    font-weight: 600;
                    line-height: 130.5%;
                    color: #83F84C;
                  }

                  .roadmapListOfQ > li {
                    font-weight: 400;
                    line-height: 173%;
                  }

                  &:first-of-type,
                  .roadmapListOfQ > li {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    letter-spacing: 0.005em;

                    @media (max-width: 1439px) {
                      font-size: 16px;
                    }

                    @media (min-width: 1440px) {
                      font-size: 22px;
                    }
                  }
                }
              }
            }
          }

          &.active {
            display: flex;
          }
        }
      }
    }
  }
</style>