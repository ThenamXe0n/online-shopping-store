import { FaShoppingCart, FaStar, FaTag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { selectedProduct } from "../../redux/productSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 group">
      <div
        onClick={() => {
          dispatch(selectedProduct(product));
          navigate(`/product/${product._id}`);
        }}
        className="relative"
      >
        <img
          src={product.poster}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
          {product.discount}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-500">
          {product.brand} • {product.category}
        </p>
        <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
        <div className="flex items-center gap-1 text-sm mt-2">
          <FaStar /> {product.rating}
        </div>
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <span className="text-2xl font-bold">{product.price}</span>
          <span className="text-sm text-gray-400 line-through">
            {product.mrp}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-600 text-sm font-medium flex items-center gap-1">
            <FaTag /> Extra Offer Available
          </span>
          <button
            onClick={() => navigate("/cart")}
            className="p-3 rounded-full border hover:bg-black hover:text-white transition"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
