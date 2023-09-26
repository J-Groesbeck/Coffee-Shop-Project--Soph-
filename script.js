//index page
//written by me
//show or hide contact info

function showContact() {
  var info = document.getElementById("contactInfo");
  info.style.display = "block";
}

function hideContact() {
  var info = document.getElementById("contactInfo");
  info.style.display = "none";
}

//allows you to change the color for shirts/hoodies

function whiteShirtM() {
  var img1 = document.getElementById("white-shirt-M");
  var img2 = document.getElementById("black-shirt-M");
  var img3 = document.getElementById("white-shirt-F");
  var img4 = document.getElementById("black-shirt-F");

  img1.style.display = "block"
  img2.style.display = "none"
  img3.style.display = "none"
  img4.style.display = "none"
}

function blackShirtM() {
  var img1 = document.getElementById("white-shirt-M");
  var img2 = document.getElementById("black-shirt-M");
  var img3 = document.getElementById("white-shirt-F");
  var img4 = document.getElementById("black-shirt-F");

  img1.style.display = "none"
  img2.style.display = "block"
  img3.style.display = "none"
  img4.style.display = "none"
}

function whiteShirtF() {
  var img1 = document.getElementById("white-shirt-M");
  var img2 = document.getElementById("black-shirt-M");
  var img3 = document.getElementById("white-shirt-F");
  var img4 = document.getElementById("black-shirt-F");

  img1.style.display = "none"
  img2.style.display = "none"
  img3.style.display = "block"
  img4.style.display = "none"
}

function blackShirtF() {
  var img1 = document.getElementById("white-shirt-M");
  var img2 = document.getElementById("black-shirt-M");
  var img3 = document.getElementById("white-shirt-F");
  var img4 = document.getElementById("black-shirt-F");

  img1.style.display = "none"
  img2.style.display = "none"
  img3.style.display = "none"
  img4.style.display = "block"
}

function whiteHoodieM() {
  var img1 = document.getElementById("white-hoodie-M");
  var img2 = document.getElementById("black-hoodie-M");
  var img3 = document.getElementById("white-hoodie-F");
  var img4 = document.getElementById("black-hoodie-F");

  img1.style.display = "block"
  img2.style.display = "none"
  img3.style.display = "none"
  img4.style.display = "none"
}

function blackHoodieM() {
  var img1 = document.getElementById("white-hoodie-M");
  var img2 = document.getElementById("black-hoodie-M");
  var img3 = document.getElementById("white-hoodie-F");
  var img4 = document.getElementById("black-hoodie-F");

  img1.style.display = "none"
  img2.style.display = "block"
  img3.style.display = "none"
  img4.style.display = "none"
}

function whiteHoodieF() {
  var img1 = document.getElementById("white-hoodie-M");
  var img2 = document.getElementById("black-hoodie-M");
  var img3 = document.getElementById("white-hoodie-F");
  var img4 = document.getElementById("black-hoodie-F");

  img1.style.display = "none"
  img2.style.display = "none"
  img3.style.display = "block"
  img4.style.display = "none"
}

function blackHoodieF() {
  var img1 = document.getElementById("white-hoodie-M");
  var img2 = document.getElementById("black-hoodie-M");
  var img3 = document.getElementById("white-hoodie-F");
  var img4 = document.getElementById("black-hoodie-F");

  img1.style.display = "none"
  img2.style.display = "none"
  img3.style.display = "none"
  img4.style.display = "block"
}

//menu page
//below this point is code copy+pasted from the internet with slight edits
//have checkboxes function as filters

function checkCheckBoxes() {

  // Get the checkboxes
  var checkBox1 = document.getElementById("cbx1");
  var checkBox2 = document.getElementById("cbx2");
  var checkBox3 = document.getElementById("cbx3");
  var checkBox4 = document.getElementById("cbx4");
  var checkBox5 = document.getElementById("cbx5");

  // Get the output texts
  var texts = document.getElementsByClassName("text");

  // If all checkboxes are unchecked, show all texts
  if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == false) {
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.display = "block";
    }
  } else {
    // Loop through each text element
    for (var i = 0; i < texts.length; i++) {
      var text = texts[i];

      // Check the corresponding checkbox and show/hide the text accordingly
      if (text.classList.contains("text1") && checkBox1.checked) {
        text.style.display = "block";
      } else if (text.classList.contains("text2") && checkBox2.checked) {
        text.style.display = "block";
      } else if (text.classList.contains("text3") && checkBox3.checked) {
        text.style.display = "block";
      } else if (text.classList.contains("text4") && checkBox4.checked) {
        text.style.display = "block";
      } else if (text.classList.contains("text5") && checkBox5.checked) {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    }
  }
}

//sort products by price

function sortProductsAscending() {
  sortProductsByPrice(true);
}

function sortProductsDescending() {
  sortProductsByPrice(false);
}

function sortProductsByPrice(ascending) {
  // Get the container for product cards
  var container = document.querySelector(".container");

  // Get all product cards
  var products = container.querySelectorAll("[data-price]");

  // Convert NodeList to Array and sort by price
  var sortedProducts = Array.from(products).sort(function(a, b) {
    var priceA = parseFloat(a.dataset.price);
    var priceB = parseFloat(b.dataset.price);

    if (ascending) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  // Remove all product cards from the DOM
  products.forEach(function(product) {
    product.remove();
  });

  // Add sorted product cards back to the original container
  sortedProducts.forEach(function(product) {
    container.appendChild(product);
  });
}

//below this point is code that I wrote
//show or hide cart

function show_cart() {
  var cart = document.getElementById("cart");
  cart.style.display = "block";
}

function hide_cart() {
  var cart = document.getElementById("cart");
  cart.style.display = "none";
}

//add or remove items to cart

function add_to_cart1() {
  var item1 = document.getElementById("item1");
  item1.style.display = "block";
}

function add_to_cart2() {
  var item2 = document.getElementById("item2");
  item2.style.display = "block";
}

function add_to_cart3() {
  var item3 = document.getElementById("item3");
  item3.style.display = "block";
}

function add_to_cart4() {
  var item4 = document.getElementById("item4");
  item4.style.display = "block";
}

function add_to_cart5() {
  var item5 = document.getElementById("item5");
  item5.style.display = "block";
}

function add_to_cart6() {
  var item6 = document.getElementById("item6");
  item6.style.display = "block";
}

function add_to_cart7() {
  var item7 = document.getElementById("item7");
  item7.style.display = "block";
}

function add_to_cart8() {
  var item8 = document.getElementById("item8");
  item8.style.display = "block";
}

function add_to_cart9() {
  var item9 = document.getElementById("item9");
  item9.style.display = "block";
}

function add_to_cart10() {
  var item10 = document.getElementById("item10");
  item10.style.display = "block";
}

function add_to_cart11() {
  var item11 = document.getElementById("item11");
  item11.style.display = "block";
}

function add_to_cart12() {
  var item12 = document.getElementById("item12");
  item12.style.display = "block";
}

function add_to_cart13() {
  var item13 = document.getElementById("item13");
  item13.style.display = "block";
}

function add_to_cart14() {
  var item14 = document.getElementById("item14");
  item14.style.display = "block";
}

function add_to_cart15() {
  var item15 = document.getElementById("item15");
  item15.style.display = "block";
}

function add_to_cart16() {
  var item16 = document.getElementById("item16");
  item16.style.display = "block";
}

function remove_from_cart1() {
  var item1 = document.getElementById("item1");
  item1.style.display = "none";
}

function remove_from_cart2() {
  var item2 = document.getElementById("item2");
  item2.style.display = "none";
}

function remove_from_cart3() {
  var item3 = document.getElementById("item3");
  item3.style.display = "none";
}

function remove_from_cart4() {
  var item4 = document.getElementById("item4");
  item4.style.display = "none";
}

function remove_from_cart5() {
  var item5 = document.getElementById("item5");
  item5.style.display = "none";
}

function remove_from_cart6() {
  var item6 = document.getElementById("item6");
  item6.style.display = "none";
}

function remove_from_cart7() {
  var item7 = document.getElementById("item7");
  item7.style.display = "none";
}

function remove_from_cart8() {
  var item8 = document.getElementById("item8");
  item8.style.display = "none";
}

function remove_from_cart9() {
  var item9 = document.getElementById("item9");
  item9.style.display = "none";
}

function remove_from_cart10() {
  var item10 = document.getElementById("item10");
  item10.style.display = "none";
}

function remove_from_cart11() {
  var item11 = document.getElementById("item11");
  item11.style.display = "none";
}

function remove_from_cart12() {
  var item12 = document.getElementById("item12");
  item12.style.display = "none";
}

function remove_from_cart13() {
  var item13 = document.getElementById("item13");
  item13.style.display = "none";
}

function remove_from_cart14() {
  var item14 = document.getElementById("item14");
  item14.style.display = "none";
}

function remove_from_cart15() {
  var item15 = document.getElementById("item15");
  item15.style.display = "none";
}

function remove_from_cart16() {
  var item16 = document.getElementById("item16");
  item16.style.display = "none";
}

//below is copy+pasted with slight edits
//price of items in cart change with the number selected in dropdown

function updatePrice1() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count1").value;
  var cost = parseFloat(document.getElementById("item-price1").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price1").textContent = totalCost.toFixed(2);
}

function updatePrice2() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count2").value;
  var cost = parseFloat(document.getElementById("item-price2").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price2").textContent = totalCost.toFixed(2);
}

function updatePrice3() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count3").value;
  var cost = parseFloat(document.getElementById("item-price3").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price3").textContent = totalCost.toFixed(2);
}

function updatePrice4() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count4").value;
  var cost = parseFloat(document.getElementById("item-price4").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price4").textContent = totalCost.toFixed(2);
}

function updatePrice5() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count5").value;
  var cost = parseFloat(document.getElementById("item-price5").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price5").textContent = totalCost.toFixed(2);
}

function updatePrice6() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count6").value;
  var cost = parseFloat(document.getElementById("item-price6").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price6").textContent = totalCost.toFixed(2);
}

function updatePrice7() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count7").value;
  var cost = parseFloat(document.getElementById("item-price7").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price7").textContent = totalCost.toFixed(2);
}

function updatePrice8() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count8").value;
  var cost = parseFloat(document.getElementById("item-price8").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price8").textContent = totalCost.toFixed(2);
}

function updatePrice9() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count9").value;
  var cost = parseFloat(document.getElementById("item-price9").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price9").textContent = totalCost.toFixed(2);
}

function updatePrice10() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count10").value;
  var cost = parseFloat(document.getElementById("item-price10").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price10").textContent = totalCost.toFixed(2);
}

function updatePrice11() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count11").value;
  var cost = parseFloat(document.getElementById("item-price11").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price11").textContent = totalCost.toFixed(2);
}

function updatePrice12() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count12").value;
  var cost = parseFloat(document.getElementById("item-price12").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price12").textContent = totalCost.toFixed(2);
}

function updatePrice13() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count13").value;
  var cost = parseFloat(document.getElementById("item-price13").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price13").textContent = totalCost.toFixed(2);
}

function updatePrice14() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count14").value;
  var cost = parseFloat(document.getElementById("item-price14").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price14").textContent = totalCost.toFixed(2);
}

function updatePrice15() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count15").value;
  var cost = parseFloat(document.getElementById("item-price15").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price15").textContent = totalCost.toFixed(2);
}

function updatePrice16() {
  // Get the selected item count and cost
  var itemCount = document.getElementById("item-count16").value;
  var cost = parseFloat(document.getElementById("item-price16").getAttribute("data-cost"));

  // Calculate the total cost
  var totalCost = itemCount * cost;

  // Update the displayed price
  document.getElementById("item-price16").textContent = totalCost.toFixed(2);
}

//calculate and display total price of order

function finalPrice() {
  var items = document.getElementsByClassName("items");
  var totalPrice = 0;

  for (var i = 0; i < items.length; i++) {
    var itemCount = parseInt(document.getElementById("item-count" + (i + 1)).value);
    var itemPrice = parseFloat(document.getElementById("item-price" + (i + 1)).getAttribute("data-cost"));
    var itemDisplay = window.getComputedStyle(items[i]).getPropertyValue("display");

    if (itemDisplay !== "none") {
      totalPrice += itemCount * itemPrice;
    }
  }

  document.getElementById("final-price").textContent = totalPrice.toFixed(2);
}

//below is half me half copy+pasted

function checkCart() {
  var elements = document.getElementsByClassName('items');
  var carthelp = document.getElementById('carthelp');
  var allHidden = true;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.style.display === 'block') {
      allHidden = false;
      break; // Exit the loop since we found a visible element
    }
  }

  if (allHidden) {
    carthelp.style.display = 'block';
  } else {
    carthelp.style.display = 'none';
  }
}

// Call checkCart initially and then every 1 millisecond (0.01 sec)
checkCart();
setInterval(checkCart, 1);

// Call finalPrice initially and then every 1 millisecond (0.01 sec)
finalPrice();
setInterval(finalPrice, 1);