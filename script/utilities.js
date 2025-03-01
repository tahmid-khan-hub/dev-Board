
function setBtnAttributeAndClassList(id){
    document.getElementById(id).setAttribute('disabled', true);
    document.getElementById(id).classList.add('bg-gray-300')
}
function convertIntoNumber(id){
    const num =  parseInt(document.getElementById(id).innerText)
    return num; 
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}