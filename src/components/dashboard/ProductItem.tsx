import React from "react";
import { PackageIcon } from "lucide-react";
import type { Sale } from "../../types";

type ProductItemProps = Pick<Sale, "product" | "productId" | "image" | "total">;

const ProductItem: React.FC<ProductItemProps> = ({ image, product, productId, total }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gray-50 transition-colors">
      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={product}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <PackageIcon className="w-8 h-8 text-gray-400" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-900 mb-0.5">
          {product}
        </h4>
        <p className="text-xs text-gray-500">{productId}</p>
      </div>
      <div className="text-lg font-bold text-gray-900">{total}</div>
    </div>
  );
};

export default ProductItem;
