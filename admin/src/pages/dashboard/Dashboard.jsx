import {
  FiShoppingBag,
  FiBox,
  FiUsers,
  FiMail,
} from "react-icons/fi";

import StatCard from "../../components/cards/StatCard";
import RecentOrdersTable from "../../components/tables/RecentOrdersTable";

const Dashboard = () => {
  return (
    <div>

      <div
  className="
    grid
    grid-cols-1
    gap-5

    sm:grid-cols-2

    xl:grid-cols-4
  "
>
        <StatCard
          title="Orders"
          value="128"
          icon={FiShoppingBag}
          color="#0EA5E9"
        />

        <StatCard
          title="Products"
          value="58"
          icon={FiBox}
          color="#6366F1"
        />

        <StatCard
          title="Users"
          value="234"
          icon={FiUsers}
          color="#10B981"
        />

        <StatCard
          title="Messages"
          value="41"
          icon={FiMail}
          color="#F59E0B"
        />

      </div>

      <RecentOrdersTable />

    </div>
  );
};

export default Dashboard;