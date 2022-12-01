var catalog = [
  ["iPhone 11", 320],
  ["Samsung Galaxy s10", 250],
  ["Xiaomi Redmi note 9", 200],
  ["Tecno Camon 16", 160],
  ["Infinix Note 10", 90],
  ["LG nexus", 220],
];

function print(message) {
  console.log(message);
}

function printList(items) {
  var list = "\n***************************************\n";
  for (var i = 0; i < items.length; i++) {
    list += "\n[" + items[i][0] + " costs " + "$" + items[i][1] + "]\n";
  }
  list += "\n***************************************\n";
  print(list);
}

var cart = [];
var r1 = require("readline");
var prompts = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});
prompts.question("Enter your name: ", function (username) {
  print(`Hi ${username}, Welcome to Kingsley\'s store`);
  print(`\nHere are the list and prices of our Phone Catalog: `);
  printList(catalog);
  prompts.question(
    "\nSelect the device you'd like to add to your shopping cart:  ",
    function (selectedItem) {
      if (Array.prototype.values(catalog.indexOf(selectedItem) > -1)) {
        print(`${selectedItem} has been added to the shopping cart\n`);
        cart.push(selectedItem);
        print("Your shopping cart : \n ");
        print(cart);
      } else {
        print(selectedItem + " is not in stock");
      }
    }
  );
});
