const king = {name: 'Musafa', age: 55, kingdom: 'Pride Lands'};
// Object.freeze(king); // kono akta object k freeze korle amra tar kono jinish delete, add, modify korte parbo na
Object.seal(king); // delete korte parbo na, add korte parbo na, kintu modify korte parbo.
delete king.age;   // delete hoye jabe object ar key + value
delete king.kingdom;
king.queen = 'Sarabi';  // add hobe
king.name = 'King Simba';  // replaece hobe name ta
console.log(king);

