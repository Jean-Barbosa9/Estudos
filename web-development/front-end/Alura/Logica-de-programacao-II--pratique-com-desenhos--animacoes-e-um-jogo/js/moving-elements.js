class MovingElements{
  constructor () {
    this.width = document.body.offsetWidth
    this.height = this.width*0.465
    this.color = '#dedede'
    this.drawCanvas = new DrawCanvas(this.width, this.height, this.color)
    this.moveTo = 'bottom'

    this.circle = {
      actualX: this.width/2,
      actualY: this.height/2,
      size: 10,
      color: '#ff0000',
      draw: () => this.drawCanvas.circle(this.circle.actualX,this.circle.actualY,this.circle.size,this.circle.color)
    }
    this.interval
    this.state = 'stoped'
    this.userInteraction()
  }

  moveToTop(step=1) {
    let { draw } = this.circle
    if(this.moveTo == 'top'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.circle.actualY-=step
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

  moveToBottom(step=1) {
    const { draw } = this.circle
    if(this.moveTo == 'bottom'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.circle.actualY+=step
      console.log(this.circle.actualY == this.height);
    }
  }

  moveToLeft(step=1) {
    let { draw } = this.circle
    if(this.moveTo == 'left'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.circle.actualX-=step
    }
  }

  bounceOnWalls() {
    if(this.circle.actualX == 0){
      this.moveTo = 'right'
    }
    else if(this.circle.actualX == this.width-10){
      this.moveTo = 'left'
    }
    else if(this.circle.actualY == this.height-10){
      this.moveTo = 'top'
    }
    else if(this.circle.actualY == 10){
      this.moveTo = 'bottom'
    }
  }

  infinityMovement() {
    if(this.circle.actualX == this.width-10) {
      this.circle.actualX = 1
    }
    else if(this.circle.actualX == 0){
      this.circle.actualX = this.width-10
    }
    else if(this.circle.actualY == this.height-100) {
      this.circle.actualY = 1
    }
    else if(this.circle.actualY == 0) {
      this.circle.actualY = this.height-100
    }
    console.log(this.width-10);

  }

  play() {
    this.interval = setInterval(() => {
      this.state = 'playing'
      // this.bounceOnWalls()
      this.infinityMovement()
      this.moveToTop()
      this.moveToRight()
      this.moveToBottom()
      this.moveToLeft()
    },5)
    // this.interval = setInterval(() => {
    //   this.moveToTop()
    //   this.moveToRight()
    //   this.moveToBottom()
    //   this.moveToLeft()
    // },5)
  }

  stop() {
    this.state = 'stoped'
    clearInterval(this.interval)
  }

  controls(event) {
    if(event == 32 && this.state == 'playing'){
      this.stop()
    }
    else if(event == 32 && this.state == 'stoped'){
      this.play()
    }
    else if(event == 119) {
      this.moveTo = 'top'
    }
    else if(event == 100) {
      this.moveTo = 'right'
    }
    else if(event == 115) {
      this.moveTo = 'bottom'
    }
    else if(event == 97) {
      this.moveTo = 'left'
    }
    console.log('state: ',this.state,', ','move to: ',this.moveTo);
  }

  userInteraction() {
    document.addEventListener('keypress',(event) => {
      this.controls(event.keyCode);
    })
  }

}

const movingElements = new MovingElements()
