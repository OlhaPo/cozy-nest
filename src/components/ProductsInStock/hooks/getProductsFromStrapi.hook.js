const url = process.env.NEXT_PUBLIC_API_URL || '';

async function getProductsFromStrapi() {
  const res = await fetch(url, { next: { revalidate: 10 } });

  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();

  return data.data;
}
export default getProductsFromStrapi;
