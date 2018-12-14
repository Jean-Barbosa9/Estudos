// entender melhor a orientação a objetos para destrinchar melhor esses métodos e objetos que podem ser usados no canvas como uma "biblioteca"

class GeometricForms {
  constructor() {
    this.props = {
      x: x,
      y: y,
      color: color,
      type: type,
    }
  }
}

class Circle extends GeometricForms {
  constructor(x,y,ray,color) {
    super(x,y,color,'circle')
    this.ray = ray
  }
}
class Rect extends GeometricForms {
  constructor(width,height,x,y,color) {
    super(x,y,color,'circle')
    this.width = width
    this.height = height
  }
}


// a ideia é que o canvas tenha no constructor só a declaração do canvas e do contexto. Draw seria um método do canvas, que pegaria as classes de forma geométrica, para desenhá-la. Seu uso seria conforme abaixo
let canvas = new Canvas()
let circle = new Circle(1,2,10,'red')
let circle2 = new Circle(2,4,20,'blue')
setInterval(() => {
  if(circle.props.x == 0){
    circle.props.x +=10
  }else if(circle.props.x == 400) {
    circle.props.x -=10
  }
  // nesse caso o draw deveria prever um argumento no formato em array, para desenhar a forma que foi definida em props.type
  canvas.draw([circle,circle2])

},10)

draw(objs) {
  // for objs
  // if(item.props.type == circle){
    // this.brush.beginPath()...
  // }
}
