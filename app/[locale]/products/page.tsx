import ProductGrid from "@/shared/components/layouts/productsGrid/ProductGrid";
import { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/getDictionary";

interface ProductsProps {
  locale: Locale;
}

export default async function Products({
  params
}: Readonly<{ params: Promise<ProductsProps> }>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div>
      <ProductGrid dict={dict} />
    </div>
  );
}
