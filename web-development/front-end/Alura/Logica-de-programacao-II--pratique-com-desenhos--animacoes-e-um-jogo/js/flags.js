class Flags {
  constructor() {
    this.maxWidth = 600
    this.maxHeight = 400
    this.settings = {
      flags:[
        {
          country: 'Brazil',
          colors: ['#009b3a','#fedf00','#002776'],
          forms: [
            {
              rect: {
                width: this.settings.maxWidth,
                height: this.settings.maxHeight,
                color: this.settings.flags[0].colors[0]
              },
            },
            {
              polygon: {
                startX: 10,
                startY: this.settings.maxHeight/2,
                movingPoints: [
                  {
                    x: this.settings.maxWidth/2,
                    y: 10
                  },
                  {
                    x: this.settings.maxWidth - 10,
                    y: this.settings.maxHeight/2
                  },
                  {
                    x: this.settings.maxWidth/2,
                    y: this.maxHeight - 10,
                  },
                  {
                    x: this.settings.flags[0].forms[1].polygon.startX,
                    y: this.settings.flags[0].forms[1].polygon.startY,
                  }
                ],
                color: this.settings.flags[0].colors[1]
              }
            },
            {
              circle: {
                x: this.maxWidth/2,
                y: this.maxHeight/2,
                ray: this.maxWidth/6,
                color: this.settings.flags[0].colors[2]
              }
            }
          ]
        },
        {
          country: 'Germany',
          colors: ['#000000','#dd0000','#ffce00'],
          forms: ['rect','rect','rect'],
        }
      ]
    }
  }
}
