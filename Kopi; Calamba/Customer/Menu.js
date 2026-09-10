const state = {
  product: null,
  editCartId: null,
  quantity: 1,
  choices: {}
};

const tabs = document.getElementById("menuTabs");
const sections = document.getElementById("menuSections");
const search = document.getElementById("menuSearch");
const customizer = document.getElementById("customizer");
const customForm = document.getElementById("customForm");
const customImage = document.getElementById("customImage");
const customTitle = document.getElementById("customizerTitle");
const customDescription = document.getElementById("customDescription");
const customOptions = document.getElementById("customOptions");
const customPrice = document.getElementById("customPrice");
const quantityValue = document.getElementById("quantityValue");
const buyNowBtn = document.getElementById("buyNowBtn");
const emptyState = document.createElement("p");
emptyState.className = "empty-state";
emptyState.textContent = "No menu item found.";

const drinkSizeOptions = {
  "kopi-special": ["ICED - 16oz"],
  "caramel-macchiato": ["HOT - 12oz", "ICED - 16oz"],
  "sea-salt-latte": ["ICED - 16oz"],
  "white-choco-mocha": ["HOT - 12oz", "ICED - 16oz"],
  "salted-caramel": ["HOT - 12oz", "ICED - 16oz"],
  "nutella-latte": ["ICED - 16oz"],
  "spanish-latte": ["HOT - 12oz", "ICED - 16oz"],
  "dirty-matcha": ["ICED - 16oz"],
  "cafe-latte": ["HOT - 12oz", "ICED - 16oz"],
  "dark-mocha": ["HOT - 12oz", "ICED - 16oz"],
  "americano": ["HOT - 12oz", "ICED - 16oz"],
  "matcha-latte": ["HOT - 12oz", "ICED - 16oz"],
  "milky-chocolate": ["HOT - 12oz", "ICED - 16oz"],
  "sea-salt-matcha": ["ICED - 16oz"],
  "chocolate-matcha": ["ICED - 16oz"],
  "milky-oreo": ["ICED - 16oz"],
  "milky-strawberry": ["ICED - 16oz"],
  "strawberry-oreo": ["ICED - 16oz"],
  "hibiscus-tea-with-strawberry": ["HOT - 12oz", "ICED - 16oz"]
};

renderTabs();
registerProductSliders();
renderMenu();
bindProductCards();
openEditorFromUrl();

search.addEventListener("input", () => renderMenu(search.value.trim().toLowerCase()));

customForm.addEventListener("submit", event => {
  event.preventDefault();
  saveCurrentOrder(false);
});

buyNowBtn.addEventListener("click", () => saveCurrentOrder(true));

document.querySelector("[data-close-customizer]").addEventListener("click", closeCustomizer);

document.querySelectorAll("[data-qty]").forEach(button => {
  button.addEventListener("click", () => {
    state.quantity = Math.max(1, state.quantity + (button.dataset.qty === "plus" ? 1 : -1));
    updateCustomizerPrice();
  });
});

function renderTabs() {
  tabs.addEventListener("click", event => {
    const button = event.target.closest(".tab-btn");
    if (!button) return;
    document.querySelectorAll(".tab-btn").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.target).scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderMenu(query = "") {
  let hasResults = false;

  sections.querySelectorAll(".menu-category").forEach(category => {
    const categoryName = category.querySelector("h2")?.textContent.toLowerCase() || "";
    let categoryHasVisibleCard = false;

    category.querySelectorAll(".product-card").forEach(card => {
      const productText = card.textContent.toLowerCase();
      const matches = !query || productText.includes(query) || categoryName.includes(query);
      card.hidden = !matches;
      categoryHasVisibleCard = categoryHasVisibleCard || matches;
    });

    category.hidden = !categoryHasVisibleCard;
    hasResults = hasResults || categoryHasVisibleCard;
  });

  if (!hasResults) {
    if (!emptyState.isConnected) sections.appendChild(emptyState);
  } else {
    emptyState.remove();
  }
}

function bindProductCards() {
  sections.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const product = productFromCard(card) || KopiStore.findProduct(card.dataset.productId);
      if (!product) return;

      if (product.customizable === false) {
        addFixedProduct(product);
        return;
      }

      openCustomizer(product);
    });
  });
}

function productFromCard(card) {
  const image = card.querySelector("img");
  const title = card.querySelector("h3");
  if (!image || !title) return null;

  const product = {
    id: card.dataset.productId,
    name: title.textContent.trim(),
    image: image.getAttribute("src"),
    description: card.dataset.description || "Customize your order.",
    type: card.dataset.productType || "drink",
    customizable: card.dataset.customizable !== "false",
    prices: parseCardJson(card.dataset.prices, {}),
    options: parseCardJson(card.dataset.options, [])
  };

  return applyDrinkSizeOptions(product);
}

function applyDrinkSizeOptions(product) {
  const sizes = drinkSizeOptions[product.id];
  if (!sizes) return product;

  const prices = {};
  if (sizes.includes("HOT - 12oz")) prices["HOT - 12oz"] = product.prices["12oz"];
  if (sizes.includes("ICED - 16oz")) prices["ICED - 16oz"] = product.prices["16oz"];

  const sizeOption = {
    key: "size",
    label: "Size",
    values: sizes,
    defaultValue: sizes[0],
    priceKey: true
  };

  return {
    ...product,
    prices,
    options: [
      ...product.options.filter(option => option.key === "sugar"),
      ...product.options.filter(option => option.key !== "temperature" && option.key !== "size" && option.key !== "sugar"),
      sizeOption
    ]
  };
}

function parseCardJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function addFixedProduct(product) {
  KopiStore.addToCart({
    productId: product.id,
    name: product.name,
    image: product.image,
    options: {},
    price: basePrice(product),
    quantity: 1
  });
}

function openCustomizer(product, cartItem = null) {
  state.product = product;
  state.editCartId = cartItem?.cartId || null;
  state.quantity = cartItem?.quantity || 1;
  state.choices = {};

  product.options.forEach(option => {
    state.choices[option.key] = cartItem?.options?.[option.label] || cartItem?.options?.[option.key] || option.defaultValue || option.values[0];
  });

  customImage.src = product.image;
  customImage.alt = product.name;
  customTitle.textContent = product.name;
  customDescription.textContent = product.description;
  renderOptions();
  updateCustomizerPrice();
  customizer.classList.add("open");
  customizer.setAttribute("aria-hidden", "false");
}

function renderOptions() {
  customOptions.innerHTML = state.product.options.map(option => `
    <fieldset>
      <legend>${option.label}:</legend>
      <div class="pill-row" data-option="${option.key}">
        ${option.values.map(value => `
          <button class="pill ${state.choices[option.key] === value ? "active" : ""}" type="button" data-key="${option.key}" data-value="${value}">
            ${value}
          </button>
        `).join("")}
      </div>
    </fieldset>
  `).join("");

  customOptions.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      state.choices[pill.dataset.key] = pill.dataset.value;
      renderOptions();
      updateCustomizerPrice();
    });
  });
}

function basePrice(product) {
  return Object.values(product.prices)[0];
}

function unitPrice() {
  const priceOption = state.product.options.find(option => option.priceKey);
  if (!priceOption) return basePrice(state.product);
  return state.product.prices[state.choices[priceOption.key]] || basePrice(state.product);
}

function updateCustomizerPrice() {
  quantityValue.textContent = state.quantity;
  customPrice.textContent = `₱ ${unitPrice() * state.quantity}`;
}

function currentOrderItem() {
  const optionLabels = {};
  state.product.options.forEach(option => {
    optionLabels[option.label] = state.choices[option.key];
  });

  return {
    productId: state.product.id,
    name: state.product.name,
    image: state.product.image,
    options: optionLabels,
    price: unitPrice(),
    quantity: state.quantity
  };
}

function saveCurrentOrder(goCheckout) {
  const order = currentOrderItem();

  if (state.editCartId) {
    KopiStore.updateCartItem(state.editCartId, order);
  } else if (!goCheckout) {
    KopiStore.addToCart(order);
  }

  if (goCheckout) {
    KopiStore.setCheckout([{ ...order, cartId: state.editCartId || "buy-now" }]);
    window.location.href = "Cart.html?checkout=1";
    return;
  }

  closeCustomizer();
}

function closeCustomizer() {
  customizer.classList.remove("open");
  customizer.setAttribute("aria-hidden", "true");
  history.replaceState(null, "", "Menu.html");
}

function openEditorFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const editId = params.get("edit");
  if (!editId) return;

  const cartItem = KopiStore.getCart().find(item => item.cartId === editId);
  if (!cartItem) return;

  const card = sections.querySelector(`[data-product-id="${selectorValue(cartItem.productId)}"]`);
  const product = (card && productFromCard(card)) || KopiStore.findProduct(cartItem.productId);
  if (product?.customizable !== false) openCustomizer(product, cartItem);
}

function selectorValue(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function registerProductSliders() {
  document.querySelectorAll(".product-row").forEach((row, index) => {
    const sliderIndex = index + 1;
    window[`prevProduct${sliderIndex}`] = () => moveProductSlider(sliderIndex, -1);
    window[`nextProduct${sliderIndex}`] = () => moveProductSlider(sliderIndex, 1);
  });
}

function moveProductSlider(index, direction) {
  const row = document.getElementById(`product-row-${index}`);
  if (!row) return;
  row.scrollBy({ left: direction * Math.round(row.clientWidth * 0.85), behavior: "smooth" });
}
