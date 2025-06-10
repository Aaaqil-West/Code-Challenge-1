// Function to estimate the transaction fee based on the amount to send
function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% fee of the amount to send
  const percentageFee = amountToSend * 0.015;
  
  // Ensure the fee is at least 10 KES but no more than 70 KES
  // Math.max ensures minimum fee is 10
  // Math.min ensures maximum fee is 70
  const fee = Math.min(Math.max(percentageFee, 10), 70);
  
  // Total amount that will be debited from sender's account (amount + fee)
  const totalDebited = amountToSend + fee;

  // Output the transaction details to the console
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely!");
}

// Prompt user for amount to send in Kenyan Shillings
const input = prompt("Unatuma Ngapi? (KES):");

// Convert the input string to a number
const amountToSend = Number(input);

// Check if the input is a valid number and greater than zero
if (!isNaN(amountToSend) && amountToSend > 0) {
  // If valid, estimate the transaction fee and display info
  estimateTransactionFee(amountToSend);
} else {
  // If invalid input, show an error message
  console.log("Tafadhali andika kiasi sahihi cha kutuma.");
}
