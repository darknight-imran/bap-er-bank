document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // deposite Amount add 
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = parseFloat(depositeTotal.innerText);
    const depositeTotalAmount = depositeTotalText + depositeAmount;
    depositeTotal.innerText = depositeTotalAmount;

    // uptade balance total add
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previusBalanceTotal = parseFloat(totalBalanceText);
    const newTotalBalanceAmount = previusBalanceTotal + depositeAmount;
    totalBalance.innerText = newTotalBalanceAmount;
    // deposite Amount feiled clear
    depositeInput.value = '';
});

