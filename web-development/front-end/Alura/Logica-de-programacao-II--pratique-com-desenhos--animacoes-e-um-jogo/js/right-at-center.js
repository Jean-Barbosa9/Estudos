class RightAtCenter {

  constructor() {
    let width = screen.width/2,
    height = width*(2/3)

    this.drawCanvas = new DrawCanvas(width,height,'#dedede')

    this.drawTarget(10,width/2,height/2)

    this.message = document.getElementById('message')
  }

  drawTarget(n,posx,posy,colors = ['red','white']) {
    let r = 10*n,
    j = 0,
    len = colors.length

    for(var i=0;i<n;i++){

      if(colors[i] == undefined && i%2 == 0){
        this.drawCanvas.circle(posx,posy,r,colors[j])
        j++;
      }else if(colors[i] == undefined && i%2 > 0) {
        this.drawCanvas.circle(posx,posy,r,colors[j])
        j++;
      }
      else {
        this.drawCanvas.circle(posx,posy,r,colors[j])
        j++;
      }
      if(j==len){
        j = 0;
      }
      if(r>10){
        r-=10
      }
    }
    this.bindEvents(r, posx, posy)
  }

  success(event,r, posx, posy){
    let x = event.pageX - this.drawCanvas.canvas.offsetLeft,
    y = event.pageY - this.drawCanvas.canvas.offsetTop
    if((x >= posx - r && x < posx + r) || (y >= posy - r && y < posy + r)){
      this.message.innerHTML = 'Parabéns, você acertou o alvo!'
      this.message.classList.remove('hide')
      this.message.classList.add('success','show')
      setTimeout(function(){
        this.message.classList.add('hide')
        this.message.classList.remove('success','show')
      },5000)

    }else{
      this.message.innerHTML = 'Ops, você errou o alvo, tente novamente!'
      this.message.classList.remove('hide')
      this.message.classList.add('fail','show')
      setTimeout(function(){
        this.message.classList.add('hide')
        this.message.classList.remove('fail','show')
      },5000)
    }
  }

  bindEvents(r, posx, posy){
    let self = this
    this.drawCanvas.canvas.addEventListener('click',function(e){
      self.success(e,r,posx, posy)
    })
  }

}

window.onload = () => {
  if(document.readyState == 'complete') {
    const rightAtCenter = new RightAtCenter()
  }
}
