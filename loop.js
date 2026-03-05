//normal array loop
const array = [1, 2, 3, 4, 5, 6, 7]
for(const number of array){   // array ar khettre for of loop chalate hoi
    console.log(number);
}

//object loop
const family = {
    mother: 'Salaat',
    father: 'Azaan',
    son: 'Rijik'
}
for(const key in family){    // for in loop chalate hobe
    const value = family[key];
    console.log(key, value)
}