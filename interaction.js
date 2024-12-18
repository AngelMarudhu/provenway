let total = document.getElementById("footer_total");
let addToCard = document.getElementById("add_to_cart_button");
let headers = document.querySelector("header");

///////////////////////////////////////////////////////// THIS ONE FOR DYNAMICALLY GETTING  DATA AND ADDTIN TO THE TOTAL

// getting each input values through foreach loop we will easily accees the input and add eventlistern for each of the input radio buttons
// it's an array filled with all the elements we can easily loop them and adding click listener to them
// we can directly add the onclick event to the input then access here but it's easy to handling and easy to understand who are having input name units
document.querySelectorAll('input[name="units"]').forEach((input) => {
  input.addEventListener("click", function () {
    document.querySelectorAll(".option").forEach((specific) => {
      //// This line is when we navigate to next unit box we need to clear the previous interation styles
      //// if not this case the previous style still persist with last interaction
      specific.style.backgroundColor = "";
      specific.style.border = "";
    });
    //// this here helps us to find where we are as i told you before and closet helps us to find parent of the class name who have .option that's all
    //// when we click the input radio button the this keyword pointing to the current box and the close helps us to find what's parent of element with .option class
    const parentSection = this.closest(".option");
    if (parentSection) {
      parentSection.style.backgroundColor = "#fff9f9";
      parentSection.style.border = "2px solid #fe6c83";
    }

    // "This" keyword helps us to access the input attributes and selectors all the things in javascript we learned this keyword is dynamic binding we can manipulate them easily
    updateTotal(this);
  });
});

function updateTotal(selected) {
  let price = selected.value;
  total.innerHTML = `<p>Total : $${price}.00 USD</p>`;
}

///////////////////////////////////////////////////////// THIS ONE FOR ADD TO CARD FUNCTIONALITY

function addToCards() {
  if (total.innerHTML === "") {
    alert("Waiting To Choose Something");
  } else {
    headers.textContent = "Your Item Sccessfully Added";
  }
}

addToCard.addEventListener("click", addToCards);

/////////////////////////////////////////////////////// THIS ONE FOR EXPANDING THE SELECTORS BASED ON THE ID ATTRIBUTE
/// name units is commmon for all the input radio input so who have the units name we can easily fetch the element in the array then loop it adding listener
let gettingElement = document.querySelectorAll('input[name="units"]');

gettingElement.forEach((element) => {
  element.addEventListener("click", function () {
    expandSelector(this);
  });
});

function expandSelector(element) {
  //   console.log(element debugg);
  // Clear all elements with the same class
  document.querySelectorAll(".container_one_selectors").forEach((item) => {
    item.innerHTML = ""; // initially we need to empty all of them
  });

  const targetSelectorId = element.getAttribute("data-selector"); // data selector pass information without affecting the structure fetching dynamic id specific element
  const targetSelector = document.getElementById(targetSelectorId); // if there is particular targetid then only render the selectors the dataselector and element id should be same if not the case doesn't work like what we did above....
  // console.log(targetSelector)

  if (targetSelector) {
    targetSelector.innerHTML = `
<div class="selectors">
    <div class="one">
        <div>
            <label class="selector_one">
            <span>Size</span>
            <select class="custom-select">
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>

             <select class="custom-select">
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>
            </label>
        </div>
        <div class="selector_div_two">
            <label class="selector_one">
            <span>Colour</span>
            <select class="custom-select">
                <option>Colour</option>
                <option>White</option>
                <option>Blue</option>
            </select>

                <select class="custom-select">
                <option>Colour</option>
                <option>White</option>
                <option>Blue</option>
            </select>
            </label>
        </div>
    </div>
</div>
  `;
  }
}
