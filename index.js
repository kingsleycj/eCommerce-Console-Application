const catalog = [
  ["iphone 11", 320],
  ["samsung galaxy s10", 250],
  ["tecno camon 16", 160],
  ["infinix note 10", 90],
  ["lg nexus", 220],
];

const print = (message) => {
  console.log(message);
};

const printList = (items) => {
  let list = "\n***************************************\n";
  for (let i = 0; i < items.length; i++) {
    list += "\n[" + items[i][0] + " costs " + "$" + items[i][1] + "]\n";
  }
  list += "\n***************************************\n";
  print(list);
};

const loopCatalogPrice = (loop) => {
  let list = [];
  for (let i = 0; i < loop.length; i++) {
    list += loop[i][1];
  }
  print(list);
};

// let findPrice = loopCatalogPrice(catalog);

let cart = [];
let r1 = require("readline");
let prompts = r1.createInterface({
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
      if (catalog[0].includes(selectedItem)) {
        print(`${selectedItem} has been added to the shopping cart\n`);
        cart.push(selectedItem);
        print("Your shopping cart : \n " + cart);
      } else if (catalog[1].includes(selectedItem)) {
        print(`${selectedItem} has been added to the shopping cart\n`);
        cart.push(selectedItem);
        print("Your shopping cart : \n " + cart);
      } else if (catalog[2].includes(selectedItem)) {
        print(`${selectedItem} has been added to the shopping cart\n`);
        cart.push(selectedItem);
        print("Your shopping cart : \n " + cart);
      } else if (catalog[3].includes(selectedItem)) {
        print(`${selectedItem} has been added to the shopping cart\n`);
        cart.push(selectedItem);
        print("Your shopping cart : \n " + cart);
      } else if (catalog[4].includes(selectedItem)) {
        print(`${selectedItem} has been added to the shopping cart\n`);
        cart.push(selectedItem);
        print("Your shopping cart : \n " + cart);
      } else {
        print(selectedItem + " is not in stock");
      }
      prompts.question(
        '\nAdd more phones to your shopping cart? \nOr Hit "Enter" to proceed to checkout:  ',
        function (moreItems) {
          if (catalog[0].includes(moreItems)) {
            print(`${moreItems} has been added to the shopping cart\n`);
            cart.push(moreItems);
            print("Your shopping cart : \n " + cart);
          } else if (catalog[1].includes(moreItems)) {
            print(`${moreItems} has been added to the shopping cart\n`);
            cart.push(moreItems);
            moreItems;
            print("Your shopping cart : \n " + cart);
          } else if (catalog[2].includes(moreItems)) {
            print(`${moreItems} has been added to the shopping cart\n`);
            cart.push(moreItems);
            print("Your shopping cart : \n " + cart);
          } else if (catalog[3].includes(moreItems)) {
            print(`${moreItems} has been added to the shopping cart\n`);
            cart.push(moreItems);
            print("Your shopping cart : \n " + cart);
          } else if (catalog[4].includes(moreItems)) {
            print(`${moreItems} has been added to the shopping cart\n`);
            cart.push(moreItems);
            print("Your shopping cart : \n " + cart);
          } else {
            print(moreItems + " is not in stock");
          }
          prompts.question("Enter your Email Address: ", function (email) {
            prompts.question(
              "Enter your Contact Address: ",
              function (address) {
                prompts.question(
                  "Enter your Phone Number\n(make sure its 11 digits): ",
                  function (mobile) {
                    let message = "";
                    if (mobile.length >= 10) {
                      message =
                        "\n\n Thank You! " +
                        username +
                        "\n\n Your details have been stored,  You can make your payment and expect delivery in 2 day(s)" +
                        "\n\n-------------------------------------------------" +
                        "\n\n --------------- CHECKOUT UI ---------------";
                      "\n\n Username              : " +
                        username +
                        "\n\n Email                 : " +
                        email +
                        "\n\n Contact Address       : " +
                        address +
                        "\n\n Phone Number          : " +
                        mobile +
                        `\n\n Shopping Cart - ${cart}   : ` +
                        // loopCatalogPrice(catalog)
                        "\n\n Total                 : " +
                        "\n\n Thank you for using our shopping platform" +
                        "\n\n-------------------------------------------------";
                    } else {
                      message =
                        "Your Phone number is " +
                        mobile +
                        " , and its not up to 11 digits, please restart and input 11  digits of your phone number ";
                    }
                    console.log(message);
                  }
                );
              }
            );
          });
        }
      );
    }
  );
});
