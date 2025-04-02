import { getAllProducts } from "@/api/productRequest";
import { Button } from "@/components/ui/button";

import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetAllProducts = () => {
    (async () => {
      setLoading(true);
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  };

  console.log(products);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Button onClick={handleGetAllProducts}>Get All Product</Button>

      {products.length &&
        products.map((product: { _id: string; sleeps: string }) => {
          return (
            <div key={product._id}>
              <p>{product.sleeps}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
