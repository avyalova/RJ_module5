class Button {
  constructor(option) {
    this.wide = option.wide
    this.height = option.height
    this.type = option.type
    this.color = option.color
  }
  onCLick() {
    console.log(
      `Properties of this button are wide:${this.wide},height:${this.height},type:${this.type}, color:${this.color}`
    )
  }
}

let button = new Button({
  wide: 5,
  height: 6,
  type: "button",
  color: "green",
})

function testButton(button1) {
  if (
    button1.wide === 5 &&
    button1.height === 6 &&
    (button1.type = "button") &&
    (button1.color = "green")
  ) {
    console.log("true")
  }
}

testButton(button)

new Button(button).onCLick()
