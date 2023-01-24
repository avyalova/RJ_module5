let userAmount = 100
let smsCode = "A001DFX0"
let callNumber = "4"

let cellFormat = [0, 0, 0, "A001DFX0", 0]

for (let i = 0; i < cellFormat.length; i++) {
  if (cellFormat[i] === smsCode) {
    userAmount = userAmount - 100
    console.log(
      `Вы получили посылку из ячейки ${callNumber} и ваш счет составляет: ${userAmount} р.`
    )
  } else {
  }
}
