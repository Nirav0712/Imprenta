import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

const badgeColor = {
  Completed: "bg-emerald-500/20 text-emerald-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Processing: "bg-sky-500/20 text-sky-400",
};

const RecentOrderCard = ({ order }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101B2D] p-5">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-bold text-white">
          {order.id}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs ${badgeColor[order.status]}`}
        >
          {order.status}
        </span>

      </div>

      <div className="mt-5 space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-400">Customer</span>
          <span className="text-white">{order.customer}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Product</span>
          <span className="text-white">{order.product}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Amount</span>
          <span className="font-bold text-sky-400">
            {order.amount}
          </span>
        </div>

      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">

        <button className="rounded-xl bg-sky-500/20 py-3 text-sky-400 hover:bg-sky-500 hover:text-white">
          <FiEye className="mx-auto" />
        </button>

        <button className="rounded-xl bg-yellow-500/20 py-3 text-yellow-400 hover:bg-yellow-500 hover:text-white">
          <FiEdit className="mx-auto" />
        </button>

        <button className="rounded-xl bg-red-500/20 py-3 text-red-400 hover:bg-red-500 hover:text-white">
          <FiTrash2 className="mx-auto" />
        </button>

      </div>

    </div>
  );
};

export default RecentOrderCard;