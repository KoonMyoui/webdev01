const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('https://api.exchangeratesapi.io/latest')
  .then(function (response) {
    // handle success
    console.log(`กสุลเงินพื้นฐาน ${response.data.base}`);
    console.log(`ต่อบาทไทย ${response.data.rates.THB}`);

  });