import { useEffect, useState } from 'react';
//Importing our server url
const apiUrl = import.meta.env.VITE_SERVER_URL;
// Define the Product interface
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

// Fetch products from the API
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${apiUrl}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array in case of error
  }
}

// Card component
function Card() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        setError(error.message); // Set error message
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display products
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
