const cellPhoneUtilities = {
  togglePower() {
    // refactor the togglePower method to reference the object
    // togglePower is called on, toggle the value of the power property (true to false || false to true);
    this.power = !this.power;
  }
};

const iPhone = Object.create(cellPhoneUtilities);
iPhone.type = "iPhone";
iPhone.power = true;

const pixel = Object.create(cellPhoneUtilities);
pixel.type = "Pixel";
pixel.power = true;

iPhone.togglePower();
pixel.togglePower();

console.log(iPhone.power);
console.log(pixel.power);

iPhone.togglePower();
pixel.togglePower();

console.log(iPhone.power);
console.log(pixel.power);