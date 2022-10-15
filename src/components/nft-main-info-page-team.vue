<template>
  <div class="nft-main-info-page-team">
    <div class="teamCont">
      <h2 class="greenText" dir="auto">{{$t('mainInfoPage.team.members')}}</h2>
      <div class="teammates">

        <div
            class="teammate"
            v-for="employee in this.employees"
        >
<!--          <img :src="'/public/employees/' + employee.img + '.png'" alt="">-->
<!--          <img :src=getImgURL(employee.img) alt="">-->
          <img :src="'assets/images/employees/' + employee.img + '.png'" alt="">
          <p>{{employee.name}}</p>
          <p dir="auto">{{$t('mainInfoPage.team.posts.' + employee.post)}}</p>
        </div>

      </div>
      <button><a rel="nofollow" target="_blank" title="https://t.me/historicalcollection" href="https://t.me/historicalcollection"><img src="/src/assets/images/svg/telegram.svg" alt=""></a></button>
    </div>
    <div class="decorationLines"></div>
    <div class="buttonTop">
      <a href="#app"><img src="/src/assets/images/svg/arrowTop.svg" alt=""></a>
    </div>
  </div>
</template>

<script>
import {employees} from "../employees/index.js";

export default {
  name: "nft-main-info-page-team",
  data() {
    return {
      employees,
      selectedImageId: -1
    }
  },
  methods: {
    // getImgURL(pic) {
    //   // return require('/public/employees/' + pic + '.png')
    //   return new URL('employees/' + pic + '.png', import.meta.url).href
    // }
  }
}
</script>

<style lang="scss">
  .nft-main-info-page-team {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    @include user-select(none);

    @media (max-width: 1439px) {
    }

    @media (min-width: 1440px) {
      justify-content: center;
      align-items: center;
    }

    .teamCont {
      display: flex;
      flex-direction: column;
      position: relative;
      @include user-select(text);

      @media (max-width: 1439px) {
        gap: 42px;
        align-items: center;
        padding: 0 8px;
      }

      @media (min-width: 1440px) {
        gap: 84px;
        padding-bottom: 226px;
      }

      .teammates {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 1439px) {
          width: 300px;
          row-gap: 42px;
          @include column-gap(70px)
        }

        @media (min-width: 1440px) {
          width: 1203px;
          row-gap: 41px;
          @include column-gap(51px)
        }

        .teammate {
          color: #83F84C;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          > img {
            @include border-radius(999px);
            @include user-select(none);

            @media (max-width: 1439px) {
              width: 100px;
              height: 100px;
              margin-bottom: 18px;
            }

            @media (min-width: 1440px) {
              width: 158px;
              height: 158px;
              margin-bottom: 52px;
            }
          }

          > p {
            @media (max-width: 1439px) {
              width: 115px;
            }

            @media (min-width: 1440px) {
              width: 160px;
            }

            &:first-of-type {
              font-family: 'Montserrat', sans-serif;
              font-style: normal;
              font-weight: 600;
              line-height: 130.5%;
              letter-spacing: 0.005em;

              @media (max-width: 1439px) {
                font-size: 16px;
                margin-bottom: 6px;
              }

              @media (min-width: 1440px) {
                font-size: 22px;
                margin-bottom: 10px;
              }
            }

            &:last-of-type {
              font-family: 'Montserrat', sans-serif;
              font-style: normal;
              font-weight: 400;
              line-height: 130.5%;
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

      button {
        @media (max-width: 1439px) {
          background-color: #83F84C;
          box-shadow: 0 0 16px 1px #ACF08C;
          @include border-radius(15px);
          width: 240px;
          height: 55px;
          margin-top: 33px;

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

        @media (min-width: 1440px) {
          display: none;
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

    .buttonTop {
      @media (max-width: 1439px) {
        display: none;
      }

      @media (min-width: 1440px) {
        position: absolute;
        border-top: 1px solid #F5F5F5;
        border-bottom: 1px solid #F5F5F5;
        width: 100%;
        height: 75px;
        bottom: 0;
        display: flex;
        align-items: center;

        > a {
          position: absolute;
          right: 117px;

          img {
            width: 51px;
            height: 51px;
          }
        }
      }
    }
  }
</style>