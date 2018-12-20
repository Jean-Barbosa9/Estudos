class DrawingFlags {
  constructor() {
    this.flags = new Flags()
    this.width = document.body.offsetWidth
    this.height = this.width*0.4
    this.canvas = new DrawCanvas(this.width, this.height,'#ffffff')
    console.log(this.flags.settings.flagMaxWidth);

  }

  drawBrazilFlag() {

  }
}

const drawingFlags = new DrawingFlags()
