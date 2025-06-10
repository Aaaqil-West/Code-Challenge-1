// Function to calculate and display the boda boda fare based on distance
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;          // Base fare charged for the ride
  const chargePerKm = 15;       // Charge per kilometer

  // Calculate fare for the given distance
  const farePerKm = distanceInKm * chargePerKm;
  
  // Calculate total fare by adding base fare and fare per km
  const totalFare = baseFare + farePerKm;

  // Display the details of the fare calculation to the console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);     // "Where are you? It is X km:"
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);        // Base fare message
  console.log(`Mpaka Uko: KES ${farePerKm}`);               // Fare based on distance message
  console.log(`Total: KES ${totalFare}\n`);                  // Total fare message
  console.log("Panda Pikipiki!");                            // Encouragement message "Hop on the boda boda!"
}

// Prompt the user to enter the distance they want to travel
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
// Convert the user input from string to a number
const distanceInKm = Number(input);

// Validate input: check if the distance is a number and greater than 0
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  // If valid, calculate and display the fare
  calculateBodaFare(distanceInKm);
} else {
  // If invalid, show an error message
  console.log("Tafadhali andika umbali sahihi kwa kilomita."); // "Please enter a valid distance in kilometers."
}