class MovingElements{
  constructor () {
    this.width = document.body.offsetWidth
    this.height = this.width*0.465
    this.color = '#dedede'
    this.drawCanvas = new DrawCanvas(this.width, this.height, this.color)
    this.moveTo = 'right'
    this.ball = {
      actualX: this.width/2,
      actualY: this.height/2,
      size: 20,
      color: '#ff0000',
      draw: () => this.drawCanvas.circle(this.ball.actualX,this.ball.actualY,this.ball.size,this.ball.color)
    }

    this.room = {
      ceilling: 10,
      right: this.width-this.ball.size,
      flor: this.height-this.ball.size,
      left: 10,
    }

    this.interval
    this.state = 'stoped'
    this.userInteraction()
  }

  moveToTop(step=1) {
    let { draw } = this.ball
    if(this.moveTo == 'top'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualY-=step
    }
    // console.log(this.ball.actualY);
    // console.log('chegou em y=10? ',this.ball.actualY == 10);
  }

  moveToRight(step=1) {
    const { draw } = this.ball
    if(this.moveTo == 'right'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualX+=step
    }
    // console.log('x ',this.ball.actualX);
    // console.log('chegou em x = width? ',this.ball.actualX > this.room.right && this.ball.actualX < this.width);
  }

  moveToBottom(step=1) {
    const { draw } = this.ball
    if(this.moveTo == 'bottom'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualY+=step
      console.log('y = ' ,this.ball.actualY,', chão = ',this.room.flor);
      console.log('chegou no chão',this.ball.actualY > this.room.flor && this.ball.actualY < this.height);
    }
  }

  moveToLeft(step=1) {
    let { draw } = this.ball
    if(this.moveTo == 'left'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualX-=step
    }
  }

  bounceOnRoom() {
    if(this.ball.actualX < this.room.left && this.ball.actualX > 0){
      this.moveTo = 'right'
    }
    else if(this.ball.actualX > this.room.right && this.ball.actualX < this.width){
      this.moveTo = 'left'
    }
    else if(this.ball.actualY > this.room.flor && this.ball.actualY < this.height){
      this.moveTo = 'top'
    }
    else if(this.ball.actualY < this.room.ceilling && this.ball.actualY > 0){
      this.moveTo = 'bottom'
    }
  }

  infinityMovement() {
    if(this.ball.actualX < this.room.left && this.ball.actualX > 0) {
      this.ball.actualX = this.room.right
    }
    else if(this.ball.actualX > this.room.right && this.ball.actualX < this.width){
      this.ball.actualX = this.room.left
    }
    else if(this.ball.actualY < this.room.ceilling && this.ball.actualY > 0) {
      this.ball.actualY = this.room.flor
    }
    else if(this.ball.actualY > this.room.flor && this.ball.actualY < this.height) {
      this.ball.actualY = this.room.ceilling
    }
    console.log('this.width-10');

  }

  play(opt, move) {
    console.log(moveTo);
    this.moveTo = move
    this.interval = setInterval(() => {
      this.state = 'playing'
      if(opt == 'bounce') {
        this.bounceOnRoom()
      }
      else {
        this.infinityMovement()
      }
      this.moveToTop()
      this.moveToRight()
      this.moveToBottom()
      this.moveToLeft()
    },5)
  }

  stop() {
    this.state = 'stoped'
    clearInterval(this.interval)
  }

  controls(event) {
    if(event.keyCode == 32 && this.state == 'playing'){
      this.stop()
    }
    else if(event.keyCode == 32 && this.state == 'stoped'){
      console.log(this.moveTo);
      if(event.shiftKey) {
        this.play('infinity',this.moveTo)
      }else {
        this.play('bounce',this.moveTo)
      }
    }
    else if(event.keyCode == 119) {
      this.moveTo = 'top'
    }
    else if(event.keyCode == 100) {
      this.moveTo = 'right'
    }
    else if(event.keyCode == 115) {
      this.moveTo = 'bottom'
    }
    else if(event.keyCode == 97) {
      this.moveTo = 'left'
    }
    console.log('state: ',this.state,', ','move to: ',this.moveTo);
  }

  userInteraction() {
    document.addEventListener('keypress',(event) => {
      console.log(event);
      this.controls(event);
    })
  }

}

const movingElements = new MovingElements()
