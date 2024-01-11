const skier = {
    name : "Dan",
    sound:"aad",
    powderYell()  {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
    }
    };
    
    skier.powderYell(); // Output: "AAD AAD AAD!!!"
    skier.speed(50); // Output: "speed: 50"