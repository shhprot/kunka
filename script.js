export { currencyConverter };
const currencyConverter = {
    data() {
      return {
        amount: 1,
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        currencies: ['USD', 'EUR', 'GBP', 'JPY', 'RUB'],
        rates: {
          USD: 1,
          EUR: 0.85,
          GBP: 0.75,
          JPY: 110.0,
          RUB: 75.0
        }
      };
    },
    computed: {
      convertedAmount() {
        return (this.amount * this.rates[this.toCurrency] / this.rates[this.fromCurrency]).toFixed(2);
      }
    },
    watch: {
      fromCurrency(newVal, oldVal) {
        console.log('Валюта изменена с ${oldVal} на ${newVal}');
      },
      toCurrency(newVal, oldVal) {
        console.log('Валюта изменена с ${oldVal} на ${newVal}');
      }
    }
  };
  


  
