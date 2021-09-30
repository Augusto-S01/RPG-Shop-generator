import {Armor,armorList} from "./classItem.js"
// Hide/unhide EnableGenWeapon

var displayWeaponCofigs = false;
var divOptionAllWeapon  = false;
var divGenAllWeapons    = false;
var divVarEcoWeapons    = false;


const checkboxEnableGenWeapon = document.querySelector("#inputCheckboxEnableGenWeapon");
checkboxEnableGenWeapon.addEventListener("click", function () {
    const divContainerAllOptionWeapon = document.querySelector("#divContainerAllOptionsWeapon");
    if(divOptionAllWeapon) {
        divContainerAllOptionWeapon.classList.add("hide");
        divOptionAllWeapon = false;
    }else{
        divContainerAllOptionWeapon.classList.remove("hide");
        divOptionAllWeapon = true;
    }
    }    
)

const inputCheckboxDisableOutOfStockWeapon = document.querySelector("#inputCheckboxDisableOutOfStockWeapon");
inputCheckboxDisableOutOfStockWeapon.addEventListener("click",function(){
    const divOutOfStockWeapon = document.querySelector("#divOutOfStockWeapon")
    const containerAllOutOfStockWeapon = document.querySelector("#containerAllOutOfStockWeapon");
    

    if(divGenAllWeapons){
        divOutOfStockWeapon.classList.add("hide");
        containerAllOutOfStockWeapon.classList.add("hide");
        divGenAllWeapons = false;
    }else{
        divOutOfStockWeapon.classList.remove("hide");
        containerAllOutOfStockWeapon.classList.remove("hide");
        divGenAllWeapons = true;
    }
    
    }
)



const inputRadioOutOfStockTypeGenFaltandoWeapon = document.querySelector("#inputRadioOutOfStockTypeGenFaltandoWeapon");
const inputRadioOutOfStockTypeGenNumeroWeapon = document.querySelector("#inputRadioOutOfStockTypeGenNumeroWeapon");

inputRadioOutOfStockTypeGenFaltandoWeapon.addEventListener("click",OutofStockVisibilityWeapon);
inputRadioOutOfStockTypeGenNumeroWeapon.addEventListener("click",OutofStockVisibilityWeapon);
function OutofStockVisibilityWeapon(){
    const divItensGenWeapon = document.querySelector("#divItensGenWeapon");
    const divItensFaltandoGenWeapon = document.querySelector("#divItensFaltandoGenWeapon");
    var radioButtonActive = document.querySelector('input[name=radioOutOfStockTypeWeapon]:checked').value;
    console.log(radioButtonActive)
    if(radioButtonActive == "faltandoWeapon"){
        divItensGenWeapon.classList.add("hide");
        divItensFaltandoGenWeapon.classList.remove("hide");
       

    }
    if(radioButtonActive == "numeroFixGenWeapon"){
        divItensGenWeapon.classList.remove("hide");
        divItensFaltandoGenWeapon.classList.add("hide");

    }
    
}

const inputCheckboxEnableVarEcoWeapon = document.querySelector("#inputCheckboxEnableVarEcoWeapon");
inputCheckboxEnableVarEcoWeapon.addEventListener("click",function(){
    const containerAllVarEcoOptionWeapon = document.querySelector("#containerAllVarEcoOptionWeapon");
    if(divVarEcoWeapons){
        containerAllVarEcoOptionWeapon.classList.add("hide");
        divVarEcoWeapons = false;
    }else{
        containerAllVarEcoOptionWeapon.classList.remove("hide");
        divVarEcoWeapons = true;
    }
})




//---------------------------------------------------------------------------------------------------------------// 



// Hide/unhide EnableGenArmor

var displayArmorCofigs = false;
var divOptionAllArmor  = false;
var divGenAllArmors    = false;
var divVarEcoArmors    = false;



const checkboxEnableGenArmor = document.querySelector("#inputCheckboxEnableGenArmor");
checkboxEnableGenArmor.addEventListener("click", function () {
    const divContainerAllOptionArmor = document.querySelector("#divContainerAllOptionsArmor");
    if(divOptionAllArmor) {
        divContainerAllOptionArmor.classList.add("hide");
        divOptionAllArmor = false;
    }else{
        divContainerAllOptionArmor.classList.remove("hide");
        divOptionAllArmor = true;
    }
    }    
)

const inputCheckboxDisableOutOfStockArmor = document.querySelector("#inputCheckboxDisableOutOfStockArmor");
inputCheckboxDisableOutOfStockArmor.addEventListener("click",function(){
    const divOutOfStockArmor = document.querySelector("#divOutOfStockArmor")
    const containerAllOutOfStockArmor = document.querySelector("#containerAllOutOfStockArmor");
    

    if(divGenAllArmors){
        divOutOfStockArmor.classList.add("hide");
        containerAllOutOfStockArmor.classList.add("hide");
        divGenAllArmors = false;
    }else{
        divOutOfStockArmor.classList.remove("hide");
        containerAllOutOfStockArmor.classList.remove("hide");
        divGenAllArmors = true;
    }
    
    }
)



const inputRadioOutOfStockTypeGenFaltandoArmor = document.querySelector("#inputRadioOutOfStockTypeGenFaltandoArmor");
const inputRadioOutOfStockTypeGenNumeroArmor = document.querySelector("#inputRadioOutOfStockTypeGenNumeroArmor");

inputRadioOutOfStockTypeGenFaltandoArmor.addEventListener("click",OutofStockVisibilityArmor);
inputRadioOutOfStockTypeGenNumeroArmor.addEventListener("click",OutofStockVisibilityArmor);
function OutofStockVisibilityArmor(){
    const divItensGenArmor = document.querySelector("#divItensGenArmor");
    const divItensFaltandoGenArmor = document.querySelector("#divItensFaltandoGenArmor");
    var radioButtonActive = document.querySelector('input[name=radioOutOfStockTypeArmor]:checked').value;
    console.log(radioButtonActive)
    if(radioButtonActive == "faltandoArmor"){
        divItensGenArmor.classList.add("hide");
        divItensFaltandoGenArmor.classList.remove("hide");

    }
    else if(radioButtonActive == "numeroFixGenArmor"){
        divItensGenArmor.classList.remove("hide");
        divItensFaltandoGenArmor.classList.add("hide");

    }
    
}

const inputCheckboxEnableVarEcoArmor = document.querySelector("#inputCheckboxEnableVarEcoArmor");
inputCheckboxEnableVarEcoArmor.addEventListener("click",function(){
    const containerAllVarEcoOptionArmor = document.querySelector("#containerAllVarEcoOptionArmor");
    if(divVarEcoArmors){
        containerAllVarEcoOptionArmor.classList.add("hide");
        divVarEcoArmors = false;
    }else{
        containerAllVarEcoOptionArmor.classList.remove("hide");
        divVarEcoArmors = true;
    }
})




