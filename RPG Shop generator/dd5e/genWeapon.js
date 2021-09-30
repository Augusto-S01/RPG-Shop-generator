import { Weapon,weaponList } from "./classItem.js";


//Simples Corpo-a-corpo
const adaga = new Weapon("Adaga","/dd5e/assets/weapon/adaga.png",2,"po","1d4","perfurante","Simples Corpo-a-corpo","0,5Kg","Acuidade","Leve","Arremesso(6/18)")
const azagaia = new Weapon("Azagaia","/dd5e/assets/weapon/azagaia.png",5,"pp","1d6","perfurante","Simples Corpo-a-corpo","1Kg","Arremesso(9/36)");
const bordão = new Weapon("Bordão","/dd5e/assets/weapon/bordão.png",2,"pp","1d6","concussão","Simples Corpo-a-corpo","2Kg","Versátil(1d8)");
const clavaGrande = new Weapon("Clava Grande","/dd5e/assets/weapon/clavaGrande.png",2,"pp","1d6","concussão","Simples Corpo-a-corpo","5Kg","Pesada","Duas Mãos");
const foiceCurta = new Weapon("Foice Curta","/dd5e/assets/weapon/foiceCurta.png",1,"po","1d4","cortante","Simples Corpo-a-corpo","5Kg","leve");
const lança = new Weapon("Lança","/dd5e/assets/weapon/lança.png",1,"po","1d6","perfurante","Simples Corpo-a-corpo","1,5Kg","Arremesso(6/18)","Versátil(1d8)");
const maça = new Weapon("Maça","/dd5e/assets/weapon/maça.png",5,"po","1d6","concussão","Simples Corpo-a-corpo","2Kg")
const machadinha = new Weapon("Machadinha","/dd5e/assets/weapon/machadinha.png",5,"po","1d6","cortante","Simples Corpo-a-corpo","1Kg","Leve","Arremesso(6/18)");
const marteloLeve = new Weapon("Martelo Leve","/dd5e/assets/weapon/marteloLeve.png",2,"po","1d4","concussão","Simples Corpo-a-corpo","1Kg","Leve","Arremesso(6/18)");
const porrete = new Weapon("Porrete","/dd5e/assets/weapon/porrete.png",1,"pp","1d4","Concussão","Simples Corpo-a-corpo","1Kg","Leve");

//Simples à Distância


const arcoCurto = new Weapon("Arco Curto","/dd5e/assets/weapon/arcoCurto.png",25,"po","1d6","perfurante","Simples à Distância","1Kg","Munição(24/96)","Duas mãos");
const bestaLeve = new Weapon("Besta Leve","/dd5e/assets/weapon/bestaLeve.png",25,"po","1d8","perfurante","Simples à Distância","2,5Kg","Munição(24/96)","Recarga","Duas Mãos");
const dardo = new Weapon("Dardo","/dd5e/assets/weapon/dardo.png",5,"pc","1d4","perfurante","Simples à Distância","0,1Kg","Acuidade","Arremesso(6/18)");
const funda = new Weapon("Funda","/dd5e/assets/weapon/funda.png",5,"pp","1d4","concussão","Simples à Distância","--","Munição(9/36)");


//Marciais Corpo-a-Corpo

const alabarda = new Weapon("Alabarda","/dd5e/assets/weapon/alabarda.png",20,"po","1d10","Cortante","Marciais Corpo-a-Corpo","3kg","Pesada","Alcance","Duas mãos");
const cimitarra = new Weapon("Cimitarra","/dd5e/assets/weapon/cimitarra.png",25,"po","1d6","Cortante","Marciais Corpo-a-Corpo","1,5Kg","Acuidade","Leve");
const chicote = new Weapon("Chicote","/dd5e/assets/weapon/chicote.png",2,"po","1d4","Cortante","Marciais Corpo-a-Corpo","1,5Kg","Acuidade","Leve");
const espadaCurta = new Weapon("Espada Curta","/dd5e/assets/weapon/espadaCurta.png",10,"po","1d6","Perfurante","Marciais Corpo-a-Corpo","1Kg","Acuidade","Leve");
const espadaGrande = new Weapon("Espada Grande","/dd5e/assets/weapon/espadaGrande.png",50,"po","2d6","Cortante","Marciais Corpo-a-Corpo","3Kg","Pesada","Duas Mãos");
const espadaLonga = new Weapon("Espada Longa","/dd5e/assets/weapon/espadaLonga.png",15,"po","1d8","Cortante","Marciais Corpo-a-Corpo","1,5Kg","Versátil(1d10)");
const glaive = new Weapon("Glaive","/dd5e/assets/weapon/glaive.png",20,"po","1d10","Cortante","Marciais Corpo-a-Corpo","3Kg","Pesada","Alcance","Duas Mãos");
const lançaDeMontaria = new Weapon("Lança de montaria","/dd5e/assets/weapon/lançaDeMontaria.png",10,"po","1d12","Perfurante","Marciais Corpo-a-Corpo","3Kg","Alcance","Especial");
const lançaLonga = new Weapon("Lança Longa","/dd5e/assets/weapon/lançaLonga.png",5,"po","1d10","Perfurante","Marciais Corpo-a-Corpo","4Kg","Pesada","Alcance","Duas Mãos");
const maçaEstrela = new Weapon("Maça Estrela","/dd5e/assets/weapon/maçaEstrela.png",15,"po","1d8","Perfurante","Marciais Corpo-a-Corpo","2Kg")
const machadoGrande = new Weapon("Machado Grande","/dd5e/assets/weapon/machadoGrande.png",30,"po","1d12","Cortante","Marciais Corpo-a-Corpo","3,5Kg","Pesada","Duas Mãos");
const machadoDeBatalha = new Weapon("Machado de Batalha","/dd5e/assets/weapon/machadoDeBatalha.png",10,"po","1d8","Cortante","Marciais Corpo-a-Corpo","2Kg","Versátil(1d10)");
const malho = new Weapon("Malho","/dd5e/assets/weapon/malho.png",10,"po","2d6","Concussão","Marciais Corpo-a-Corpo","5Kg","Pesado","Duas Mãos");
const mangual = new Weapon("Mangual","/dd5e/assets/weapon/mangual.png",10,"po","1d8","Concussão","Marciais Corpo-a-Corpo","1Kg");
const marteloDeGuerra = new Weapon("Martelo de Guerra","/dd5e/assets/weapon/marteloDeGuerra.png",15,"po","1d8","Concussão","Marciais Corpo-a-Corpo","1Kg","Versátil(1d10)");
const picaretaDeGuerra = new Weapon("Picarta de Guerra","/dd5e/assets/weapon/picaretaDeGuerra.png",5,"po","1d8","Perfurante","Marciais Corpo-a-Corpo","1Kg");
const rapieira = new Weapon("Rapieira","/dd5e/assets/weapon/rapieira.png",25,"po","1d8","Perfurante","Marciais Corpo-a-Corpo","1Kg","Acuidade");
const tridente = new Weapon("Tridente","/dd5e/assets/weapon/tridente.png",5,"po","1d6","Perfurante","Marciais Corpo-a-Corpo","2Kg","Arremesso(6/18)","Versátil(1d8)");


//Marciais à Distância

const arcoLongo = new Weapon("Arco Longo","/dd5e/assets/weapon/arcoLongo.png",50,"po","1d8","Perfurante","Marciais à Distância","1Kg","Munição(45/180)","Pesada","Duas Mãos");
const bestaDeMao = new Weapon("Besta de Mão","/dd5e/assets/weapon/bestaDeMão.png",75,"po","1d6","Perfurante","Marciais à Distância","1,5Kg","Munição(9/36)","Leve","Recarga");
const bestaPesada = new Weapon("Besta Pesada","/dd5e/assets/weapon/bestaPesada.png",50,"po","1d10","Perfurante","Marciais à Distância","4,5Kg","Munição(30/120)","Pesada","Recarga","Duas Mãos");
const rede = new Weapon("Rede","/dd5e/assets/weapon/rede.png",1,"po","--","--","Marciais à Distância","1,5Kg","Especial","Arremesso(1,5/4,5)");
const zarabatana = new Weapon("Zarabatana","/dd5e/assets/weapon/zarabatana.png",10,"po","1","Perfurante","Marciais à Distância","0,5Kg","Munição(7,5/30)","Recarga");


weaponList.push(adaga,azagaia,bordão,clavaGrande,foiceCurta,lança,maça,machadinha,marteloLeve,porrete,arcoCurto,bestaLeve,
    dardo,funda,alabarda,cimitarra,chicote,espadaCurta,espadaGrande,espadaLonga,glaive,lançaDeMontaria,lançaLonga,maçaEstrela,machadoGrande,machadoDeBatalha
    ,malho,mangual,marteloDeGuerra,picaretaDeGuerra,rapieira,tridente,arcoLongo,bestaDeMao,bestaPesada,rede,zarabatana);


var sectionType;


function checkWeaponType(weapon){
        switch(weapon.tipo){
            case "Simples Corpo-a-corpo":
                sectionType = document.querySelector("#shop__simpleMeleeSection");
                break;
    
            
            case "Simples à Distância":
                sectionType = document.querySelector("#shop__simpleRangedSection");
                break;
    
            
            case "Marciais Corpo-a-Corpo": 
                sectionType = document.querySelector("#shop__martialMeleeSection");
                break
            
            case "Marciais à Distância":
                sectionType = document.querySelector("#shop__martialRangedSection");
                break;
        }
        return sectionType;
    }

export function genWeapon(weapon){
    sectionType = checkWeaponType(weapon);


    const liItem = document.createElement("li");
    liItem.classList.add("item");
    liItem.classList.add("itemWeapon");
    //liItem.dataset
    sectionType.appendChild(liItem);


    const itemIcon = document.createElement("img");
    itemIcon.setAttribute("src",weapon.fonte);
    itemIcon.classList.add("item__iconIMG");
    //itemIcon.dataset
    liItem.appendChild(itemIcon);

    const itemName = document.createElement("span");
    // itemName.classList.add("");
    // itemName.dataset
    itemName.innerHTML = weapon.nome;
    liItem.appendChild(itemName);

    const itemIconPrice = document.createElement("img");
    itemIconPrice.setAttribute("src","/dd5e/assets/icons/goldCoin.png");
    itemIconPrice.classList.add("item__iconIMG");
    // itemIconPrice.dataset
    liItem.appendChild(itemIconPrice);


    const divPrice = document.createElement("div");
    // divPrice.classList.add("");
    // divPrice.dataset
    liItem.appendChild(divPrice);



    const itemPrice = document.createElement("span");
    //itemPrice.classlist.add("");
    itemPrice.dataset.weaponprice = "";
    itemPrice.innerHTML = weapon.preco;
    divPrice.appendChild(itemPrice);

    const itemCoinType = document.createElement("span");
    // itemCoinType.classList.add("");
    itemCoinType.dataset.weaponcoin = "";
    itemCoinType.innerHTML = weapon.moeda;
    divPrice.appendChild(itemCoinType);


    const itemDmgIcon = document.createElement("img");
    itemDmgIcon.setAttribute("src","/dd5e/assets/icons/dano.png");
    itemDmgIcon.classList.add("item__iconIMG");
    // itemDmg.dataset
    liItem.appendChild(itemDmgIcon);


    const itemDmg = document.createElement("span");
    // itemDmg.classList.add("");
    // itemDmg.dataset
    itemDmg.innerHTML = `${weapon.dmg} ${weapon.dmgType}`;
    liItem.appendChild(itemDmg);

    const itemIconWeight = document.createElement("img");
    itemIconWeight.setAttribute("src","/dd5e/assets/icons/peso.png")
    itemIconWeight.classList.add("item__iconIMG");
    // itemIconWeight.dataset
    liItem.appendChild(itemIconWeight);

    const itemWeight = document.createElement("span");
    // itemWeight.classList.add("");
    // itemWeight.dataset
    itemWeight.innerHTML = weapon.peso;
    liItem.appendChild(itemWeight);

    // console.log(weapon.prop1);
    // console.log(weapon.prop2);
    // console.log(weapon.prop3);
    // console.log(weapon.prop4);
    
    // console.log(weapon.prop4 == undefined);
    // console.log(!weapon.prop4 == undefined);
    
    // console.log(weapon.prop1 !== undefined);
    


    if(weapon.prop1 !== undefined){
        const itemProp1 = document.createElement("span");
        // itemProp1.classList.add("")
        // prop1.dataset
        itemProp1.innerHTML = weapon.prop1;
        liItem.appendChild(itemProp1);
        // console.log("aeae");
    }

    if(weapon.prop2 !== undefined){
        const itemProp2 = document.createElement("span");
        // itemProp2.classList.add("")
        // prop2.dataset
        itemProp2.innerHTML = weapon.prop2;
        liItem.appendChild(itemProp2);
    }

    if(weapon.prop3 !== undefined){
        const itemProp3 = document.createElement("span");
        // itemProp3.classList.add("")
        // prop3.dataset
        itemProp3.innerHTML = weapon.prop3;
        liItem.appendChild(itemProp3);
    }
    if(weapon.prop4 !== undefined){
        const itemProp4 = document.createElement("span");
        // itemProp4.classList.add("")
        // prop4.dataset
        itemProp4.innerHTML = weapon.prop4;
        liItem.appendChild(itemProp4);
    }






    

}




    