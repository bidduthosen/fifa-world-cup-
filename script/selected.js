// document.getElementById('select-btn').addEventListener('click', function(){
//     const playersName = document.getElementById('players-name');
//     const previousePlayersName = playersName.innerText;
    
//     const playerAddName = document.getElementById('player-add');
//     const newPlayers = document.createElement('li');

// })




// budget -------

document.getElementById('calculate-btn').addEventListener('click', function(){

    const parPlayerAmound =getInputElementValueById('par-player-input-field')
    const currentParPlayerAmound = parPlayerAmound * 5;
    setElementValueById('Player-expenses', currentParPlayerAmound);
});


document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managetBudgetElement = getInputElementValueById('manager-budget-field');
    const coachBudgetElement = getInputElementValueById('coach-budget-field');
    const playerExpenses = getTextElementValueById('Player-expenses');
    
    const currentTotalAmount = managetBudgetElement + coachBudgetElement + playerExpenses;
    const totalAmoundElement = getTextElementValueById('total-amound');
    setElementValueById('total-amound', currentTotalAmount);
})
