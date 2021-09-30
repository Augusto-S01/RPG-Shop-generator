export var armorList = [];
export var weaponList = [];

export class Armor{
    constructor(nome,fonte,preco,moeda,ca,forca,peso,furtividade,tipo){
        this.nome        = nome;
        this.fonte       = fonte;
        this.preco       = preco;
        this.moeda       = moeda;
        this.ca          = ca;
        this.forca       = forca;
        this.peso        = peso;
        this.furtividade = furtividade;
        this.tipo        = tipo;
    }
}

export class Weapon{
    constructor(nome,fonte,preco,moeda,dmg,dmgType,tipo,peso,prop1,prop2,prop3,prop4){
        this.nome        = nome;
        this.fonte       = fonte;
        this.preco       = preco;
        this.moeda       = moeda;
        this.dmg         = dmg;
        this.dmgType     = dmgType;
        this.tipo        = tipo;
        this.peso        = peso;
        this.prop1       = prop1;
        this.prop2       = prop2;
        this.prop3       = prop3;
        this.prop4       = prop4;
    }
}
