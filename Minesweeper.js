//? Minesweeper
window.onload = function(){
  // ! elements 

  const gridWrapper = document.querySelector('.grid_wrapper')
  const resetButton  = document.querySelector('.reset_button')
  const Seconds = document.querySelector('.Seconds')

  // ? variables 

  // Grid creation  default: Beginner level dimensions . used for MVP
  let gridWidth = 16
  let gridHeight = 16
  let gridSize = gridWidth * gridHeight 
  const cells = [] 


  // Variables for mine generation 
  let mineDensity = 0.156   // standard for beginner and intermediate minesweeper , 0.206 for Expert. Used in generation. 
  let number_Of_Mines = Math.floor(mineDensity*gridSize)


  // variables for Sweeping
  const colors = {1: 'blue', 2: 'green', 3: 'red', 4: 'navy', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'}
  let checkedCells = []
  let secondsCount = 0
  


  //! Grid creation 
  //createGrid 
  /* indexing our grid columns and rows using notation for x and y directions indexes i and j respectively 
  - index i will allow us to transverse the grid by row  
  - index j will allow us to transverse the grid by column
  */

  for (let i = 0; i< gridHeight; i++ ) { 
    const newRow =[]  

    for ( let j = 0; j< gridWidth; j++) {
      const cell = document.createElement("div")
      cell.classList.add("cell")
      cell.setAttribute("id", `(${i},${j})`)
      gridWrapper.appendChild(cell)
      newRow.push(cell)
    }
    cells.push(newRow)
  }

  console.log(cells)
  console.log(number_Of_Mines)

  // **********************************************************************************************
  //! Executables 

  // ?Main 

  /* n two sub functions randomMinePosition and populateMines : 
  - randomly generate number of mines at cell locations (i,j)
  - recurrsively call itself for uniqueness  . this is to prevent selecting the same element twice 
  - return random i and column indices respect to our i and j notation 
  - populate the chosen randCells with mines 
  */ 

  // **********************************************************************************************
  const minePositions = []
  
  function randMinePosition () {
    // check if enough mine positions are generated 
    if (minePositions.length === number_Of_Mines) {
      return
    }
    
    // if number not reached select a new cell and generate i and column
    const i = Math.floor(Math.random() * gridHeight)
    const j = Math.floor(Math.random() * gridWidth)
    
    // check if the position is already chosen
    const position = `${i},${j}`
  
    if (!minePositions.includes(position)) {
      // Add the position to the minePositions array
      minePositions.push(position)
    }
    
    // recursive call to repeat
    randMinePosition()
  }
  // 
  function populateMines () {
      for (let x = 0; x < minePositions.length; x++) {
        const position = minePositions[x].split(',')
        const i = parseInt(position[0])
        const j = parseInt(position[1])
      
        // Add a class to the corresponding cell element
        cells[i][j].classList.add('mine')

      // Add event listener to cell with class 'mine'
      cells[i][j].addEventListener('click', function() {
      explode(cells[i][j])
      })
    }
  }

   // call both functions 
   randMinePosition()   
   populateMines() 
   
   console.log(minePositions) // array of string arrays 



  function explode (cell) {
    cell.classList.add('explode')
    resetButton.classList.add('endgame')
   
    var explosion = document.getElementById("explosion")
    explosion.play()
    
    cells.forEach(function(row) {
      row.forEach(function(cellInRow) {
        if (cellInRow.classList.contains('mine') && cellInRow !== cell) {
          cellInRow.classList.add('reveal')
        }
      })
    })
  }
  
 // **********************************************************************************************
 //! recurrsive 
   // checking adjacent cells and returning the number of surrounding mines 
  
   function surroundingMines(i, j, checkedCells) {
    const adjacentCells = 
    [ [i- 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1]
    ]
  
    let mineCount = 0
    adjacentCells.forEach(cell => {
      const [i, j] = cell
    
      if (i >= 0 && i < gridHeight && j >= 0 && j < gridWidth) {
        if (cells[i][j].classList.contains("mine")) {
          mineCount++
        }
      }
    })
  
    if (mineCount === 0) {
      cells[i][j].classList.add('empty')
      adjacentCells.forEach(cell => {
        const [i, j] = cell
        if (i >= 0 && i < gridHeight && j >= 0 && j < gridWidth) {

          if (!checkedCells.includes(`${i},${j}`)) {
            checkedCells.push(`${i},${j}`)
            surroundingMines(i, j, checkedCells)
          }
        }
      })
    } else {
      cells[i][j].classList.add('checked')
      const span = document.createElement('span')
      span.innerHTML = mineCount
      span.style.color = colors[mineCount]
      cells[i][j].innerHTML = ''
      cells[i][j].appendChild(span)
    }
  
    return mineCount
  }

  function startTimer() {
    setInterval(function() {
      secondsCount++
  
      Seconds.innerHTML = secondsCount.toString().padStart(2, '0')
  
    }, 1000)
  }


  
    //****************************************************************************************************

    //! Events 
    // auto generate the game to beginner on pageload 
    // event listener on every grid .forEach both left click ( cellTest) , right click (placeFlag)
    const allcells = document.querySelectorAll('.cell')

    allcells.forEach(cell => {
      cell.addEventListener('click', function() {
      if (cell.classList.contains('mine')) {
        explode() // ends the game 
      }
          const cellId = cell.id.slice(1, -1) // remove parentheses from cell ID string
          const [i, j] = cellId.split(',').map(Number) // split string into two substrings and parse as numbers
          const adjacent_num = surroundingMines(i, j,checkedCells)


         if (adjacent_num ===0){ 
          surroundingMines(i, j,checkedCells)
         }

         else{
          cell.classList.add('checked')
          const span = document.createElement('span') // creates a new span element
          span.innerHTML = adjacent_num
          span.style.color = colors[adjacent_num] // assign color based on mine count value to colors object 
          cell.innerHTML = '' // clear the cell contents
          cell.appendChild(span) // add the span element to the celldisplaying to player 



          if (Gamebar.classList.contains('started') === false) {
            Gamebar.classList.add('started')
            startTimer()
          }

         }
      })
    })
    
    // place flag 
    allcells.forEach(cell => {
      cell.addEventListener('contextmenu', function(e) {
        e.preventDefault() // prevent the default context menu from appearing
        cell.classList.add('flag')
      })
    })
  

    // button above the grid click -> reset 
  
    resetButton.addEventListener('click', () => {
    location.reload()
    })



  
  
}