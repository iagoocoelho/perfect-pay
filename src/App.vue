<template>
  <div id="app">
    <header>
      <div class="header">
      <a href="https://neal.fun/">Neal.fun</a>
      </div>
    </header>
    <div class="main-container">
      <h1>
        <img src="./assets/img/billgates.png" alt />
        Spend Bill Gates' Money
      </h1>
      <h2 class="money">${{ hasMoney }} left</h2>
      <div id="products-container">
        <div class="product" v-for="product in this.productList" :key="product.Name">
          <img :src="(product.img)" />
          <div class="product-name">{{ product.Name }}</div>
          <div class="product-cost">${{ product.Cost }}</div>
          <div class="buttons">
            <button class="btn-sell" @click="sell" disabled>Sell</button>
            <input type="number" :id="product.Name" v-model="product.Counter" />
            <button class="btn-buy" @click="buy">Buy</button>
          </div>
        </div>
      </div>

      <div class="purchased-container" v-show="this.hasMoney !== '90.000.000.000'">
        <h2 class="purchased-title">Your Shopping Spree</h2>
        <div class="product-list">
          <template v-for="itemsBuy in this.productList">
            <div class="container-product" v-if="itemsBuy.Counter !== 0" :key="itemsBuy.Name">
              <img class="product-image" :src="(itemsBuy.img)" />
              <div class="product-name">{{ itemsBuy.Name }}</div>
              <div class="product-count">x {{ itemsBuy.Counter }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      hasMoney: state => new Intl.NumberFormat().format(state.hasMoney),
      productList: state => state.productList
    })
  },
  methods: {
    ...mapMutations(['buy', 'sell', 'checkBuyItems'])
  }
}
</script>

<style lang="scss">

// MEDIA QUERY

$tablet-width: 600px;
$laptop-width: 900px;

@mixin tablet {
  @media (min-width: #{$tablet-width}) and (max-width: #{$laptop-width}) {
    @content;
  }
}

@mixin laptop {
  @media (min-width: #{$laptop-width + 1}) {
    @content;
  }
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #f1f2f6;
  padding: 0;
  margin: 0;

  header {
    font-size: 30px;
    font-weight: bold;
    background-color: white;
    margin-bottom: 25px;
    padding: 30px 0px;

    .header {
      max-width: 950px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 15px;
      background-color: white;

      a {
        color: rgb(51, 51, 51);
        text-decoration: none;
      }
    }
  }

  .main-container {
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;
    background-color: #f1f2f6;

    h1 {
      font-size: 32px;
      margin-bottom: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 1.6em;
      background: white;
      padding: 30px 20px;

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 25px;
        width: 125px;
        height: 125px;
        border-radius: 125px;
      }
    }

    .money {
      color: white;
      background-color: rgb(46, 204, 113);
      font-size: 32px;
      font-weight: 900;
      text-align: center;
      top: 0px;
      position: sticky;
      padding: 20px;
      margin: 10px 0px;
    }

    #products-container {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(1, 1fr);

      @include tablet {
        grid-template-columns: repeat(2, 1fr);
      }
      @include laptop {
        grid-template-columns: repeat(3, 1fr);
      }

      .product {
        max-width: 100%;
        background-color: white;
        text-align: center;
        font-size: 18px;
        padding: 20px 15px;

        .product-name {
          font-size: 22px;
          font-weight: bold;
        }

        .product-cost {
          font-size: 20px;
          color: #2ecc71;
        }

        .buttons {
          background-color: #ffffff;
          font-size: 20px;
          font-weight: bold;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 25px;
          gap: 10px;

          input {
            font-size: 16px;
            color: rgb(51, 51, 51);
            font-family: Roboto, sans-serif;
            -webkit-appearance: none;
            padding: 9px 12px;
            border-radius: 3px;
            border-width: 1px;
            border-style: solid;
            border-color: #b2bec3;
            background-color: #ffffff;
            border-image: initial;
            max-width: 100px;
            text-align: center;
          }

          button {
            -webkit-appearance: button;
            -webkit-writing-mode: horizontal-tb !important;
            text-rendering: auto;
            color: buttontext;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: center;
            align-items: flex-start;
            cursor: default;
            background-color: buttonface;
            box-sizing: border-box;
            margin: 0em;
            font: 400 13.3333px Arial;
            padding: 1px 6px;
            border-width: 2px;
            border-style: outset;
            border-color: buttonface;
            border-image: initial;

            &.btn-sell {
              font-size: 16px;
              cursor: pointer;
              text-align: center;
              background-color: rgb(245, 59, 87);
              color: white;
              font-weight: bold;
              user-select: none;
              touch-action: manipulation;
              padding: 9px 12px;
              border-radius: 3px;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
            }

            &.btn-buy {
              font-size: 16px;
              cursor: pointer;
              text-align: center;
              background-color: rgb(5, 196, 107);
              color: white;
              font-weight: bold;
              user-select: none;
              touch-action: manipulation;
              padding: 9px 12px;
              border-radius: 3px;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
            }

            &:disabled {
              color: #333333;
              cursor: auto;
              touch-action: manipulation;
              background-color: rgb(241, 242, 246) !important;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
            }
          }
        }
      }
    }

    .purchased-container {
      max-width: 100%;
      background-color: white;
      text-align: center;
      font-size: 18px;
      margin-top: 10px;
      padding: 15px;

      .purchased-title {
        background-color: white;
        text-align: center;
        font-size: 28px;
        color: rgb(46, 204, 113);
        font-weight: bold;
        padding: 15px;
      }

      .product-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px 0px;

        @include tablet {
          grid-template-columns: repeat(2, 1fr);
        }

        .container-product {
          text-align: center;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;

          .product-image {
            max-height: 50px;
            max-width: 50px;
            margin-right: 7px;
            display: inline;
          }

          .product-name {
            font-size: 16px;
            display: inline;
          }

          .product-count {
            font-size: 16px;
            font-weight: bold;
            display: inline;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
