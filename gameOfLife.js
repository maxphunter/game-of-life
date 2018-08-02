function gameOfLife(initialState) {
  
  var updatedState = []

  //iterate over rows
  for(var y = 0; y < initialState.length; y++){

    //iterate over columns within each row
      for(var x = 0; x < initialState[y].length; x++){

        //check all the surroundings
        //check left
        let leftCell = initialState[x-1][y]
        //check upper left
        let upperLeftCell = initialState[x-1][y-1]
        //check above
        let aboveCell = initialState[x][y-1]
        //check upper right
        let upperRightCell = initialState[x+1][y-1]
        //check right
        let rightCell = initialState[x+1][y]
        //check lower right
        let lowerRightCell = initialState[x+1][y+1]
        //check below
        let belowCell= initialState[x][y]
        //check lower left
        let lowerLeftCell = initialState[x-1][y+1]

        //count total alive
        //count total dead

        //determine new state based on alive/dead neighbor count

        //write new state to updated array


      }


  }


}
module.exports = gameOfLife;