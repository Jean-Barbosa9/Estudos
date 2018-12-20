class DrawingFlags {
  constructor() {
    this.flags = new Flags()
    this.width = document.body.offsetWidth
    this.height = document.body.offsetheight
    this.canvas = new DrawCanvas(this.width, this.height,'#ffffff')
    console.log(this.flags.settings.flagMaxWidth);

  }
}

const drawingFlags = new DrawingFlags()
