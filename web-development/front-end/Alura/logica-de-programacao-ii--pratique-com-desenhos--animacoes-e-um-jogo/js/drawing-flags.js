class DrawingFlags {
  constructor() {
    this.flags = new Flags()
    this.width = document.body.offsetWidth
    this.height = this.width*0.4
    this.canvas = new DrawCanvas(this.width, this.height,'#ffffff')
    this.interval
    this.flagsList = this.flagsList()
    this.flagsLen = this.flagsList.length
    this.flagIndex = 0
    this.actualFlag = this.flagsList[this.flagIndex]
    this.nextFlag = this.flagsList[this.flagsList.indexOf(this.actualFlag)+1]
    this.formIndex = 0
    this.drawSettings()

    // esse no caso será chamado posteriormente com um clique em um botão de play
    this.drawFlag('cicle')
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
    const country = settings.flags.country //será usado para construir o select personalizado com os países disponíveis

    this.settingsOf = settings.flags[this.flagIndex]
    this.types = []
    this.formsLen = this.settingsOf.forms.length

    for(var i=0, len=this.settingsOf.forms.length;i<len;i++) {
      this.types.push(this.settingsOf.forms[i].type)
    }

  }

  stop() {
    clearInterval(this.interval)
  }

  mountForm(type, props) {
    // falta o setInterval que vai desenhar cada forma aos poucos, lembrando que será preciso chamar o clearInterval ao final de cada desenho, para que o setIterval não se acumulem

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

  drawFlag(mode='sprint') {
    this.interval = setInterval(() => {

      if(this.formIndex < this.formsLen) {
        let props = this.settingsOf.forms[this.formIndex].coords
        this.mountForm(this.types[this.formIndex],props)
        this.formIndex++
      }
      else if(this.flagIndex < (this.flagsLen - 1)) {
        this.canvas.clear(0,0,this.width,this.height)
        this.flagIndex++
        this.formIndex = 0
        this.drawSettings()
      }
      else {
        this.canvas.clear(0,0,this.width,this.height)
        //apresentação só de ida
        if(mode =='sprint') {
          this.stop()
          this.canvas.text('Fim da apresentação',this.width/2,this.height/2)
        }
        // para ter apresentação ciclica infinita
        else if (mode == 'cicle') {
          this.formIndex = 0
          this.flagIndex = 0
          this.drawSettings()
        }
      }
    },500)
  }

}

const drawingFlags = new DrawingFlags()
