// //? Minesweeper Plan 

// // ! elements 
// const grid = document.querySelector('.grid')
// const resetBtn = document.querySelector('#reset')
// const cells = document.querySelectorAll('.cell')


// // ? variables 

// // Grid creation  default: Beginner level dimensions . used for MVP
// let gridWidth = 8
// let gridHeight = 8 

// let gridSize = gridWidth * gridHeight 
// const cells = [] 

 

// // Variables for mine generation 
// let mineDensity = 0.156   // standard for beginner and intermediate minesweeper , 0.206 for Expert. Used in generation. 
// let number_Of_Mines = Math.floor(mineDensity * gridSize) 
// let randCells = new set()
// const randomRow = Math.floor(Math.random() * gridSize)
// const randomColumn = Math.floor(Math.random() * gridSize)


// // variables for sweeper 
// let innerCell  




// //! Grid creation 
// function createGrid {
// /* indexing our grid columns and rows using notation for x and y directions indexes i and j respectively 
// - index i will allow us to transverse the grid by row 
// - index j will allow us to transverse the grid by column
// */
// }





// /* indexing our grid columns and rows using notation for x and y directions indexes i and j respectively 
// - index i will allow us to transverse the grid by row 
// - index j will allow us to transverse the grid by column
// */


// //! Executables 



// // ?Main 

// /* generate_mines will contain two sub functions randCells and populateMines : 
// - randomly generate number of mines at cell locations 
// - recurrsively call itself for uniqueness  . this is to prevent selecting the same element twice 
// - return random row and column indices respect to our i and j notation 
// - populate the chosen randCells with mines 
// */ 
// **********************************************************************************************
// function generate_Mines {      
// }


//   // sub function randCells: selecting which cells to populate with mines 

// function randCells {
// // checks if number of randCells === number_of_mines
// // if number not reached select a new cell and generate row and column
// // check if already in the set randCells using key pair ?
// // if not add to the set .add or .push to randCells 
// // if already recursive call and go back to start to get a new cell
// // using an if else we can check if the set contains the chosen location and use backtracking if cell is selected 
// }


// function populateMines {
// // sets are not manipulated in the Dom so we assign the class .mine to the cells we generated
// // style with bg image in css 

// }

// function primeMines { 
// // sets mines by placing event listener for left clicks 
// }



// **********************************************************************************************
// /* Sweeper will : 
// - check for bombs recurssively with cellTest
// - return data attribute single index for number of bombs touching a cell using innerCell variable
// - **** note :define innerCell in terms of i and j wrt bomb positions @ randCells --think of max number
// - call explode to kill the player if a bomb is clicked 

// */ 

// function sweeper {

// }

//   // Sub function : cellTest 

//   function cellTest {
// /* 

// Is the player dead / was a bomb clicked?  ** The first click death may be addressed as a bonus 
// if so call explode 

// if no run recurssive test for class of .mine :
// create a set of surrounding cells 
//  to consider up down left right and diagonal elements we check permutations of index coordinates
//      +i , +-j , 0 
//      -i , +-j, 0
 


// check if cell defined , check bomb 

// if defined check if already in the set using key 
// add to the set 
// if not defined recursive call until all defined are checked 



// */

// //! note : use this idea to auto reveal empty squares by testing for any elements in a surrounding set , how do i hop across more than surrounding
// /*

// considerations of edge cases 
// 1 : checking the position in a corner of the grid 
// 2 : top/bottom rows and left/right columns 
// */
// }


// function placeFlag { 
//  // assigns a .flag class displaying the style in css  
// //disables left click 

// // read image overlayering 
// }


// function explode {
// // execution is triggered by celltest 
// // square turns red -> .explode class
// //reveals bombs 
// //-> ends game  . sad class on button 
// }



// function reset {
// //calls generate_mines


// }
// ****************************************************************************************************

// //! Events 
// // auto generate the game to beginner on pageload 
// // event listener on every grid .forEach both left click ( cellTest) , right click (placeFlag)

// // button above the grid click -> reset game -> calls function generate_mines 

// // reset button -> calls function reset 

// // level won windpw alert -> congratulations 



// //!Pageload 
// //createGrid and generate_mines



// //? MVP
// /*
// working game for beginner level parameters 
// game ends upon death revealing bombs and turning clicked red 
// notification when level has been cleared 


// */



// //? Extras 
// /* option for intermediate level with a 16x16 and advanced with an increased mineDensity to 0.206
// functional highscore stored locally 