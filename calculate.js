document.getElementById("calculate-btn").addEventListener('click', function () {
    const perPlayerCostInput = document.getElementById('per-player-cost');
    const perPlayerCostInputString = perPlayerCostInput.value;
    const perPlayerCostValue = parseFloat(perPlayerCostInputString);
    const alength = playerArray.length;
    const playerCost = perPlayerCostValue * alength;
    const playerExpenses = document.getElementById('player-expense');
    playerExpenses.innerText = playerCost;
})
document.getElementById('total-calculate').addEventListener('click', function () {
    const managerCostInput = document.getElementById('manager-cost');
    const managerCostInputString = managerCostInput.value;
    const managerCostValue = parseFloat(managerCostInputString);

    const coachCostInput = document.getElementById('coach-cost');
    const coachCostInputString = coachCostInput.value;
    const coachCostValue = parseFloat(coachCostInputString);
    const playerExpenses = document.getElementById('player-expense');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesValue = parseFloat(playerExpensesString);
    const newTotalCost = playerExpensesValue + managerCostValue + coachCostValue;

    const totalCost = document.getElementById('final-total');

    totalCost.innerText = newTotalCost;
})