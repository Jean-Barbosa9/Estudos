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
              type: 'rect',
              coords: {
                initialX: 0,
                initialY: 0,
                width: this.maxWidth,
                height: this.maxHeight,
                color: '#009b3a'
              },
            },
            {
              type: 'polygon',
              coords: {
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
              type: 'circle',
              coords: {
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
          forms: [
            {
              type: 'rect',
              coords: {
                initialX: 0,
                initialY: 0,
                width: this.maxWidth,
                height: this.maxHeight/3,
                color: '#000000'
              }
            },
            {
              type: 'rect',
              coords: {
                initialX: 0,
                initialY: this.maxHeight/3,
                width: this.maxWidth,
                height: this.maxHeight/3,
                color: '#dd0000'
              }
            },
            {
              type: 'rect',
              coords: {
                initialX: 0,
                initialY: this.maxHeight*0.6667,
                width: this.maxWidth,
                height: this.maxHeight/3,
                color: '#fce000'
              },
            }
          ],
        },
        {
          country: 'Italy',
          form: [
            {
              type: 'rect',
              coords: {
                initialX: 0,
                initialY: 0,
                width: this.maxWidth/3,
                height: this.maxHeight,
                color: '#009144'
              },
            },
            {
              type: 'rect',
              coords: {
                initialX: this.maxWidth/3,
                initialY: 0,
                width: this.maxWidth/3,
                height: this.maxHeight,
                color: '#ffffff'
              }
            },
            {
              type: 'rect',
              coords: {
                initialX: this.maxWidth*0.6667,
                initialY: 0,
                width: this.maxWidth/3,
                height: this.maxHeight,
                color: '#cd2b38'
              },
            }
          ]
        }
      ]
    }
  }
}
