import { ProductCard } from "../ProductsCard";

export const ProductsGrid = ({ products, placeHolder }) => (
  <div className="produtos">
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        placeHolder={product.urlImage}
      />
    ))}
  </div>
);