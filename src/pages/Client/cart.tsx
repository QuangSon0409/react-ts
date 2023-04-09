import React, { useState } from "react";
import IProduct from "../../interface/product";

type Props = {
  item: any;
  onclearCart: () => void;
  onRemove: (product: any) => void;
};

const Cart = (props: Props) => {
  const { item, onclearCart, onRemove } = props;

  return (
    <section
      className="antialiased bg-gray-100 text-gray-600 h-screen px-4"
      x-data="app"
    >
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <div className="font-semibold text-gray-800">Manage Carts</div>
          </header>

          <div className="overflow-x-auto p-3">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Product Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Quantity</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Price</div>
                  </th>

                  <th className="p-2">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-gray-100">
                {item.map((item: any) => {
                  return (
                    <tr>
                      <td className="p-2">
                        <div
                          className="font-medium text-gray-800"
                          key={item.product._id}
                        >
                          {item.product.name}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left"> {item.quantity}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-left font-medium text-green-500">
                          {item.product.price} VNĐ
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() => {
                              onRemove(item.product);
                            }}
                          >
                            <svg
                              className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
            <div>Total</div>
            <div className="text-blue-600">
              {item.reduce(
                (total: any, item: any) =>
                  total + item.product.price * item.quantity,
                0
              )}{" "}
              VNĐ<span x-text="total.toFixed(2)"></span>
            </div>
          </div>
          <button onClick={onclearCart}>
            <svg
              className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1 ml-[20px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
            Xóa giỏ hàng
          </button>

          <div className="flex justify-end">
            <input
              type="hidden"
              className="border border-black bg-gray-50"
              x-model="selected"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
