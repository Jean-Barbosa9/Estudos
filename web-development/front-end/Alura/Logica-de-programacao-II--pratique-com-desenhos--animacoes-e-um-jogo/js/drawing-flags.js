class DrawingFlags {
  constructor() {
    this.flags = new Flags()
    this.width = document.body.offsetWidth
    this.height = this.width*0.4
    this.canvas = new DrawCanvas(this.width, this.height,'#ffffff')
    this.interval
    this.flagsList = this.flagsList()
    this.actualFlag = this.flagsList[0]
    this.nextFlag = this.flagsList[this.flagsList.indexOf(this.actualFlag)+1]
    this.drawSettings()
  }

  flagsList() {
    let flags = this.flags.settings.flags,
    flagsList = []

    for(var i=0,len=flags.length;i<len;i++) {
      flagsList.push(flags[i].country)
    }
    return flagsList
  }

  drawSettings() {
    const { maxWidth, maxHeight, settings } = this.flags
    const country = settings.flags.country
    let settingsOf = settings.flags[this.flagsList.indexOf(this.actualFlag)],
    types = []

    for(var i=0, len=settingsOf.forms.length;i<len;i++) {
      types.push(settingsOf.forms[i].type)
      this.mountForm(types[0])
    }

    console.log('types: ', types[0]);
  }

  mountForm(type) {
    if(type == 'rect') {
      this.canvas.rect(0,0,600,400,"#000")
    }
  }

  drawFlag() {

    this.canvas.rect()
  }

  drawBrazilFlag() {

  }
}

const drawingFlags = new DrawingFlags()
