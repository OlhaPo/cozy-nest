// import { SanityDocument } from '@sanity/client'; // Тип для документів Sanity
// import { useState, useEffect } from 'react';

// import { client } from '../sanity/client'; // Підключаємо клієнт для Sanity

// // Запит до Sanity
// const PRODUCTS_QUERY = `*[ _type == "product" ]{ _id, title, productCode, price, image }`;

// export const useFetchProductsFromSanity = (options: {
//   next: { revalidate: number };
// }) => {
//   const [products, setProducts] = useState<SanityDocument[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Функція для фетчінгу продуктів
//     const fetchProducts = async () => {
//       try {
//         const data = await client.fetch<SanityDocument[]>(
//           PRODUCTS_QUERY,
//           {},
//           options
//         );
//         setProducts(data);
//       } catch (error) {
//         setError('Failed to fetch products');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [options]);

//   return { products, loading, error };
// };
