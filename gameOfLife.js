function determineNewState(aliveCount, deadCount, initialCellState){
  if(initialCellState){
    if(aliveCount < 2 || aliveCount > 3){
      return false
    }
    if(aliveCount == 2 || aliveCount == 3){
      return true
    }
  }

  if(!initialCellState){
    if(aliveCount == 3){
      return true
    }
  }else{
    return false
  }
  
  return false

}

function gameOfLife(initialState) {
  
  var updatedState = []

  //iterate over rows
  for(var y = 0; y < initialState.length; y++){
    
    var updatedRow = []
    //iterate over columns within each row
      for(var x = 0; x < initialState[y].length; x++){
        deadCount = 0
        aliveCount = 0
        //check all the surroundings
        //check left

        if(x > 0){
          let leftCell = initialState[y][x-1]
          if(leftCell){aliveCount++}else{deadCount++}
        }
        
        //check upper left
        if(x > 0 && y > 0){
          let upperLeftCell = initialState[y-1][x-1]
          if(upperLeftCell){aliveCount++}else{deadCount++}
        }
        
        //check above
        if(y > 0){
          let aboveCell = initialState[y-1][x]
          if(aboveCell){aliveCount++}else{deadCount++}
        }
        
        //check upper right
        if(x < initialState[y].length-1 && y > 0){
          let upperRightCell = initialState[y-1][x+1]
          if(upperRightCell){aliveCount++}else{deadCount++}
        }

        //check right
        if(x < initialState[y].length-1){
          let rightCell = initialState[y][x+1]
          if(rightCell){aliveCount++}else{deadCount++}
        }
       
        //check lower right
        if(x < initialState[y].length-1 && y < initialState.length-1){
          let lowerRightCell = initialState[y+1][x+1]
          if(lowerRightCell){aliveCount++}else{deadCount++}
        }
       
        //check below
        if(y < initialState.length - 1){
          let belowCell= initialState[y+1][x]
          if(belowCell){aliveCount++}else{deadCount++}
        }
       
        //check lower left
        if(x > 0 && y < initialState.length - 1){
          let lowerLeftCell = initialState[y+1][x-1]
          if(lowerLeftCell){aliveCount++}else{deadCount++}
        }
        
        //determine new state based on alive/dead neighbor count
        let newState = determineNewState(aliveCount,deadCount, initialState[y][x])

        updatedRow.push(newState)

      }
      updatedState.push(updatedRow)
  }
 
  return updatedState;
}


module.exports = gameOfLife;