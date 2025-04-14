// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    updateTotal(); // initial total calc
  
    // Quantity buttons
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
  
    plusButtons.forEach((btn) =>
      btn.addEventListener("click", () => {
        const quantityEl = btn.nextElementSibling;
        quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
        updateTotal();
      })
    );
  
    minusButtons.forEach((btn) =>
      btn.addEventListener("click", () => {
        const quantityEl = btn.previousElementSibling;
        let currentQty = parseInt(quantityEl.textContent);
        if (currentQty > 0) {
          quantityEl.textContent = currentQty - 1;
          updateTotal();
        }
      })
    );
  
    // Delete buttons
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    deleteButtons.forEach((btn) =>
      btn.addEventListener("click", () => {
        const productCard = btn.closest(".card-body");
        productCard.remove();
        updateTotal();
      })
    );
  
    // Like buttons
    const heartButtons = document.querySelectorAll(".fa-heart");
    heartButtons.forEach((btn) =>
      btn.addEventListener("click", () => {
        btn.classList.toggle("liked");
        btn.style.color = btn.classList.contains("liked") ? "red" : "black";
      })
    );
  });
  
  // Function to update total price
  function updateTotal() {
    let total = 0;
    const products = document.querySelectorAll(".card-body");
  
    products.forEach((product) => {
      const priceText = product.querySelector(".unit-price").textContent;
      const price = parseFloat(priceText.replace("$", "").trim());
  
      const quantity = parseInt(product.querySelector(".quantity").textContent);
  
      total += price * quantity;
    });
  
    document.querySelector(".total").textContent = total + " $";
  }
  