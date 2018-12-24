class DrawingFlags {
  constructor() {
    this.flags = new Flags()
    this.width = document.body.offsetWidth
    this.height = this.width*0.4
    this.canvas = new DrawCanvas(this.width, this.height,'#ffffff')
    this.interval
    this.flagsList = this.flagsList()
    this.flagsLen = this.flagsList.length
    this.actualFlag = this.flagsList[0]
    this.nextFlag = this.flagsList[this.flagsList.indexOf(this.actualFlag)+1]

    this.formIndex = 0
    this.listIndex = 0


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
    types = [],
    formsLen = settingsOf.forms.length

    // for(var i=0, len=settingsOf.forms.length;i<len;i++) {
    //   types.push(settingsOf.forms[i].type)
    //   let props = settingsOf.forms[i].coords
    //   this.mountForm(types[i],props)
    // }


    // tenho que pensar em uma forma de incrementar o item que está sendo lido pela lista na hora de desenhar a bandeira


    this.interval = setInterval(() => {


      if(this.formIndex<formsLen) {
        console.log(this.actualFlag);
        console.log(this.listIndex);
        types.push(settingsOf.forms[this.formIndex].type)
        let props = settingsOf.forms[this.formIndex].coords
        this.mountForm(types[this.formIndex],props)
        this.formIndex++
        console.log('running')
      }
      else if(this.listIndex < this.flagsLen) {
        this.actualFlag = this.flagsList[this.flagsList.indexOf(this.actualFlag)+1]
        this.listIndex++
        this.formIndex = 0
        this.drawSettings()
      }
      else {
        this.stop()
        this.canvas.clear(0,0,this.width,this.height)
      }
    },1000)

  }

  stop() {
    clearInterval(this.interval)
  }

  mountForm(type, props) {
    if(type == 'circle') {
      this.canvas.circle(props.x,props.y,props.ray,props.color)
    }
    else if(type == 'rect') {
      this.canvas.rect(props.initialX,props.initialY,props.width,props.height,props.color)
    }
    else if(type == 'polygon' || type == 'line') {
      this.canvas.polygon(props)
    }
  }

  drawFlag() {
    // aqui talvez poderia vir o setInterval que desenhará a bandeira aos poucos

  }

  drawBrazilFlag() {

  }
}

const drawingFlags = new DrawingFlags()
