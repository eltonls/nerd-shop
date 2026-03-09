import Image from "next/image";
import {
  Card,
} from "../../ui/card";
import HeartButton from "./HeartButton";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name?: string;
  price?: number;
  originalPrice?: number;
  imageSrc?: string;
  badge?: string;
  category?: string;
  className?: string;
}

const ProductCard = ({
  name = "Nome do Produto",
  price = 89.90,
  originalPrice,
  imageSrc = "/images/product_gunpla.png",
  badge,
  category,
  className,
}: ProductCardProps) => {
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden",
        "w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]",
        "border border-slate-200 rounded-2xl shadow-sm",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out",
        "bg-white",
        className
      )}
    >
      {badge && (
        <span className="absolute top-3 left-3 z-10 bg-slate-900 text-white text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full">
          {badge}
        </span>
      )}

      {discount && (
        <span className="absolute top-3 left-3 z-10 bg-rose-500 text-white text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full">
          -{discount}%
        </span>
      )}

      <div className="absolute top-2 right-2 z-10">
        <HeartButton />
      </div>

      <div className="relative w-full aspect-square overflow-hidden bg-slate-50">
        <Image
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src={imageSrc}
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1 p-4 pt-3">
        {category && (
          <span className="text-[11px] font-medium tracking-widest uppercase text-slate-400">
            {category}
          </span>
        )}
        <h3 className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold text-slate-900">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          {originalPrice && (
            <span className="text-xs text-slate-400 line-through">
              R$ {originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 pb-4">
        <button className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-700 active:scale-[0.98] text-white text-sm font-semibold tracking-wide transition-all duration-150">
           
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
