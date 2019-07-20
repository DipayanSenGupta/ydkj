class PhonePurchase {
  constructor (bankAccount, phonePrice, headPhonePrice, chargerPrice) {
    this._bankAccount = bankAccount
    this._phonePrice = phonePrice
    this._headPhonePrice = headPhonePrice
    this._chargerPrice = chargerPrice
  }

  phonePurchaseAction () {
    var count = 0
    var set = [1, 2, 3]
    var buyinglog = [0, 0, 0]
    var tax = [5, 7, 10]
    var totalPrice = [0, 0, 0]
    var minimum = Math.min(this._phonePrice, this._headPhonePrice, this._chargerPrice)

    for (count = 0; this._bankAccount >= minimum; count++) {

      var rndm = Math.floor(Math.random() * set.length)
      var userPreference = set[rndm]
      var headPhoneCost, chargerCost, phonePriceCost      

      switch (userPreference) {
        case 1:
          headPhoneCost = this._headPhonePrice + (this._headPhonePrice * tax[0]) / 100
          if( (this._bankAccount - headPhoneCost) > 0 ) {
          this._bankAccount -= headPhoneCost
          totalPrice[0] += headPhoneCost
          buyinglog[0]++
          }
          break
        case 2:
          chargerCost = this._chargerPrice + (this._chargerPrice * tax[1]) / 100
          if( (this._bankAccount - chargerCost) > 0 ) {
          this._bankAccount -= chargerCost
          totalPrice[1] += chargerCost
          buyinglog[1]++
          }
          break
        case 3:
          phonePriceCost = this._phonePrice + (this._phonePrice * tax[2]) / 100
          if( (this._bankAccount - phonePriceCost) > 0 ) {
					this._bankAccount -= phonePriceCost
          totalPrice[2] += phonePriceCost
          buyinglog[2]++
          }
          break
        default:
          console.log('dick' + userPreference)
      }
    }
    console.log('Bought headphone ' + buyinglog[0] + ' times')
    console.log('Amount cost in buying headphone ' +totalPrice[0].toFixed(2) +' ( tax included )')
    console.log('Bought charger ' + buyinglog[1] + ' times')
    console.log('Amount cost in buying charger ' +totalPrice[1].toFixed(2) +' ( tax included )')
    console.log('Bought phone ' + buyinglog[2] + ' times')
  	console.log('Amount cost in buying headphone ' +totalPrice[2].toFixed(2) +' ( tax included )')
  	var totalCost = totalPrice[0] +totalPrice[1]+totalPrice[2]
  	console.log('Total cost '+totalCost.toFixed(2))
  	console.log('Bank balance left '+this._bankAccount.toFixed(2))

  }
}
var obj = new PhonePurchase(1005, 10, 20, 40)
obj.phonePurchaseAction()
