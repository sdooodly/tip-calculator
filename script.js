let billInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let numberOfPeopleDiv = document.getElementById('numberOfPeople');
let perPersonTotalDiv = document.getElementById('perPersonTotal');
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  const perPersonTotal = ((Number(billInput.value) * (Number(tipInput.value) / 100)) + Number(billInput.value)) / numberOfPeople
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}
