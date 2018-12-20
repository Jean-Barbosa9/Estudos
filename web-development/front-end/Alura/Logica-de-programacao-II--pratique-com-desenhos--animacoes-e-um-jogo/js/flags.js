class Flags {
  constructor() {
    this.maxWidth = 600
    this.maxHeight = 400
    this.settings = {
      flags:[
        {
          country: 'Brazil',
          forms: [
            {
              rect: {
                width: this.maxWidth,
                height: this.maxHeight,
                color: '#009b3a'
              },
            },
            {
              polygon: {
                startX: 10,
                startY: this.maxHeight/2,
                movingPoints: [
                  {
                    x: this.maxWidth/2,
                    y: 10
                  },
                  {
                    x: this.maxWidth - 10,
                    y: this.maxHeight/2
                  },
                  {
                    x: this.maxWidth/2,
                    y: this.maxHeight - 10,
                  },
                  {
                    x: 10,
                    y: this.maxHeight/2,
                  }
                ],
                color: '#fedf00'
              }
            },
            {
              circle: {
                x: this.maxWidth/2,
                y: this.maxHeight/2,
                ray: this.maxWidth/6,
                color: '#002776'
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
