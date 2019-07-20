

	function  phonePurchaseAction (bankAccount,headPhonePrice, chargerPrice, phonePrice,) {
		var count = 0
		var set = [1, 2, 3]
		var buyinglog = [0, 0, 0]
		var tax = [5, 7, 10]
		var totalPrice = [0, 0, 0]
		var minimum = Math.min(phonePrice, headPhonePrice, chargerPrice)

		for (count = 0; bankAccount >= minimum; count++) {

			var rndm = Math.floor(Math.random() * set.length)
			var userPreference = set[rndm]
			var headPhoneCost, chargerCost, phonePriceCost      

			switch (userPreference) {
				case 1:

				headPhoneCost = headPhonePrice + calculateTax(headPhonePrice, tax[0])
				if( (bankAccount - headPhoneCost) > 0 ) {
					bankAccount -= headPhoneCost
					totalPrice[0] += headPhoneCost
					buyinglog[0]++
				}
				break
				case 2:
				chargerCost = chargerPrice + calculateTax(chargerPrice, tax[1])
				if( (bankAccount - chargerCost) > 0 ) {
					bankAccount -= chargerCost
					totalPrice[1] += chargerCost
					buyinglog[1]++
				}
				break
				case 3:
				phonePriceCost = phonePrice + calculateTax(phonePrice, tax[2])
				if( (bankAccount - phonePriceCost) > 0 ) {
					bankAccount -= phonePriceCost
					totalPrice[2] += phonePriceCost
					buyinglog[2]++
				}
				break
				default:
				console.log('dick' + userPreference)
			}
		}
		console.log('Bought headphone ' + buyinglog[0] + ' times')
		console.log('Amount cost in buying headphone ' + formatingPrice(totalPrice[0]) +' ( tax included )')
		console.log('Bought charger ' + buyinglog[1] + ' times')
		console.log('Amount cost in buying charger ' + formatingPrice(totalPrice[1]) +' ( tax included )')
		console.log('Bought phone ' + buyinglog[2] + ' times')
		console.log('Amount cost in buying headphone ' + formatingPrice(totalPrice[2]) +' ( tax included )')
		var totalCost = totalPrice[0] +totalPrice[1]+totalPrice[2]
		console.log('Total cost '+ formatingPrice(totalCost) )
		console.log('Bank balance left '+ formatingPrice(bankAccount) )


		function calculateTax(price, tax){
			var price = (price*tax)/100
			return price
		}

		function formatePrice(price){
			var formattedPrice ='$' + price.toFixed()
			return formattedPrice
		}

	}
phonePurchaseAction(1005, 10, 20, 40)
