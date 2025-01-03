import React from "react";

export default function Feature() {
  const products = [
    { id: 1, image: "Stat-1.jpg", name: "Set of diaries", price: "105.99" },
    { id: 2, image: "book-1.jpg", name: "Psychology of Money", price: "118.99" },
    { id: 3, image: "Stat-2.jpg", name: "Cutter Set", price: "78.49" },
    { id: 4, image: "book-2.jpg", name: "It ends with us paperback", price: "127.89" },
    { id: 5, image: "book-3.jpg", name: "A good girl's guide to murder series", price: "322.50" },
    { id: 6, image: "Stat-3.jpg", name: "Set of stationery", price: "409.99" },
    { id: 7, image: "book-4.jpg", name: "The Subtle Art", price: "233.20" },
    { id: 8, image: "Stat-4.jpg", name: "Year's diary", price: "71.99" },
    { id: 9, image: "book-5.jpg", name: "Welcome to Hyunman-dong Bookshop", price: "104.99" },
    { id: 10, image: "Stat-5.jpg", name: "Exam Pads", price: "89.75" },
  ];

  return (
    <div className="p-4 md:p-8">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-center mb-6 font-serif">Featured Products</h2>
      {/* Product Grid */}
      <div className="grid grid-rows-1 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-md w-full h-[150px] flex items-center bg-white shadow"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-full object-cover rounded-md mr-4"
            />
            {/* Product Details */}
            <div className="flex flex-col flex-grow">
              <h3
                className="font-semibold break-words text-base leading-tight"
              >
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
