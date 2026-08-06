import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import RecentOrderCard from "./RecentOrderCard";

const orders = [
  {
    id: "#1025",
    customer: "Raj Patel",
    product: "Business Cards",
    amount: "₹2,500",
    status: "Completed",
  },
  {
    id: "#1026",
    customer: "Amit Shah",
    product: "Brochure",
    amount: "₹1,800",
    status: "Pending",
  },
  {
    id: "#1027",
    customer: "Priya Mehta",
    product: "Sticker Labels",
    amount: "₹4,600",
    status: "Processing",
  },
];

const badgeColor = {
  Completed: "bg-emerald-500/20 text-emerald-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Processing: "bg-sky-500/20 text-sky-400",
};

const RecentOrdersTable = () => {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-[#101B2D] p-5 lg:p-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <h2 className="text-2xl font-bold text-white">
          Recent Orders
        </h2>

        <button className="rounded-xl bg-sky-500 px-5 py-2 text-white transition hover:bg-sky-600">
          View All
        </button>

      </div>

      {/* Desktop */}

      <div className="mt-8 hidden overflow-x-auto lg:block">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-slate-400">

              <th className="pb-4">Order ID</th>
              <th className="pb-4">Customer</th>
              <th className="pb-4">Product</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
              <th className="pb-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((item) => (

              <tr
                key={item.id}
                className="border-b border-white/5 hover:bg-white/5"
              >

                <td className="py-5 text-white">
                  {item.id}
                </td>

                <td className="text-white">
                  {item.customer}
                </td>

                <td className="text-slate-300">
                  {item.product}
                </td>

                <td className="font-semibold text-sky-400">
                  {item.amount}
                </td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${badgeColor[item.status]}`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      className="rounded-lg bg-sky-500/20 p-2 text-sky-400 hover:bg-sky-500 hover:text-white"
                    >
                      <FiEye />
                    </button>

                    <button
                      className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400 hover:bg-yellow-500 hover:text-white"
                    >
                      <FiEdit />
                    </button>

                    <button
                      className="rounded-lg bg-red-500/20 p-2 text-red-400 hover:bg-red-500 hover:text-white"
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="mt-8 space-y-5 lg:hidden">

        {orders.map((order) => (

          <div key={order.id} className="text-white">
  {order.customer}
</div>
        ))}

      </div>

    </div>
  );
};

export default RecentOrdersTable;