const cartView = document.getElementById("cartView");
const checkoutView = document.getElementById("checkoutView");
const cartList = document.getElementById("cartList");
const checkoutList = document.getElementById("checkoutList");
const cartTotal = document.getElementById("cartTotal");
const checkoutTotal = document.getElementById("checkoutTotal");
const checkoutBarTotal = document.getElementById("checkoutBarTotal");
const checkoutCount = document.getElementById("checkoutCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const orderNowBtn = document.getElementById("orderNowBtn");
const confirmationForm = document.getElementById("confirmationForm");
const referenceNumber = document.getElementById("referenceNumber");
const houseAddress = document.getElementById("houseAddress");
const voucherCode = document.getElementById("voucherCode");
const applyVoucherBtn = document.getElementById("applyVoucherBtn");
const subtotalAmount = document.getElementById("subtotalAmount");
const deliveryAmount = document.getElementById("deliveryAmount");
const voucherAmount = document.getElementById("voucherAmount");
const receiptModal = document.getElementById("receiptModal");
const closeReceiptBtn = document.getElementById("closeReceiptBtn");
const receiptOrderNo = document.getElementById("receiptOrderNo");
const receiptDate = document.getElementById("receiptDate");
const receiptItems = document.getElementById("receiptItems");
const receiptTotal = document.getElementById("receiptTotal");
const cartItemTemplate = document.getElementById("cartItemTemplate");
const emptyCartTemplate = document.getElementById("emptyCartTemplate");
const checkoutLineTemplate = document.getElementById("checkoutLineTemplate");
const emptyCheckoutTemplate = document.getElementById("emptyCheckoutTemplate");
const receiptHeadTemplate = document.getElementById("receiptHeadTemplate");
const receiptRowTemplate = document.getElementById("receiptRowTemplate");

const params = new URLSearchParams(window.location.search);
const isCheckout = params.get("checkout") === "1";
let voucherDiscount = 0;
let activeCheckoutItems = [];
let activeTotals = { subtotal: 0, delivery: 0, total: 0 };

if (isCheckout) {
  showCheckout();
} else {
  renderCart();
}

checkoutBtn.addEventListener("click", () => {
  const cart = KopiStore.getCart();
  if (!cart.length) return;
  KopiStore.setCheckout(cart);
  window.location.href = "Cart.html?checkout=1";
});

clearCartBtn.addEventListener("click", () => {
  KopiStore.clearCart();
  renderCart();
});

if (applyVoucherBtn) {
  applyVoucherBtn.addEventListener("click", () => {
    const code = voucherCode.value.trim().toUpperCase();
    voucherDiscount = code === "KOPI10" ? Math.min(10, activeTotals.subtotal) : 0;
    updateCheckoutTotals();
  });
}

if (orderNowBtn) {
  orderNowBtn.addEventListener("click", () => {
    if (!confirmationForm.reportValidity()) return;
    KopiStore.setAddress(houseAddress.value.trim());
    showReceipt();
  });
}

if (closeReceiptBtn) {
  closeReceiptBtn.addEventListener("click", () => {
    receiptModal.hidden = true;
    KopiStore.clearCart();
    KopiStore.setCheckout([]);
    window.location.href = "Menu.html";
  });
}

function renderCart() {
  const cart = KopiStore.getCart();
  const cartCount = KopiStore.cartCount(cart);
  cartView.hidden = false;
  checkoutView.hidden = true;
  cartList.dataset.count = `${cartCount} item${cartCount === 1 ? "" : "s"}`;

  if (!cart.length) {
    cartList.innerHTML = emptyCartTemplate.innerHTML;
    checkoutBtn.disabled = true;
  } else {
    cartList.innerHTML = cart.map(renderCartItem).join("");
    checkoutBtn.disabled = false;
  }

  cartTotal.textContent = `₱ ${formatWhole(KopiStore.cartTotal(cart))}`;
  bindItemActions(cartList);
  KopiStore.updateCartCount();
}

function showCheckout() {
  activeCheckoutItems = KopiStore.getCheckout();
  cartView.hidden = true;
  checkoutView.hidden = false;
  if (houseAddress) houseAddress.value = KopiStore.getAddress();

  checkoutList.innerHTML = activeCheckoutItems.length
    ? activeCheckoutItems.map(renderCheckoutItem).join("")
    : emptyCheckoutTemplate.innerHTML;

  checkoutCount.textContent = `${KopiStore.cartCount(activeCheckoutItems)} item${KopiStore.cartCount(activeCheckoutItems) === 1 ? "" : "s"}`;
  orderNowBtn.disabled = !activeCheckoutItems.length;
  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const subtotal = KopiStore.cartTotal(activeCheckoutItems);
  const delivery = 0;
  const total = Math.max(0, subtotal + delivery - voucherDiscount);
  activeTotals = { subtotal, delivery, total };

  subtotalAmount.textContent = `PHP ${formatMoney(subtotal)}`;
  deliveryAmount.textContent = `PHP ${formatMoney(delivery)}`;
  voucherAmount.textContent = `- PHP ${formatMoney(voucherDiscount)}`;
  checkoutTotal.textContent = `₱ ${formatMoney(total)}`;
  checkoutBarTotal.textContent = `₱ ${formatMoney(total)}`;
}

function renderCartItem(item) {
  const details = orderDetails(item);
  const itemNode = cartItemTemplate.content.firstElementChild.cloneNode(true);
  const image = itemNode.querySelector(".item-img");
  const detailsNode = itemNode.querySelector("[data-cart-details]");
  const editButton = itemNode.querySelector("[data-action='edit']");

  itemNode.dataset.cartId = item.cartId;
  image.src = item.image;
  image.alt = item.name;
  itemNode.querySelector("[data-cart-name]").textContent = item.name;
  itemNode.querySelector("[data-cart-price]").textContent = `₱ ${formatWhole(item.price * item.quantity)}`;
  itemNode.querySelector("[data-cart-quantity]").textContent = `x ${item.quantity}`;

  details.forEach(detail => {
    const detailLine = document.createElement("p");
    detailLine.textContent = detail;
    detailsNode.appendChild(detailLine);
  });

  if (!details.length) {
    editButton.replaceWith(document.createElement("span"));
  }

  return itemNode.outerHTML;
}

function renderCheckoutItem(item) {
  const line = checkoutLineTemplate.content.firstElementChild.cloneNode(true);
  line.dataset.cartId = item.cartId;
  line.querySelector("[data-checkout-name]").textContent = item.name;
  line.querySelector("[data-checkout-price]").textContent = `₱ ${formatWhole(item.price * item.quantity)}`;
  return line.outerHTML;
}

function orderDetails(item) {
  if (!item.options) return [item.temperature, item.size, item.sugar, item.ice].filter(Boolean);
  return Object.values(item.options).filter(Boolean);
}

function showReceipt() {
  const orderNo = `#${Math.floor(1000 + Math.random() * 9000)}`;
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).toUpperCase();

  receiptOrderNo.textContent = orderNo;
  receiptDate.textContent = date;
  receiptItems.innerHTML = "";
  receiptItems.appendChild(receiptHeadTemplate.content.firstElementChild.cloneNode(true));
  activeCheckoutItems.forEach(item => {
    const row = receiptRowTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector("[data-receipt-quantity]").textContent = `${item.quantity}X`;
    row.querySelector("[data-receipt-name]").textContent = item.name.toUpperCase();
    row.querySelector("[data-receipt-price]").textContent = `₱ ${formatWhole(item.price * item.quantity)}`;
    receiptItems.appendChild(row);
  });
  receiptTotal.textContent = `₱ ${formatWhole(activeTotals.total)}`;
  receiptModal.hidden = false;
}

function bindItemActions(root) {
  root.querySelectorAll("[data-action='edit']").forEach(button => {
    button.addEventListener("click", () => {
      const cartId = button.closest("[data-cart-id]").dataset.cartId;
      window.location.href = `Menu.html?edit=${encodeURIComponent(cartId)}`;
    });
  });

  root.querySelectorAll("[data-action='delete']").forEach(button => {
    button.addEventListener("click", () => {
      const cartId = button.closest("[data-cart-id]").dataset.cartId;
      KopiStore.deleteCartItem(cartId);

      if (checkoutView.hidden) {
        renderCart();
      } else {
        KopiStore.setCheckout(KopiStore.getCheckout().filter(item => item.cartId !== cartId));
        showCheckout();
      }
    });
  });
}

function formatMoney(value) {
  return Number(value).toFixed(2);
}

function formatWhole(value) {
  return Math.round(Number(value)).toLocaleString("en-US");
}
