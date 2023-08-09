// class User{
//     constructor({name, age,followers}){
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }
// }
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   poly.getInfo();// User Poly is 3 years old and has 17 followers
//====================================================================================
class Storage {
    constructor(items){
        this.items = items;
    }
    getItems(items){
      return (this.items);
    }
    addItem(items){
      this.items.push(items);
    }
    removeItem(item){
     this.items = items.filter(product => product !== item); 
    }
}
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
//===============================================================================================
// class StringBuilder{
//   constructor(_value){
//     this._value = _value;
//   }
//   get value(){
//     return this._value;
//   }
//   append(str){
//   this._value+=str
//   }
//   prepend(str){
//     this._value= str +this._value
//   }
//   pad(str){
//     this._value = str + this._value +str

//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
//=====================================================================================================
// class DarkKnight{
//   constructor(name, level, hp, xp, weapon, heal, defense, damage ){
//     this.name = name;
//     this.level = level;
//     this.hp = hp;
//     this.xp = xp;
//     this.weapon = weapon;
//     this. heal = heal;
//     this.defense = defense;
//     this.damage = damage;
//   }
// }
// const mango = new DarkKnight("mango", 15, 500, 1490, "bloody cut", 30, 560, 40)
// const poly = new DarkKnight("poly", 50, 5000, 47000, "Terra Blade", 250, 3900, 500,)
// console.log(mango);
// console.log(poly);