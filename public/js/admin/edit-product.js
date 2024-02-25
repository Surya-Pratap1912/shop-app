document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productId = document.getElementById('productId').value;
        const title = document.getElementById('title').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;

        try {
            const response = await axios.post(`/admin/edit-product/${productId}`, {
                title,
                imageUrl,
                price,
                description
            });

            // Handle response accordingly
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
