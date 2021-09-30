import {Armor,armorList,weaponList} from "./classItem.js"

const acolchoada      = new Armor("acolchoada","/dd5e/assets/armor/acolchoada.png",5,"po",11,"--","4kg","desvantagem","Leve");
const couro           = new Armor("Couro","/dd5e/assets/armor/couro.png",10,"po",11,"--","5kg","--","Leve");
const couroBatido     = new Armor("Couro Batido","/dd5e/assets/armor/couro_batido.png",45,"po",12,"--","6.5kg","--","Leve");

const gibaoDePeles    = new Armor("Gibão de peles","/dd5e/assets/armor/gibao_de_peles.png",10,"po",12,"--","6kg","","Média");
const camisaoDeMalhas = new Armor("Camisão de malhas","/dd5e/assets/armor/camisao_de_malhas.png",30,"po",13,"--","10kg","--","Média");
const brunea          = new Armor("Brunea","/dd5e/assets/armor/brunea.png",50,"po",14,"--","22.5Kg","Desvantagem","Média");
const peitoral        = new Armor("Peitoral","/dd5e/assets/armor/peitoral.png",400,"po",14,"--","10Kg","--","Média");
const meiaArmadura    = new Armor("Meia-Armadura","/dd5e/assets/armor/meia-armadura.png",750,"po",15,"--","20Kg","Desvantagem","Média");


const cotaDeAneis     = new Armor("Cota de aneis","/dd5e/assets/armor/cota_de_aneis.png",30,"po",15,"--","20Kg","Desvantagem","Pesada");
const cotaDeMalha     = new Armor("Cota de malha","/dd5e/assets/armor/cota_de_malhas.png",75,"po",16,13,"27.5Kg","Desvantagem","Pesada");
const cotaDeTalas     = new Armor("Cota de Talas","/dd5e/assets/armor/cota_de_talas.png",200,"po",17,15,"30Kg","Desvantagem","Pesada");
const placas          = new Armor("Placas","/dd5e/assets/armor/placas.png",1500,"po",18,15,"32.5Kg","Desvantagem","Pesada");
const escudo          = new Armor("Escudo","/dd5e/assets/armor/escudo.png",10,"po",2,"--","3Kg","--","Escudo");


armorList.push(acolchoada,couro,couroBatido,gibaoDePeles,camisaoDeMalhas,brunea,peitoral,meiaArmadura,cotaDeAneis,cotaDeMalha,cotaDeTalas,placas,escudo);

var sectionType;
export function genArmor(armor){
    sectionType = checkArmorType(armor);


    const liItem = document.createElement("li");
    liItem.classList.add("item");
    liItem.classList.add("itemArmor");
    // liItem.dataset
    sectionType.appendChild(liItem);
    
    const itemIcon = document.createElement("img");
    itemIcon.setAttribute("src",armor.fonte)/
    itemIcon.classList.add("item__iconIMG");
    // itemIcon.dataset
    liItem.appendChild(itemIcon);

    
    const itemName = document.createElement("span");
    // itemName.classList.add("");
    // itemName.dataset
    itemName.innerHTML = armor.nome;
    liItem.appendChild(itemName);

    const itemIconPrice = document.createElement("img");
    itemIconPrice.setAttribute("src","/dd5e/assets/icons/goldCoin.png")
    itemIconPrice.classList.add("item__iconIMG");
    // itemIconPrice.dataset
    liItem.appendChild(itemIconPrice);
    

    const divPrice = document.createElement("div");
    // divPrice.classList.add("");
    // divPrice.dataset
    liItem.appendChild(divPrice);

    const itemPrice = document.createElement("span");
    // itemPrice.classlist.add("");
    itemPrice.dataset.armorprice = "";
    itemPrice.innerHTML = armor.preco;
    divPrice.appendChild(itemPrice);
    
    const itemCoinType = document.createElement("span");
    // itemCoinType.classList.add("");
    itemCoinType.dataset.armorcoin = "";
    itemCoinType.innerHTML = armor.moeda;
    divPrice.appendChild(itemCoinType);
    
    
    const itemIconSTR = document.createElement("img");
    itemIconSTR.setAttribute("src","/dd5e/assets/icons/força.png");
    itemIconSTR.classList.add("item__iconIMG")
    // itemIconPrice.dataset
    liItem.appendChild(itemIconSTR);
    
    const itemSTR = document.createElement("span");
    // itemSTR.classlist.add("");
    // itemSTR.dataset
    itemSTR.innerHTML = armor.forca;
    liItem.appendChild(itemSTR);
    
    const itemIconCA = document.createElement("img");
    itemIconCA.setAttribute("src","/dd5e/assets/icons/ca.png");
    itemIconCA.classList.add("item__iconIMG");
    //itemIconCA.dataset
    liItem.appendChild(itemIconCA);

    const itemCA = document.createElement("span");
    // itemCA.classList.add("");
    // itemCA.dataset
    itemCA.innerHTML = armor.ca;
    liItem.appendChild(itemCA);


    const itemIconWeight = document.createElement("img");
    itemIconWeight.setAttribute("src","/dd5e/assets/icons/peso.png")
    itemIconWeight.classList.add("item__iconIMG");
    // itemIconWeight.dataset
    liItem.appendChild(itemIconWeight);

    const itemWeight = document.createElement("span");
    // itemWeight.classList.add("");
    // itemWeight.dataset
    itemWeight.innerHTML = armor.peso;
    liItem.appendChild(itemWeight);

    const itemIconStealth = document.createElement("img");
    itemIconStealth.setAttribute("src","/dd5e/assets/icons/furtividade.png");
    itemIconStealth.classList.add("item__iconIMG");
    // itemIconStealth.dataset;
    liItem.appendChild(itemIconStealth);

    const itemStealth = document.createElement("span");
    // itemStealth.classList.add("");
    // itemStealth.dataset
    itemStealth.innerHTML = armor.furtividade;
    liItem.appendChild(itemStealth);

    const itemIconType = document.createElement("img");
    itemIconType.setAttribute("src","/dd5e/assets/icons/tipo.png");
    itemIconType.classList.add("item__iconIMG");
    // itemIconType.dataset;
    liItem.appendChild(itemIconType);

    const itemType = document.createElement("span")
    // itemType.classList.add("");
    // itemType.dataset;
    itemType.innerHTML = armor.tipo;
    liItem.appendChild(itemType);








}

function checkArmorType(armor){
    switch(armor.tipo){
        case "Leve":
            sectionType = document.querySelector("#shop__lightArmorSection");
            break;

        
        case "Média":
            sectionType = document.querySelector("#shop__mediumArmorSection");
            break;

        
        case "Pesada": 
            sectionType = document.querySelector("#shop__heavyArmorSection");
            break
        
        case "Escudo":
            sectionType = document.querySelector("#shop__shieldSection");
            break;
    }
    return sectionType;
}


