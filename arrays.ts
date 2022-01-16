const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

const carsByMake2: string[][] = [];


// Help with inference when extracting values
const car = carMakers[0];

carMakers.map((car: string):string => {
    return car.toUpperCase();
})

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10']



