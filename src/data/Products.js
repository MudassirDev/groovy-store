export const Products = {
    "test-product": {
        id: "test-product",
        name: "Test Product",
        handle: "test-product",
        description: "Short description here...",
        images: [
            "/images/demo-product.svg",
            "/images/f1.jpg",
            "/images/f2.jpg"
        ],
        variants: [
            {
                id: "123123123",
                label: "XL",
                price: 123,
                compareToPrice: 150,
                stock: 12
            },
            {
                id: "456456456",
                label: "L",
                price: 120,
                compareToPrice: 140,
                stock: 5
            }
        ]
    }
};
