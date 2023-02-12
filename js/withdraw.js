// step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from the withdraw input field
    // For input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3: get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    console.log(withdrawTotalElement);
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
    // step-4: add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log(currentWithdrawTotal);
    // set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the withdraw field
    withdrawField.value = '';

})