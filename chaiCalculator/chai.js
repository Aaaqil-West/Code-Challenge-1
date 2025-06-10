// Function to calculate the required ingredients for making Kenyan Chai based on the number of cups
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;      // Amount of water needed per cup in milliliters
  const milkPerCup = 50;        // Amount of milk needed per cup in milliliters
  const teaLeavesPerCup = 1;    // Amount of tea leaves needed per cup in tablespoons
  const sugarPerCup = 2;        // Amount of sugar needed per cup in teaspoons

  // Calculate total amount of each ingredient by multiplying per cup quantities by the number of cups
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Display the total quantities needed for the given number of cups
  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)\n`);
  console.log("Enjoy your Chai Bora!");  // Friendly message to enjoy the tea
}

// Prompt the user to input how many cups of chai they want to make
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");

// Convert the user input from a string to a number
const numberOfCups = Number(input);

// Validate that the input is a valid positive number
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  // If valid, calculate and display the ingredients required
  calculateChaiIngredients(numberOfCups);
} else {
  // If invalid input, show an error message
  console.log("Please enter a valid number of cups.");
}