class HandlingElements{
  constructor () {
    this.width = document.body.offsetWidth
    this.height = this.width*0.465
    this.color = '#dedede'
    this.drawCanvas = new DrawCanvas(this.width, this.height, this.color)
    this.moveTo = 'right'
    this.ball = {
      actualX: this.width/2,
      actualY: this.height/2,
      ray: 20,
      maxRay: 50,
      color: '#ff0000',
      behavior: 'static',
      draw: () => this.drawCanvas.circle(this.ball.actualX,this.ball.actualY,this.ball.ray,this.ball.color)
    }

    this.ball.initialRay = this.ball.ray

    this.room = {
      ceilling: 10,
      right: this.width-this.ball.ray,
      flor: this.height-this.ball.ray,
      left: 10,
    }

    this.interval
    this.state = 'stoped'
    this.userInteraction()

    this.pulsing = 'initialize'
  }

  moveToTop(step=1) {
    let { draw } = this.ball
    if(this.moveTo == 'top'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualY-=step
    }
  }

  moveToRight(step=1) {
    const { draw } = this.ball
    if(this.moveTo == 'right'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualX+=step
    }
  }

  moveToBottom(step=1) {
    const { draw } = this.ball
    if(this.moveTo == 'bottom'){
      new DrawCanvas(this.width,this.height,this.color)
      draw()
      this.ball.actualY+=step
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

  grow(limited = false) {
    if(limited && this.ball.ray == this.ball.maxRay) {
      this.pulsing = 'stop growing'
      return false
    }
    else {
      this.ball.ray++
    }
  }

  shrink(limited = false) {

    if(limited && this.ball.ray == this.ball.initialRay) {
      this.pulsing = 'stop shrinking'
      return false
    }
    else {
      this.ball.ray--
    }
  }

  pulse(justPulse) {
    let pulsing = this.pulsing

    if(pulsing == 'stop shrinking' || pulsing == 'initialize') {
      this.grow(true)
    } else if(pulsing == 'stop growing') {
      this.shrink(true)
    }
    else if (justPulse) {
      this.ball.draw()//preciso pensar em como deixar o elemento parado, mas rodando o play com todas os demais métodos disponíveis
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
  }

  play(settings) {
    // settings mock
    // {
    //   movementMode: 'bounce' || 'infinity',
    //   moveTo: 'top' || 'right' || 'bottom' || 'left',
    //   intervalTime: 5 || any number in milliseconds,
    //   justPulse: true,
    // }


    this.moveTo = settings.moveTo
    this.interval = setInterval(() => {

      this.state = 'playing'

      if(settings.movementMode == 'bounce') {
        this.bounceOnRoom()
      }
      else if(settings.movementMode == 'infinity'){
        this.infinityMovement()
      }

      switch(this.moveTo) {
        case 'noWhere':
          this.ball.actualX = this.width/2
          this.ball.actualY = this.height/2
        case 'top':
        this.moveToTop()
        case 'right':
        this.moveToRight()
        case 'bottom':
          this.moveToBottom()
        case 'left':
          this.moveToLeft()
      }

      if(this.ball.behavior == 'grow') {
        this.grow(true)
      }
      else if(this.ball.behavior == 'shrink') {
        this.shrink(true)
      } else if (this.ball.behavior == 'pulse' || settings.justPulse) {
        this.pulse(settings.justPulse)
      }

    },settings.intervalTime || 5)
  }

  stop() {
    this.state = 'stoped'
    clearInterval(this.interval)
  }

  keyboardControls(event) {
    let key = event.keyCode,
    shift = event.shiftKey,
    ctrl = event.ctrlKey

    console.log(event);

    if(key == 32 && this.state == 'playing'){
      this.stop()
    }
    else if(key == 32 && this.state == 'stoped'){
      if(shift) {
        this.play({
          movementMode: 'infinity',
          moveTo: this.moveTo,
          intervalTime: 15,
          justPulse: false
        })
      }
      else {
        this.play({
          movementMode: 'bounce',
          moveTo: this.moveTo,
          intervalTime: 5,
          justPulse: false
        })
      }
    }
    else if(key == 119) {
      this.moveTo = 'top'
    }
    else if(key == 100) {
      this.moveTo = 'right'
    }
    else if(key == 115) {
      this.moveTo = 'bottom'
    }
    else if(key == 97) {
      this.moveTo = 'left'
    }
    else if(key == 71) {
      this.ball.behavior = 'grow'
    }
    else if(key == 83) {
      this.ball.bahavior = 'shrink'
    }
    else if(key == 66) {
      this.ball.behavior = 'pulse'
    }
    // console.log('state: ',this.state,', ','move to: ',this.moveTo);
  }

  mouseControls(event) {
    let pageX = event.pageX - event.target.offsetLeft,
    pageY = event.pageY - event.target.offsetTop,
    xOk = pageX > this.ball.actualX - this.ball.ray && pageX < this.ball.actualX + this.ball.ray,
    yOk = pageY > this.ball.actualY - this.ball.ray && pageY < this.ball.actualY + this.ball.ray

    if(this.state == 'playing' && xOk && yOk){
      console.log('you did it')
    }
  }

  userInteraction() {
    document.addEventListener('keypress',(event) => {
      // console.log(event.keyCode);
      this.keyboardControls(event);
    })

    this.drawCanvas.canvas.addEventListener('click',(event) => {
      this.mouseControls(event)

      this.play({
        movementMode: 'none',
        moveTo: 'noWhere',
        intervalTime: 10,
        justPulse: true
      })
    })
  }

}

const handlingElements = new HandlingElements()
