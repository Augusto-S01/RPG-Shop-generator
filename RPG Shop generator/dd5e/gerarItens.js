import {Armor,armorList,weaponList} from "./classItem.js"
import { genArmor } from "./genArmor.js";
import { genWeapon } from "./genWeapon.js";
var errorCount = 0;


const inputButtonGerar = document.querySelector("#inputButtonGerar");
inputButtonGerar.addEventListener("click",function(event){
    event.preventDefault();
    
    





    var generated = false; //verifica se algo foi gerado
    var generatedVarEcoArmor = false; //Verifica se as armaduras sofreram variação economica
    var generatedVarEcoWeapon = false; //Verifica se as armas sofreram variação economica


    //Capturar configs das armas 
    var genNumWeapon;
    const genWeaponEnable = document.querySelector("#inputCheckboxEnableGenWeapon").checked;
    const genAllWeapons = document.querySelector("#inputCheckboxDisableOutOfStockWeapon").checked;
    const varEcoEnableWeapon = document.querySelector("#inputCheckboxEnableVarEcoWeapon").checked;
    var listaGenNumWeapon = new Array;


    if(genWeaponEnable == true){
        if(genAllWeapons == true){
            genNumWeapon = 37;
            generated = true;
        }else if(genAllWeapons == false){
        
            var radioButtonActiveGenValueWeapon = document.querySelector('input[name=radioOutOfStockTypeWeapon]:checked').value;
            const inputNumberItensGenWeaponFaltando  = document.querySelector("#inputNumberItensGenWeaponFaltando").value;
            const inputNumberItensGenWeapon =  document.querySelector("#inputNumberItensGenWeapon").value;
            if(radioButtonActiveGenValueWeapon == "faltandoWeapon"){
                if(inputNumberItensGenWeaponFaltando <= 37 && inputNumberItensGenWeaponFaltando > 0){
                    genNumWeapon = 37 - inputNumberItensGenWeaponFaltando;
                    generated = true;
                }else{
                    addError("Input de armas faltando invalido");
                    return;
                }
                
            }else if(radioButtonActiveGenValueWeapon == "numeroFixGenWeapon"){
                if(inputNumberItensGenWeapon <= 37 && inputNumberItensGenWeapon >0){
                    genNumWeapon = inputNumberItensGenWeapon;
                    generated = true;
                }else{
                    addError("input de armas a ser gerado invalido");
                    return;
                }

    
                
            }else{
                addError("erro,nenhum input do tipo radio para OutOfStock encontrado");
                return;
            }
        }


        








        const inputNumberItensAfetadadosVarEcoWeapon = document.querySelector("#inputNumberItensAfetadadosVarEcoWeapon").value;
        const inputNumberPorcentagemVarEcomMinWeapon = document.querySelector("#inputNumberPorcentagemVarEcomMinWeapon").value;
        const inputNumberPorcentagemVarEcomMaxWeapon = document.querySelector("#inputNumberPorcentagemVarEcomMaxWeapon").value;

        

 


        if(varEcoEnableWeapon == true){
            
                if(inputNumberItensAfetadadosVarEcoWeapon <= genNumWeapon && inputNumberItensAfetadadosVarEcoWeapon > 0 && inputNumberItensAfetadadosVarEcoWeapon <= 37 ){
                    if(inputNumberPorcentagemVarEcomMaxWeapon <= 100 && inputNumberPorcentagemVarEcomMaxWeapon > 0){
                        if(inputNumberPorcentagemVarEcomMinWeapon <= 100 && inputNumberPorcentagemVarEcomMinWeapon > 0 && inputNumberPorcentagemVarEcomMinWeapon <= inputNumberPorcentagemVarEcomMaxWeapon ){
                            console.log("deu certo ^^");
                            generatedVarEcoWeapon = true;
                        }else{addError("porcentagem minima na variação economica das armas invalido");return  generated = false;};
                    }else{addError("porcentagem maxima na variação economica das armas invalido") ; return generated = false;};
                }else{addError("numero de itens afetados na variação economica de armas invalidos") ;return generated = false;};
            
        }



        
        //gerar lista de weapon
        while(listaGenNumWeapon.length < genNumWeapon){
            var valor = aleatorioEntre(0,36);
            var numeroInvalido = false;
        
            for(let i = 0; i <listaGenNumWeapon.length;i++){

                if(valor == listaGenNumWeapon[i]){
                    numeroInvalido = true;
                }


            }
            if(numeroInvalido == false){
                listaGenNumWeapon.push(valor);
            }
        }

      

            

        
    }


    //Capturar configs das armaduras
    var genNumArmor;
    const genArmorEnable = document.querySelector("#inputCheckboxEnableGenArmor").checked;
    const genAllArmor = document.querySelector("#inputCheckboxDisableOutOfStockArmor").checked;
    var varEcoEnableArmor = document.querySelector("#inputCheckboxEnableVarEcoArmor").checked;
    

    var listaGenNumArmor = new Array;
    if(genArmorEnable == true){
        if(genAllArmor == true){
            genNumArmor = 13;
            generated = true;
        }else if(genAllArmor == false){
    
            var radioButtonActiveGenValueArmor = document.querySelector("input[name=radioOutOfStockTypeArmor]:checked").value;
            const inputNumberItensGenArmorFaltando  = document.querySelector("#inputNumberItensGenArmorFaltando").value;
            const inputNumberItensGenArmor =  document.querySelector("#inputNumberItensGenArmor").value;



            if(radioButtonActiveGenValueArmor == "faltandoArmor"){
                if(inputNumberItensGenArmorFaltando <= 12 && inputNumberItensGenArmorFaltando > 0){
                    genNumArmor = 13 - document.querySelector("#inputNumberItensGenArmorFaltando").value;

                    generated = true;
                }else{
                    addError("input armadura faltando invalido");
                    return;
                }

            }else if(radioButtonActiveGenValueArmor == "numeroFixGenArmor"){
                if(inputNumberItensGenArmor <= 12 && inputNumberItensGenArmor > 0){    
                    genNumArmor = document.querySelector("#inputNumberItensGenArmor").value;

                    generated = true;
                }else{
                    addError("input de armaduras a ser gerado invalido");
                    return;
                }

            }else{
                addError("erro, nenhum input do tipo radio para OutOfStock de Armadura Encontrado");
                return;
            }
            
        }











        const inputNumberItensAfetadadosVarEcoArmor = document.querySelector("#inputNumberItensAfetadadosVarEcoArmor").value;
        const inputNumberPorcentagemVarEcomMinArmor = document.querySelector("#inputNumberPorcentagemVarEcomMinArmor").value;
        const inputNumberPorcentagemVarEcomMaxArmor = document.querySelector("#inputNumberPorcentagemVarEcomMaxArmor").value;


        if(varEcoEnableArmor == true ){
            if(inputNumberItensAfetadadosVarEcoArmor <= genNumArmor && inputNumberItensAfetadadosVarEcoArmor > 0 && inputNumberItensAfetadadosVarEcoArmor < 36 ){
                if(inputNumberPorcentagemVarEcomMaxArmor <= 100 && inputNumberPorcentagemVarEcomMaxArmor > 0){
                    if(inputNumberPorcentagemVarEcomMinArmor <= 100 && inputNumberPorcentagemVarEcomMinArmor > 0 && inputNumberPorcentagemVarEcomMinArmor <= inputNumberPorcentagemVarEcomMaxArmor){
                        generatedVarEcoArmor = true;

                    }else{addError("porcentagem minima na variação economica das Armaduras invalido");return generated = false; };
                }else{addError("porcentagem maxima na variação economica das Armaduras invalido") ; return generated = false;};
            }else{addError("numero de itens afetados na variação economica de Armaduras invalidos"); return generated = false;};
        }



        // gerar lista de armaduras

        while(listaGenNumArmor.length < genNumArmor){
            var valor = aleatorioEntre(0,12);
            var numeroInvalido = false;
        
            for(let i = 0; i <listaGenNumArmor.length;i++){

                if(valor == listaGenNumArmor[i]){
                    numeroInvalido = true;
                }


            }
            if(numeroInvalido == false){
                listaGenNumArmor.push(valor);
            }
        }

        
        console.log(listaGenNumArmor);




        
    }



    
    //configs de nova geração 
    if(generated){

        //Esconde o form e mostra a loja
        const reGenContainer = document.querySelector("#reGenContainer");
        reGenContainer.classList.remove("hide");

        const form = document.querySelector("#config");
        form.classList.add("hide");


        const shopSection = document.querySelector("#shopSection");
        const shop = document.querySelector("#shop");


        shop.classList.remove("hide");
        shopSection.classList.add("shop__section");


        //gera as armaduras na loja
        if( listaGenNumArmor.length > 0){
            for(let i = 0; i < listaGenNumArmor.length; i++){
                var itemAtual = armorList[listaGenNumArmor[i]]
                genArmor(itemAtual);
            }
        }

        //Aplica a variação economica nas armaduras

        if( generatedVarEcoArmor){
            const AllArmorsGenerated = document.querySelectorAll("[data-armorprice]");
            // console.log(AllArmorsGenerated.length); 

            
            const numeroArmorAfetadasPelaVarEco = document.querySelector("#inputNumberItensAfetadadosVarEcoArmor").value;
            // console.log(`itens Afetados pela VarEco de armaduras ${numeroArmorAfetadasPelaVarEco}`);
            
            const porcentagemArmorVarMin = document.querySelector("#inputNumberPorcentagemVarEcomMinArmor").value;
            // console.log(`variação minima pela VarEco de armaduras ${porcentagemArmorVarMin}`)
            
            const porcentagemArmorVarMax = document.querySelector("#inputNumberPorcentagemVarEcomMaxArmor").value;
            // console.log(`variação maxima pela VarEco de armaduras ${porcentagemArmorVarMax}`)
            


            //Gera a lista dos itens que vão ser alterados
            var itensAfetadosPelaVarEcoArmor = [];

            for(let i = 0 ; i < numeroArmorAfetadasPelaVarEco; i++){
                var numArmorVarEcoAble = false;
                while(numArmorVarEcoAble == false){
                    var armorNumberVarEco = aleatorioEntre(0,AllArmorsGenerated.length)
                    armorNumberVarEco = armorNumberVarEco - 1
                    if(itensAfetadosPelaVarEcoArmor.includes(armorNumberVarEco) == false && armorNumberVarEco >= 0 ){
                        itensAfetadosPelaVarEcoArmor.push(armorNumberVarEco);
                        numArmorVarEcoAble = true
                    }
                }
            }


            for(let i = 0; i < itensAfetadosPelaVarEcoArmor.length; i++){


                var varEcoArmorState = aleatorioEntre(1,2);
              
                if(varEcoArmorState ==  1){
                    varEcoArmorState = "desconto"
                }else(varEcoArmorState = "acrescimo" )


         

                var armorSelected = AllArmorsGenerated[itensAfetadosPelaVarEcoArmor[i]].innerHTML;


                
                var varEcoArmorNum = aleatoriEntrePercent(porcentagemArmorVarMin,porcentagemArmorVarMax)
                
                
                
                if(varEcoArmorState == "desconto"){
                    var precoMod =  Math.floor(armorSelected * (varEcoArmorNum/100));   
                    const armorPriceMod = AllArmorsGenerated[itensAfetadosPelaVarEcoArmor[i]]
                    armorPriceMod.innerHTML = precoMod;
                    armorPriceMod.classList.add("item__priceDown")
                    
                }

                if(varEcoArmorState == "acrescimo"){
                    var precoMod =  Math.round(armorSelected / (varEcoArmorNum/100));
                    const armorPriceMod = AllArmorsGenerated[itensAfetadosPelaVarEcoArmor[i]]
                    armorPriceMod.innerHTML = precoMod;
                    armorPriceMod.classList.add("item__priceUp")  
                }


            }




            



        }






        if( listaGenNumWeapon.length > 0){
            for(let i = 0; i < listaGenNumWeapon.length; i++){
                var itemAtual = weaponList[listaGenNumWeapon[i]]
                genWeapon(itemAtual);
            }
        }



    //Aplica a variação economica nas armaduras

        if( generatedVarEcoWeapon){
            const AllWeaponsGenerated = document.querySelectorAll("[data-weaponprice]");
            // console.log(AllArmorsGenerated.length); 
            
                        
            const numeroWeaponAfetadasPelaVarEco = document.querySelector("#inputNumberItensAfetadadosVarEcoWeapon").value;
            // console.log(`itens Afetados pela VarEco de armas ${numeroWeaponAfetadasPelaVarEco}`);
                        
            const porcentagemWeaponVarMin = document.querySelector("#inputNumberPorcentagemVarEcomMinWeapon").value;
            // console.log(`variação minima pela VarEco de armaduras ${porcentagemWeaponVarMin}`)
                        
            const porcentagemWeaponVarMax = document.querySelector("#inputNumberPorcentagemVarEcomMaxWeapon").value;
            // console.log(`variação maxima pela VarEco de armaduras ${porcentagemWeaponVarMax}`)
                        
            
            
            //Gera a lista dos itens que vão ser alterados
            var itensAfetadosPelaVarEcoWeapon = [];
            
            for(let i = 0 ; i < numeroWeaponAfetadasPelaVarEco; i++){
                var numWeaponVarEcoAble = false;
                while(numWeaponVarEcoAble == false){
                    var weaponNumberVarEco = aleatorioEntre(0,AllWeaponsGenerated.length)
                    weaponNumberVarEco = weaponNumberVarEco - 1
                    if(itensAfetadosPelaVarEcoWeapon.includes(weaponNumberVarEco) == false && weaponNumberVarEco >= 0 ){
                        itensAfetadosPelaVarEcoWeapon.push(weaponNumberVarEco);
                        numWeaponVarEcoAble = true
                    }
                }
            }
            
            
            for(let i = 0; i < itensAfetadosPelaVarEcoWeapon.length; i++){
            
                var varEcoWeaponState = aleatorioEntre(1,2);          
                if(varEcoWeaponState ==  1){
                    varEcoWeaponState = "desconto"
                    }else(varEcoWeaponState = "acrescimo" )
                
                   
            
                    
                var weaponSelected = AllWeaponsGenerated[itensAfetadosPelaVarEcoWeapon[i]].innerHTML;
                var varEcoWeaponNum = aleatoriEntrePercent(porcentagemWeaponVarMin,porcentagemWeaponVarMax)
                            
                            
                            
                if(varEcoWeaponState == "desconto"){
                    var precoMod =  Math.round(weaponSelected * (varEcoWeaponNum/100));   
                    const WeaponPriceMod = AllWeaponsGenerated[itensAfetadosPelaVarEcoWeapon[i]]
                    WeaponPriceMod.innerHTML = precoMod;
                    WeaponPriceMod.classList.add("item__priceDown")

                                
                }
            
                if(varEcoWeaponState == "acrescimo"){
                    var precoMod =  Math.round(weaponSelected / (varEcoWeaponNum/100));
                    const weaponPriceMod = AllWeaponsGenerated[itensAfetadosPelaVarEcoWeapon[i]]
                    weaponPriceMod.innerHTML = precoMod;
                    weaponPriceMod.classList.add("item__priceUp")  
                }

            
            }
            
        }
            
    }
    if(generated == false){
        addError("nada foi gerado");
        return
    }






 
    
    


    
})

function aleatorioEntre(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function aleatoriEntrePercent(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }




function addError (TypeError){
    
    
    const errorSpan = document.querySelector("#errorSpan");
    errorSpan.innerText = TypeError;
    
    
    
    
    
    
    const divErrorSpan = document.querySelector("#divErrorSpan");
    divErrorSpan.classList.remove("shake");
    void divErrorSpan.offsetWidth;
    divErrorSpan.classList.add("shake"); 
    
    errorSpan.classList.remove("fadeout");
    void divErrorSpan.offsetWidth;
    errorSpan.classList.add("fadeout"); 
    
    
    

    
}

