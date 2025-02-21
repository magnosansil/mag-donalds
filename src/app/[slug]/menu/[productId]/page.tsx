import { getProductById } from "@/data/getProductById";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await getProductById(productId);

  return (
    <>
      <div className="relative h-[300px] w-full">
        <ProductHeader product={product} />
      </div>
      <h1>Product Page</h1>
      {slug}
      {product.name}
    </>
  );
};

export default ProductPage;
