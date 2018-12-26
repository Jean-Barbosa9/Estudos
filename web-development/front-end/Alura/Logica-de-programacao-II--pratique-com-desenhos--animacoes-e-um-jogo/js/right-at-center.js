class RightAtCenter {

  constructor() {
    this.width = document.body.offsetWidth
    this.height = this.width*0.468
    this.drawCanvas = new DrawCanvas(this.width,this.height,'#bbb')
    this.message = document.getElementById('message')
    this.interval
    this.settings = {
      targetLayers: 5,
      ray: 10,
      posx: this.width/2,
      posy: this.height/2,
      colors: ['#ffffff','#000000','#6fbbdc','#f13b36','#f4c808']
    }
    this.drawTarget(this.settings)
  }

  drawTarget() {
    const { targetLayers,posx,posy,colors } = this.settings

    let { ray } = this.settings,
    j = 0,
    len = colors.length

    ray = ray*targetLayers

    for(var i=0;i<targetLayers;i++){

      if(colors[i] == undefined && i%2 == 0){
        this.drawCanvas.circle(posx,posy,ray,colors[j])
        j++;
      }else if(colors[i] == undefined && i%2 > 0) {
        this.drawCanvas.circle(posx,posy,ray,colors[j])
        j++;
      }
      else {
        this.drawCanvas.circle(posx,posy,ray,colors[j])
        j++;
      }
      if(j==len){
        j = 0;
      }
      if(ray>10){
        ray-=10
      }
    }
    this.bindEvents(ray, posx, posy)
  }

  randomPositioning(max) {
    return Math.floor(Math.random() * (max - this.settings.ray) + this.settings.ray)
  }

  renderTarget(time) {
    this.interval = setInterval(()=>{
      this.settings.posx = this.randomPositioning(this.width)
      this.settings.posy = this.randomPositioning(this.height)
      new DrawCanvas(this.width,this.height,'#bbb')
      this.drawTarget()
    },time)
  }

  success(event,ray, posx, posy){
    let x = event.pageX - this.drawCanvas.canvas.offsetLeft,
    y = event.pageY - this.drawCanvas.canvas.offsetTop,
    time = 1000
    if((x >= posx - ray && x < posx + ray) || (y >= posy - ray && y < posy + ray)){
      this.message.innerHTML = 'Parabéns, você acertou o alvo! Quero ver acertar agora'
      this.message.classList.remove('hide')
      this.message.classList.add('success','show')
      setTimeout(function(){
        this.message.classList.add('hide')
        this.message.classList.remove('success','show')
      },5000)

      this.renderTarget(time)

    }else{
      this.message.innerHTML = 'Ops, você errou o alvo, tente novamente!'
      this.message.classList.remove('hide')
      this.message.classList.add('fail','show')
      setTimeout(function(){
        this.message.classList.add('hide')
        this.message.classList.remove('fail','show')
      },5000)

      this.stop()
    }
  }

  bindEvents(ray, posx, posy){
    let self = this
    this.drawCanvas.canvas.addEventListener('click',function(e){
      self.success(e,ray,posx, posy)
    })
  }

  stop() {
    clearInterval(this.interval)
  }

}

const rightAtCenter = new RightAtCenter()
