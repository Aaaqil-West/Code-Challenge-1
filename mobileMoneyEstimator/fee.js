function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015;
  const fee = Math.min(Math.max(percentageFee, 10), 70);
  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely!");
}

const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali andika kiasi sahihi cha kutuma.");
}