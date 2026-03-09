import ProductCard from "../productCard/ProductCard";

interface ProductGridProps {
  dict: any;
}

const ProductGrid = ({ dict }) => {
  const products = [
    {
      name: "RG Nu Gundam 1/144",
      price: 189.9,
      originalPrice: 229.9,
      category: "Real Grade",
      badge: undefined,
    },
    {
      name: "MG Zaku II Ver. 2.0",
      price: 349.9,
      category: "Master Grade",
      badge: "Novo",
    },
    {
      name: "HG Unicorn Gundam",
      price: 89.9,
      originalPrice: 109.9,
      category: "High Grade",
    },
    {
      name: "PG Strike Freedom",
      price: 899.9,
      category: "Perfect Grade",
      badge: "Destaque",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.products.title}</h2>
      <div className="flex flex-wrap gap-4">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            price={p.price}
            originalPrice={p.originalPrice}
            category={p.category}
            badge={p.badge}
            imageSrc="/images/product_gunpla.png"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
