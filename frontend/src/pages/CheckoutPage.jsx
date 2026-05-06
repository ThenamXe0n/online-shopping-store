import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaLock,
  FaCreditCard,
  FaMoneyBillWave,
  FaUniversity,
  FaCheckCircle,
  FaTag,
  FaTruck,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { placeOrderApi } from "../service/apiCollections";
import { Link } from "react-router";
import CheckoutButton from "../components/ui/CheckoutButton";

export default function CheckoutPage() {
  const orderItems = useSelector((store) => store.cart.cartItems) || [];
  const userId = useSelector((s) => s.user.userDetails.id);
  // const orderItems = []
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [discountAmt] = useState(200);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    addressLine: "",
    landmark: "",
  });

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleChange = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });

  const handlePlaceOrder = async () => {
    let payload = {
      items: orderItems.map((i) => {
        return { productDetails: i._id, quantity: i.quantity, price: i.price };
      }),
      address: {
        house: "34 ss",
        city: address.city,
        state: address.state,
        contact: address.phone,
        pincode: address.pincode,
      },
      totalAmount: subtotal - discountAmt,
    };
    try {
      const response = await placeOrderApi(payload);
      toast.success("order placed succesfull");
    } catch (error) {
      toast.error(error.message || "failed to place order");
    }
    console.log(payload);
  };

  if (orderItems?.length <= 0) {
    return (
      <div className="h-[80vh] gap-4  flex flex-col items-center justify-center">
        <h3 className="text-2xl">No item to buy</h3>
        <p className="text-center  flex items-center gap-2 text-neutral-500 font-semibold">
          <FaShoppingCart /> Add item to cart!{" "}
        </p>
        <Link
          to={"/product"}
          className="bg-black px-4 py-1 flex items-center gap-2 text-white rounded-lg mx-auto"
        >
          Shop now <FaShoppingBag />
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-gray-900 px-4 sm:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-gray-500">
              Final Step
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-1">
              Complete Your Order
            </h1>
          </div>
          <div className="flex gap-4 text-xs sm:text-sm text-gray-600 flex-wrap">
            <span className="flex items-center gap-2">
              <FaTruck /> Delivery Tomorrow
            </span>
            <span className="flex items-center gap-2">
              <FaTag /> ₹300 Coupon Applied
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle /> Secure Checkout
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-6">
              <h2 className="text-xl font-bold flex items-center gap-3 mb-5">
                <FaMapMarkerAlt /> Delivery Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
                />
                <input
                  name="phone"
                  value={address.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
                />
                <input
                  name="pincode"
                  value={address.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  className="bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
                />
                <input
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
                />
                <input
                  name="state"
                  value={address.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
                />
                <input
                  name="landmark"
                  value={address.landmark}
                  onChange={handleChange}
                  placeholder="Landmark"
                  className="bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black"
                />
                <textarea
                  name="addressLine"
                  value={address.addressLine}
                  onChange={handleChange}
                  placeholder="House No, Street, Area"
                  className="sm:col-span-2 bg-gray-50 text-sm border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-black min-h-[90px]"
                ></textarea>
              </div>
            </div>

            <div className="bg-white rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-6">
              <h2 className="text-xl font-bold flex items-center gap-3 mb-5">
                <FaCreditCard /> Payment Method
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    id: "cod",
                    icon: <FaMoneyBillWave />,
                    label: "Cash on Delivery",
                  },
                  { id: "upi", icon: <FaUniversity />, label: "UPI / Banking" },
                  {
                    id: "card",
                    icon: <FaCreditCard />,
                    label: "Debit / Credit",
                  },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`rounded-2xl p-4 border-2 cursor-pointer flex flex-col items-center justify-center gap-3 text-center text-sm font-medium min-h-[110px] ${paymentMethod === method.id ? "border-black bg-gray-50" : "border-gray-200 bg-white"}`}
                  >
                    <div className="text-xl">{method.icon}</div>
                    <span>{method.label}</span>
                    <input
                      type="radio"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-20">
            <div className="bg-white rounded-[28px] shadow-[0_14px_35px_rgba(0,0,0,0.06)] border border-gray-100 p-5">
              <h2 className="text-xl font-bold mb-5">Order Summary</h2>
              <div className="space-y-4 border-b pb-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img
                      src={item.img || item.poster}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-sm">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm py-4 border-b">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Coupon Savings</span>
                  <span className="text-green-600">- ₹{discountAmt}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 text-lg font-bold">
                <span>Total Payable</span>
                <span>₹{subtotal - discountAmt}</span>
              </div>

              {/* <button
                onClick={handlePlaceOrder}
                className="w-full bg-black text-white py-3.5 rounded-full font-semibold text-sm shadow-xl hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <FaLock /> Place Order
              </button> */}
              <CheckoutButton
                cartItems={orderItems}
                shippingAddress={address}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
