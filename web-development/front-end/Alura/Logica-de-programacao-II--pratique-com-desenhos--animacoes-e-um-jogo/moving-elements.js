class MovingElements {
  constructor () {
    const width = document.body.offsetWidth,
    height = width*0.465,
    drawCanvas = new DrawCanvas(width, height, '#dedede')

    this.circle = {
      actualX: width,
      actualY: 20,
      size: 10,
      color: '#ff0000',
      draw: () => drawCanvas.circle(this.circle.actualX,this.circle.actualY,this.circle.size,this.circle.color)
    }

    // this.interval('left')
    // this.moveToLeft(drawCanvas)
  }

  moveToLeft(drawCanvas) {
    setInterval(() => {
      if(this.circle.actualX > 0) {
        //preciso entender melhor como me referenciar ao drawCanvas aqui
        drawCanvas.canvas.clear(this.circle.actualX-this.circle.size,10,this.circle.actualX+this.circle.size,30)
        this.circle.actualX--
        this.circle.draw()
      }
    },15)
  }

  moveToRight() {

  }

  interval(opt) {
    if(opt == 'left') {
    }else if (opt == 'right') {
      setInterval(this.moveToRight, 1000)
    }
  }
}

window.onload = () => {
  if(document.readyState == 'complete'){
    const movingElements = new MovingElements()
  }
}
