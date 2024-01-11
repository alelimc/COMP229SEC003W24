var skier = {
      name: "Dan",
      sound: "aad",
      powderYell: function() {
        var yell = this.sound.toUpperCase();
     console.log(`${yell} ${yell} ${yell}!!!`);
     },
     speed: function(mph) {
     this.speedValue = mph; // Changed the variable name to avoid conflict with the function name
     console.log("speed:", mph);
     }
    };
    
    skier.powderYell(); // Output: "AAD AAD AAD!!!"
    skier.speed(50); // Output: "speed: 50"
    
    