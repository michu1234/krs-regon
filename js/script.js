// KRS/NIP/REGON //

var searchNumber = new Vue({
	el: "#app",
	data: {
		numberToCheck: "",
		firmName: "",
		streetName: "",
		houseNumber: "",
		localNumber: "",
		postalCode: "",
	  cityName: "",
		errorMessage: "",
		fullName: ""
	},
	methods: {
		clearInputs: function(){
				var allInputs = document.querySelectorAll("input");
				allInputs.value = " ";
		},
		searchNumber: function(){
			var self = this;
			var button = document.getElementsByTagName("button");
			if (self.numberToCheck.length <= 9 || self.numberToCheck.length > 10){
				self.errorMessage = "Nieprawidłowa ilość znaków..."
				self.button.preventDefault;
			}else if (self.numberToCheck.length = 10) {
				axios.get("https://api-v3.mojepanstwo.pl/dane/krs_podmioty.json?conditions[krs_podmioty.nip]="+self.numberToCheck)
			.then(function(response){
					self.firmName = response.data.Dataobject[0].data["krs_podmioty.firma"];
					self.streetName = response.data.Dataobject[0].data["krs_podmioty.adres_ulica"];
					self.houseNumber = response.data.Dataobject[0].data["krs_podmioty.adres_numer"];
					self.localNumber = response.data.Dataobject[0].data["krs_podmioty.adres_lokal"];
					self.postalCode = response.data.Dataobject[0].data["krs_podmioty.adres_kod_pocztowy"];
					self.cityName = response.data.Dataobject[0].data["krs_podmioty.adres_poczta"];
			})
			.catch(function(){
					axios.get("https://api-v3.mojepanstwo.pl/dane/krs_podmioty.json?conditions[krs_podmioty.krs]="+self.numberToCheck)
						.then(function(response){
						self.firmName = response.data.Dataobject[0].data["krs_podmioty.firma"];
						self.streetName = response.data.Dataobject[0].data["krs_podmioty.adres_ulica"];
						self.houseNumber = response.data.Dataobject[0].data["krs_podmioty.adres_numer"];
						self.localNumber = response.data.Dataobject[0].data["krs_podmioty.adres_lokal"];
						self.postalCode = response.data.Dataobject[0].data["krs_podmioty.adres_kod_pocztowy"];
						self.cityName = response.data.Dataobject[0].data["krs_podmioty.adres_poczta"];
						self.fullName = response.data.Dataobject[0].data["krs_podmioty.nazwa"];
					})
			})
				var newTask = hist.historyNumber;
				var today = new Date();
				var dateOfSearch = today.toLocaleDateString();
				newTask.push({
					name: self.numberToCheck,
					firm: "Data: " + dateOfSearch
				})
			}
		}
	}
})

// HISTORY //

var hist = new Vue({
	el: ".menu",
	data: {
		readyInfo: "Gotowe :-)",
		isShowing: true,
		isDeactivating: false,
		historyNumber: []
	},
	methods: {
		toggleShow: function() {
			this.isShowing = !this.isShowing;
			this.isDeactivating = !this.isDeactivating;
		}
	}
	})
