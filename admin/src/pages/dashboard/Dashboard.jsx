import { FiShoppingBag } from "react-icons/fi";
import StatCard from "../../components/cards/StatCard";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl text-white mb-6">
        Dashboard Working
      </h1>

      <StatCard
        title="Orders"
        value="128"
        icon={FiShoppingBag}
      />

      <div className="mt-10 rounded-3xl border border-white/10 bg-[#101B2D] p-6">
        <h2 className="text-white text-2xl">
          Recent Orders
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;