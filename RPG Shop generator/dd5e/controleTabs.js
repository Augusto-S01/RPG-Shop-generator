var tabStateWeapon = "inativa";
var tabStateArmor  = "inativa";
var tabStateAll  = "ativa";


//--------------------------------------------weapon----------------------

const tabWeapon = document.querySelector("#tabWeapon");
tabWeapon.addEventListener("click",activeTabWeapon);

function activeTabWeapon(){
    if(tabStateWeapon == "inativa"){
        tabArmor.classList.replace("shop__liNavActive","shop__liNavDisable")
        tabWeapon.classList.replace("shop__liNavDisable","shop__liNavActive")
        tabAll.classList.replace("shop__liNavActive","shop__liNavDisable")

        unHideWeapons();
        hideArmors();


        tabStateWeapon = "ativa"
        tabStateArmor  = "inativa"
        tabStateAll  = "inativa"
    }
}

function hideWeapons(){
 const divWeapon = document.querySelector("#shop__Weapon")
 divWeapon.classList.add("hide")
}
function unHideWeapons(){
    const divWeapon = document.querySelector("#shop__Weapon")
    divWeapon.classList.remove("hide")
}

//--------------------------------------------armor----------------------
const tabArmor = document.querySelector("#tabArmor");
tabArmor.addEventListener("click",activeTabArmor)

function activeTabArmor(){
    if(tabStateArmor == "inativa"){
        tabArmor.classList.replace("shop__liNavDisable","shop__liNavActive")
        tabWeapon.classList.replace("shop__liNavActive","shop__liNavDisable")
        tabAll.classList.replace("shop__liNavActive","shop__liNavDisable")

        unHideArmors();
        hideWeapons();


        tabStateWeapon = "inativa"
        tabStateArmor  = "ativa"
        tabStateAll  = "inativa"
    }
}

function hideArmors(){
    const divArmor = document.querySelector("#shop__Armor");
    divArmor.classList.add("hide")
}
function unHideArmors(){
    const divArmor = document.querySelector("#shop__Armor");
    divArmor.classList.remove("hide")
}


//--------------------------todos--------------------------

const tabAll = document.querySelector("#tabAll");
tabAll.addEventListener("click",activeTabAll)

function activeTabAll(){
    if(tabStateAll == "inativa"){
        tabArmor.classList.replace("shop__liNavActive","shop__liNavDisable")
        tabWeapon.classList.replace("shop__liNavActive","shop__liNavDisable")
        tabAll.classList.replace("shop__liNavDisable","shop__liNavActive")
    }

    unHideArmors()
    unHideWeapons()

    tabStateWeapon = "inativa"
    tabStateArmor  = "inativa"
    tabStateAll  = "ativa"
}

