document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('/admin/products');
        const products = response.data;

        const productGrid = document.getElementById('productGrid');

        products.forEach(product => {
            const productItem = document.createElement('article');
            productItem.classList.add('card', 'product-item');
            productItem.innerHTML = `
                <header class="card__header">
                    <h1 class="product__title">${product.title}</h1>
                </header>
                <div class="card__image">
                    <img src="${product.imageUrl}" alt="${product.title}">
                </div>
                <div class="card__content">
                    <h2 class="product__price">$${product.price}</h2>
                    <p class="product__description">${product.description}</p>
                </div>
                <div class="card__actions">
                    <a href="/admin/edit-product/${product._id}" class="btn">Edit</a>
                    <button class="btn delete-btn" data-productid="${product._id}">Delete</button>
                </div>
            `;
            productGrid.appendChild(productItem);
        });

        // Add event listener for delete buttons
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const productId = button.dataset.productid;
                try {
                    const deleteResponse = await axios.post('/admin/delete-product', {
                        productId
                    });
                    // Handle delete response accordingly
                    console.log(deleteResponse.data);
                    // Optionally, remove the product from the UI
                    button.parentElement.parentElement.remove();
                } catch (error) {
                    console.error('Error:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
