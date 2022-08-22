
function getInputElementValueById(elementFieldId){
    const elementField = document.getElementById(elementFieldId);
    const elementFieldString = elementField.value ; 
    const elementValue = parseFloat(elementFieldString);
    if(isNaN(elementValue)){
        alert('pleassee provite a valid Number');
        return;
    }
    elementField.value = '';
    return elementValue;
};

function getTextElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText ; 
    const elementValue = parseFloat(elementFieldString);
    return elementValue;
};

function setElementValueById(element, value){
    const textElement = document.getElementById(element);
    textElement.innerText = value;
}





