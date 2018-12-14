class MovingElements {
  constructor () {
    this.width = document.body.offsetWidth
    this.height = this.width*0.465

    this.drawCanvas = new DrawCanvas(this.width, this.height, '#dedede')

    this.circle = {
      actualX: this.width,
      actualY: 20,
      size: 10,
      color: '#ff0000',
      draw: () => this.drawCanvas.circle(this.circle.actualX,this.circle.actualY,this.circle.size,this.circle.color)
    }

    this.play()
  }

  moveToLeft() {
    let { actualX,actualY,size,color } = this.circle

    this.drawCanvas.brush.clearRect(0,0,this.width,this.height)
    this.drawCanvas.circle(actualX,actualY,size,color)
    actualX--
  }

  moveToRight() {
    let { actualX,actualY,size,color } = this.circle

    this.drawCanvas.brush.clearRect(0,0,this.width,this.height)
    this.drawCanvas.circle(actualX,actualY,size,color)
    actualX++
  }

  play() {
    let { actualX,actualY,size,color } = this.circle

    setInterval(() => {
      // condição para chamar this.moveToLeft()
      // condição para chamar this.moveToRight()
    },5)
  }

}

window.onload = () => {
  if(document.readyState == 'complete'){
    const movingElements = new MovingElements()
  }
}
