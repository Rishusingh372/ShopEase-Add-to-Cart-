let products = [
    {
        id: 1,
        name: "Mountain Bike Pro",
        price: 499,
        image: "../bick1.webp",
        category: "bicycle"
    },
    {
        id: 2,
        name: "Road Bike Elite",
        price: 799,
        image: "../bick2.webp",
        category: "bicycle"
    },
    {
        id: 3,
        name: "City Bike Comfort",
        price: 349,
        image: "../bick3.webp",
        category: "bicycle"
    },
    {
        id: 4,
        name: "iPhone 15 Pro",
        price: 999,
        image: "../iphone15.webp",
        category: "phone"
    },
    {
        id: 5,
        name: "Samsung Galaxy S23",
        price: 899,
        image: "../galaxyS23.webp",
        category: "phone"
    },
    {
        id: 6,
        name: "Google Pixel 7",
        price: 599,
        image: "../pixel7.webp",
        category: "phone"
    },
    {
        id: 7,
        name: "Apple AirPods Pro 2",
        price: 249,
        image: "../airpodspro2.webp",
        category: "earbuds"
    },
    {
        id: 8,
        name: "Sony WH-1000XM5",
        price: 399,
        image: "../sonyheadphones.webp",
        category: "headphones"
    },
    {
        id: 9,
        name: "Bose QuietComfort 45",
        price: 329,
        image: "../boseqc45.webp",
        category: "headphones"
    },
    {
        id: 10,
        name: "OnePlus 11",
        price: 699,
        image: "../oneplus11.webp",
        category: "phone"
    },
    {
        id: 11,
        name: "Xiaomi Redmi Note 12",
        price: 299,
        image: "../redminote12.webp",
        category: "phone"
    },
    {
        id: 12,
        name: "JBL Flip 6",
        price: 129,
        image: "../jblflip6.webp",
        category: "speaker"
    },
    {
        id: 13,
        name: "Apple Watch Series 8",
        price: 399,
        image: "../applewatch8.webp",
        category: "smartwatch"
    },
    {
        id: 14,
        name: "Samsung Galaxy Watch 5",
        price: 279,
        image: "../galaxywatch5.webp",
        category: "smartwatch"
    },
    {
        id: 15,
        name: "Amazon Echo Dot (5th Gen)",
        price: 49,
        image: "../echodot5.webp",
        category: "smart home"
    }
];

// Search function
export function searchProducts(query) {
    query = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
    );
}

export default products;


