class DrawCanvas {
  // lembrar de mudar aqui e em todos os lugares onde o canvas é desenhado por essa classe, para que a cor seja o primeiro atributo, caso eu queira alterar somente a cor e deixar tamanho padrão, só preciso setar a cor

  constructor(width = '600',height = '400',color = '#000'){
    // setting up canvas and it's brush
    this.canvas = document.querySelector('canvas')
    this.canvas.setAttribute('width',width)
    this.canvas.setAttribute('height',height)
    this.brush = this.canvas.getContext('2d')

    // drawing in fact
    this.brush.fillStyle = color
    this.brush.fillRect(0,0,width,height)

    // usefull variables
    this.arc = 2 * Math.PI
    this.topOffset = this.canvas.topOfset
    this.leftOfset = this.canvas.leftOfset
  }

  rect(initialX,initialY,width,height,color){
    this.brush.fillStyle = color
    this.brush.fillRect(initialX,initialY,width,height,color)
  }

  circle(x,y,size,color){
    this.brush.beginPath()
    this.brush.fillStyle = color
    this.brush.arc(x,y,size,0,this.arc)
    this.brush.fill()
  }

  semiCircle(x,y,size,arc,color){
    this.brush.beginPath()
    this.brush.fillStyle = color
    this.brush.arc(x,y,size,0,arc,true)
    this.brush.fill()
  }

  line(props){
    // props mock
    // {
    //   moveTo: [0,0],
    //   lineTo: [
    //     [10,10],
    //     [20,20],
    //     [30,30],//As many as you wish
    //   ],
    //   color: "#ffffff",
    // }

    this.brush.beginPath()
    this.brush.strokeStyle = props.color
    this.brush.moveTo(props.moveTo[0],props.moveTo[1])
    let lineTo = props.lineTo
    for (var i=0,len=lineTo.length;i<len;i++){
      this.brush.lineTo(lineTo[i][0],lineTo[i][1])
    }
    this.brush.stroke()
  }

  polygon(props){
    // props mock
    // {
    //   moveTo: [0,0],
    //   lineTo: [
    //     [10,10],
    //     [20,20],
    //     [30,30],//As many as you wish
    //   ],
    //   color: "#ffffff",
    // }

    this.brush.beginPath()
    this.brush.fillStyle = props.color
    this.brush.moveTo(props.moveTo[0],props.moveTo[1])
    let lineTo = props.lineTo
    for (var i=0,len=lineTo.length;i<len;i++){
      this.brush.lineTo(lineTo[i][0],lineTo[i][1])
    }
    this.brush.fill()
  }

  clear(initialX, initialY,finalX,finalY) {
    this.brush.clearRect(initialX, initialY,finalX,finalY)
  }

  text(text,x,y,color='#000000',maxLength,) {
    this.brush.fillStyle = color
    this.brush.font = '20px sans-serif'
    this.brush.fillText(text,x,y,maxLength)
  }
}
