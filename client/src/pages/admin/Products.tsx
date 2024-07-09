import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      id: '39842-231',
      name: 'Macbook Pro 15\'',
      status: 'Available',
      category: 'Laptops',
      price: '$2,999.00',
      date: '20 Jan, 2022'
    },
    {
      id: '39842-232',
      name: 'Macbook Pro 13\'',
      status: 'In Review',
      category: 'Laptops',
      price: '$2,999.00',
      date: '22 Feb, 2022'
    },
    {
      id: '39842-233',
      name: 'iPhone 13 Mini',
      status: 'Sold Out',
      category: 'Phones',
      price: '$2,999.00',
      date: '22 Feb, 2022'
    },
    {
      id: '39842-234',
      name: 'iPhone 14',
      status: 'Preorder',
      category: 'Phones',
      price: '$2,999.00',
      date: '22 Feb, 2022'
    },
    {
      id: '39842-235',
      name: 'AirPods 2',
      status: 'Available',
      category: 'Electronics',
      price: '$2,999.00',
      date: '22 Feb, 2022'
    }
  ];

  return (
    <div className="products p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Product</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.status}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.date}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View</button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
