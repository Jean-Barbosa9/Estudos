// TODO: Refatorar o código para class
// class PlayOnCnvas{
//   constructor(){

//   }
// }
// variable declarations
let width = screen.width/2,
height = width*(2/3),
drawCanvas = new DrawCanvas(width,height),
colors = [
  '#0000ff',
  '#ff0000',
  '#00ff00',
  '#ffa500',
  '#80017f',
  '#ffffff',
  '#7b7a7a',
  '#add8e6',
  '#ffc0cb',
  '#90ee90',
  '#ffff00',
  '#d3d3d3'
],
selectedColorIndex = 0,
selectedColor = colors[selectedColorIndex],
message = document.querySelector('#message'),
maxSize = 40,
minSize = 5,
incrementMod = 'each time pressed',//'only when pressed','each time pressed'
incrementalStep = 10,
decrementalStep = 5,
size = 10,
canIGo = false,
colorSelector = document.querySelector('.choose-your-color'),
colorSelectorDefault = colors[0]
// functions declarations
function plotCircle (event){
  let x = event.pageX - drawCanvas.canvas.offsetLeft,
  y = event.pageY - drawCanvas.canvas.offsetTop

  if(colorSelector.value != colorSelectorDefault){
    selectedColor = colorSelector.value
  }

  verifyMod(x,y)
}

function changeColor (event){
  let x = event.pageX - drawCanvas.canvas.offsetLeft,
  y = event.pageY - drawCanvas.canvas.offsetTop

  selectedColor = colors[selectedColorIndex]
  showMessage(selectedColor)

  if(selectedColorIndex < colors.length - 1 ){
    selectedColorIndex++
  }else{
    selectedColorIndex = 0
  }
  colorSelector.value = selectedColor
  return false
}

function showMessage(color){
  message.innerHTML = `
  <span style='color: ${color}'>Selected color</span>
  <span class="thumb" style='background-color: ${color};'></span>
  `
  setTimeout(hideMessage, 5000)
}

function hideMessage(){
  message.innerHTML = ''
}

function verifyMod(x,y){
  // feature with shift or ctrl pressed + click each time
  if(event.shiftKey && (incrementMod == 'only when pressed')){
    let size = 20
    size += incrementalStep
    return drawCanvas.circle(x,y,size,selectedColor)
  }
  else if(event.ctrlKey && (size > minSize)){
    size -= decrementalStep
    return drawCanvas.circle(x,y,size,selectedColor)
  }

  // feature by shift pressDown + click incrementally and incremented size or click with ctrl
  if((incrementMod == 'each time pressed') && event.shiftKey && (size < maxSize)){
    size += incrementalStep
    return drawCanvas.circle(x,y,size,selectedColor)
  }
  else if(event.ctrlKey && (size > minSize)){
    size -= decrementalStep
    return drawCanvas.circle(x,y,size,selectedColor)
  }else {
    return drawCanvas.circle(x,y,size,selectedColor)
  }
}

function manualBrush(e){
  if(canIGo){
    plotCircle(e)
  }
}

document.querySelector('.choose-your-color').addEventListener('click',function(){
  console.log(this.value);
  // selectedColor = this.value
})

// funciotions callbacks
drawCanvas.canvas.onclick = plotCircle
drawCanvas.canvas.oncontextmenu = changeColor
drawCanvas.canvas.onmousedown = function(){
  canIGo = true
}
drawCanvas.canvas.onmouseup = function(){
  canIGo = false
}
drawCanvas.canvas.onmousemove = manualBrush

