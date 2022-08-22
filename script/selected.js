/*-----------------------
  Selected Five player
---------------------------*/
const playerArray = [];
function addPlayeraElementById(player){
    const playerName = player.parentNode.children[0].innerText;
    const playerobject ={
        playerName : playerName,
    };

    playerArray.push(playerobject);
    document.getElementById('total-added-name').innerText = playerArray.length;

    const selectPlayerName = document.getElementById('select-player-name');

    const li = document.createElement('li');
    li.innerHTML =`
    <li class="list-group-item py-2 list-group-numbered">${playerName}</li>
    `;
    selectPlayerName.appendChild(li);
};

/*-----------------------
          budget
-------------------------*/
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
});