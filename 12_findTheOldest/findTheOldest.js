const getAge = function (death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        const oldestPerson = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentPerson = getAge(current.yearOfDeath, current.yearOfBirth);

    return oldestPerson < currentPerson ? current : oldest;
})

}
// Do not edit below this line
module.exports = findTheOldest;
