class MovingElements{
  constructor () {
    this.width = document.body.offsetWidth
    this.height = this.width*0.465
    this.color = '#dedede'
    this.drawCanvas = new DrawCanvas(this.width, this.height, this.color)
    this.moveTo = 'right'

    this.circle = {
      actualX: 0,
      actualY: 20,
      size: 10,
      color: '#ff0000',
      draw: () => this.drawCanvas.circle(this.circle.actualX,this.circle.actualY,this.circle.size,this.circle.color)
    }
      // this.play()
  }

  moveToLeft(step=1) {
    let { draw } = this.circle
    if(this.moveTo == 'left'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      actualX-=step
    }
  }

  moveToRight(step=1) {
    const { draw } = this.circle
    if(this.moveTo == 'right'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.circle.actualX+=step
    }
  }

  play() {
    let { actualX,actualY,size,color } = this.circle

    setInterval(() => {
      if(actualX == 0){
        this.moveTo = 'right'
      }else if(actualX == this.width){
        this.moveTo = 'left'
      }
      console.log(actualX);
      this.moveToLeft()
      this.moveToRight()
    },5)
  }

}

window.onload = () => {
  if(document.readyState == 'complete'){
    const movingElements = new MovingElements()
  }
}
