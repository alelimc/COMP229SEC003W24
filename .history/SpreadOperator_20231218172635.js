/*
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];
console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood

*/

//All of the items from peaks and canyons are pushed into a new array called tahoe.

//Let’s take a look at how the spread operator can help us deal with a problem. Using the peaks array from the previous sample, let’s imagine that we wanted to grab the last item from the array rather than the first. We could use the Array.reverse method to reverse the array in combination with array destructuring:
/*
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = peaks.reverse();
console.log(last); // Rose
console.log(peaks.join(", ")); // Rose, Ralston, Tallac

*/
//See what happened? The reverse function has actually altered or mutated the array. In a world with the spread operator, we don’t have to mutate the original array. Instead, we can create a copy of the array and then reverse it:
/*
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks].reverse();
console.log(last); // Rose
console.log(peaks.join(", ")); // Tallac, Ralston, Rose
*/

/*
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade
*/

function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
    }
    directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
    
    //The spread operator can also be used for objects.https://github.com/tc39/proposal-object-rest-  spread[Rest/Spread Properties] Using the spread operator with objects is similar to using it with  arrays. In this example, we’ll use it the same way we combined two arrays into a third array, but  instead of arrays, we’ll use objects:
     const morning = {
        breakfast: "oatmeal",
        lunch: "peanut butter and jelly"
        };
        const dinner = "mac and cheese";
        const backpackingMeals = {...morning,
        dinner
        };
        console.log(backpackingMeals);
        // {
        //   breakfast: "oatmeal",
        //   lunch: "peanut butter and jelly",
        // dinner: "mac and cheese"
        // }
        
    