import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasMoney: 9e10,
    productList: [{
      Name: 'Big Mac',
      Cost: 2,
      Counter: 0,
      img: require('@/assets/img/bigmac.jpg')
    }, {
      Name: 'Cup of Coffee',
      Cost: 4,
      Counter: 0,
      img: require('@/assets/img/Cupofcoffee.jpg')
    }, {
      Name: 'Book',
      Cost: 15,
      Counter: 0,
      img: require('@/assets/img/Book.jpg')
    }, {
      Name: 'Video Game',
      Cost: 60,
      Counter: 0,
      img: require('@/assets/img/Videogame.jpg')
    }, {
      Name: 'Charity',
      Cost: 100,
      Counter: 0,
      img: require('@/assets/img/Charity.jpg')
    }, {
      Name: 'Headphones',
      Cost: 200,
      Counter: 0,
      img: require('@/assets/img/Headphones.jpg')
    }, {
      Name: 'Air Jordans',
      Cost: 200,
      Counter: 0,
      img: require('@/assets/img/Airjordans.jpg')
    }, {
      Name: 'Skateboard',
      Cost: 300,
      Counter: 0,
      img: require('@/assets/img/Skateboard.jpg')
    }, {
      Name: 'Smartphone',
      Cost: 600,
      Counter: 0,
      img: require('@/assets/img/Smartphone.jpg')
    }, {
      Name: 'Gaming Console',
      Cost: 600,
      Counter: 0,
      img: require('@/assets/img/Gamingconsole.jpg')
    }, {
      Name: 'Bike',
      Cost: 800,
      Counter: 0,
      img: require('@/assets/img/Bike.jpg')
    }, {
      Name: 'Drone',
      Cost: 800,
      Counter: 0,
      img: require('@/assets/img/Drone.jpg')
    }, {
      Name: 'Designer Handbag',
      Cost: 1e3,
      Counter: 0,
      img: require('@/assets/img/Designerhandbag.jpg')
    }, {
      Name: 'Jet Ski',
      Cost: 8e3,
      Counter: 0,
      img: require('@/assets/img/Jetski.jpg')
    }, {
      Name: '4K TV',
      Cost: 1e4,
      Counter: 0,
      img: require('@/assets/img/4ktv.jpg')
    }, {
      Name: 'Diamond Ring',
      Cost: 1e4,
      Counter: 0,
      img: require('@/assets/img/Diamondring.jpg')
    }, {
      Name: 'Rolex',
      Cost: 15e3,
      Counter: 0,
      img: require('@/assets/img/Rolex.jpg')
    }, {
      Name: 'Speed boat',
      Cost: 3e4,
      Counter: 0,
      img: require('@/assets/img/Speedboat.jpg')
    }, {
      Name: 'Food Truck',
      Cost: 5e4,
      Counter: 0,
      img: require('@/assets/img/Foodtruck.jpg')
    }, {
      Name: 'Tesla',
      Cost: 7e4,
      Counter: 0,
      img: require('@/assets/img/Tesla.jpg')
    }, {
      Name: 'Monster Truck',
      Cost: 15e4,
      Counter: 0,
      img: require('@/assets/img/Monstertruck.jpg')
    }, {
      Name: 'Helicopter',
      Counter: 0,
      Cost: 175e3,
      img: require('@/assets/img/Helicopter.jpg')
    }, {
      Name: 'Ferrari',
      Cost: 2e5,
      Counter: 0,
      img: require('@/assets/img/Helicopter.jpg')
    }, {
      Name: 'Lamborghini',
      Cost: 2e5,
      Counter: 0,
      img: require('@/assets/img/Lamborghini.jpg')
    }, {
      Name: 'Firetruck',
      Cost: 2e5,
      Counter: 0,
      img: require('@/assets/img/Firetruck.jpg')
    }, {
      Name: 'Townhouse',
      Cost: 2e5,
      Counter: 0,
      img: require('@/assets/img/Townhouse.jpg')
    }, {
      Name: 'Bar',
      Cost: 3e5,
      Counter: 0,
      img: require('@/assets/img/Bar.jpg')
    }, {
      Name: 'Pizza Shop',
      Cost: 5e5,
      Counter: 0,
      img: require('@/assets/img/Pizzashop.jpg')
    }, {
      Name: 'Bar of Gold',
      Cost: 5e5,
      Counter: 0,
      img: require('@/assets/img/Barofgold.jpg')
    }, {
      Name: 'Superbowl Ad',
      Cost: 5e6,
      Counter: 0,
      img: require('@/assets/img/Superbowlad.jpg')
    }, {
      Name: 'Beach House',
      Cost: 5e6,
      Counter: 0,
      img: require('@/assets/img/Beachhouse.jpg')
    }, {
      Name: 'Yacht',
      Cost: 1e7,
      Counter: 0,
      img: require('@/assets/img/Yacht.jpg')
    }, {
      Name: 'F16',
      Cost: 15e6,
      Counter: 0,
      img: require('@/assets/img/F16.jpg')
    }, {
      Name: 'Skyscraper',
      Cost: 5e7,
      Counter: 0,
      img: require('@/assets/img/Skyscraper.jpg')
    }, {
      Name: 'Mansion',
      Cost: 5e7,
      Counter: 0,
      img: require('@/assets/img/Mansion.jpg')
    }, {
      Name: 'Rocket',
      Cost: 6e7,
      Counter: 0,
      img: require('@/assets/img/Rocket.jpg')
    }, {
      Name: 'Passenger Jet',
      Cost: 15e7,
      Counter: 0,
      img: require('@/assets/img/Passengerjet.jpg')
    }, {
      Name: 'Mona Lisa',
      Counter: 0,
      img: require('@/assets/img/Monalisa.jpg'),
      Cost: 78e7,
      Limit: 1
    }, {
      Name: 'Cruise Ship',
      Cost: 12e8,
      img: require('@/assets/img/Cruiseship.jpg'),
      Counter: 0
    }, {
      Name: 'NBA Team',
      Counter: 0,
      Cost: 13e8,
      img: require('@/assets/img/Nbateam.jpg'),
      Limit: 30
    }, {
      Name: 'MLB Team',
      Counter: 0,
      Cost: 15e8,
      img: require('@/assets/img/Mlbteam.jpg'),
      Limit: 30
    }, {
      Name: 'NFL Team',
      Counter: 0,
      Cost: 23e8,
      img: require('@/assets/img/Nflteam.jpg'),
      Limit: 32
    }]
  },
  mutations: {
    buy: state => {
      var targetProductName = event.target.previousSibling.id
      var targetObjectProduct = state.productList.find(product => product.Name === targetProductName)

      var targetBuyButton = event.target
      var targetSellButton = event.target.previousSibling.previousSibling

      if (targetObjectProduct.Limit) {
        if (targetObjectProduct.Counter < targetObjectProduct.Limit) {
          targetObjectProduct.Counter++
          state.hasMoney -= targetObjectProduct.Cost // Compra do Produto
        } else {
          targetObjectProduct.Counter *= 1
        }
      } else {
        targetObjectProduct.Counter++
        state.hasMoney -= targetObjectProduct.Cost // Compra do Produto
      }

      if (targetObjectProduct.Counter >= 1 && targetObjectProduct.Counter !== targetObjectProduct.Limit) {
        targetSellButton.disabled = ''
        targetBuyButton.disabled = ''
      } else {
        targetBuyButton.disabled = 'true'
        targetSellButton.disabled = ''
      }
    },
    sell: state => {
      var targetProductName = event.target.nextElementSibling.id
      var targetObjectProduct = state.productList.find(product => product.Name === targetProductName)

      var targetBuyButton = event.target.nextElementSibling.nextElementSibling
      var targetSellButton = event.target

      if (targetObjectProduct.Counter === 0) {
        targetObjectProduct.Counter = 0
      } else {
        targetObjectProduct.Counter-- // Decrementa quantidade do Produto
        state.hasMoney += targetObjectProduct.Cost // Venda do Produto
      }

      if (targetObjectProduct.Counter === 0) {
        targetSellButton.disabled = 'true'
        targetBuyButton.disabled = ''
      } else {
        targetSellButton.disabled = ''
        targetBuyButton.disabled = ''
      }
    }
  }
})
