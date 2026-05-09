import { useEffect, useState } from "react";

type Cart = {
  id: number;
  products: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
  }[];
  totalProducts: number;
  totalQuantity: number;
};
type CartsResponse = {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
};

export function useCarts() {
  const [data, setData] = useState<CartsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch carts");
        return r.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}