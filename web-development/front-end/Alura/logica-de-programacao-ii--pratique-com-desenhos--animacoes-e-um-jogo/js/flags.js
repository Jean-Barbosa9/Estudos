class Flags {
  constructor(maxWidth = 600, maxHeight = 400) {
    this.maxWidth = maxWidth
    this.maxHeight = maxHeight
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
                moveTo: [10,this.maxHeight/2],
                lineTo: [
                  [this.maxWidth/2,10],
                  [this.maxWidth - 10,this.maxHeight/2],
                  [this.maxWidth/2,this.maxHeight - 10],
                  [10,this.maxHeight/2]
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
          forms: [
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
