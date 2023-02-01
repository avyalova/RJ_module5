let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
]

let sum = 0
let date = new Date()

expencesExamples.forEach((expense, index) => {
  expense.yearlyExpences.git forEach((i, index) => {
    if (i > 1000) {
      sum += i
    } else {
      date.setMonth(index)
      console.log(date.toLocaleString("en-US", { month: "long" }), i)
    }
  })
  console.log("------")
})
