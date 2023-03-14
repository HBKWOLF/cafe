// Get all the menu items
const menuItems = document.querySelectorAll('.menu-item');

// Loop through each menu item and add a click event listener
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the name and price of the menu item
        const name = item.querySelector('.item-name').textContent;
        const price = item.querySelector('.item-price').textContent;

        // Create a new order item element and add it to the order list
        const orderList = document.querySelector('#order-list');
        const orderItem = document.createElement('li');
        orderItem.innerHTML = `${name} - ${price}`;
        orderList.appendChild(orderItem);
    });
});
