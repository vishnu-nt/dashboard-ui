import { useState } from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import DatePicker from "../Components/DatePicker/DatePicker";
import OverviewChart from "./OverviewChart";

const sidebarItems = ["Analytical", "Ecommerce", "Notes", "Calendar", "Extras"];
const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date("2020/12/12"), // Hardcoding to a specific date initially, cause we only have data in specific period
    endDate: new Date("2021/03/03"),
  });

  const handleRangeChange = (rangeKey: "startDate" | "endDate", date: Date) => {
    setDateRange({ ...dateRange, [rangeKey]: date });
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <nav className="col-span-2 bg-app-gray">
        <h1 className="text-primary text-2xl font-bold mb-4 p-4">Dashboard</h1>
        <ul>
          {sidebarItems.map((menu) => (
            <li className="p-4 hover:bg-slate-400" key={menu}>
              {menu}
            </li>
          ))}
        </ul>
      </nav>
      <div className="col-span-10 bg-white">
        <main className="p-4">
          <div className="flex mb-8">
            <DatePicker
              value={dateRange.startDate}
              onChange={(newDate) => handleRangeChange("startDate", newDate)}
              className="mr-4"
            />
            <DatePicker
              value={dateRange.endDate}
              onChange={(newDate) => handleRangeChange("endDate", newDate)}
            />
          </div>
          <div className="grid grid-cols-12 mb-8">
            <div className="col-span-3 shadow-lg hover:shadow-xl mr-4 rounded-sm p-4">
              <div className="flex items-center">
                <span className="rounded-full bg-primary p-2 mr-2">
                  <BsFillBarChartFill className="text-white text-sm" />
                </span>
                <span>Total Clicks</span>
              </div>
              <h1 className="text-3xl font-bold my-4">1744.52</h1>
            </div>
            <div className="col-span-3 shadow-lg hover:shadow-xl mr-4 rounded-sm p-4">
              <div className="flex items-center">
                <AiFillPieChart className="text-primary text-3xl mr-2" />
                <span>Total Clicks</span>
              </div>
              <h1 className="font-bold text-3xl my-4">1744.52</h1>
            </div>
          </div>
          <h3 className="font-bold text-base mb-4">Product Trends By Month</h3>
          <OverviewChart dateRange={dateRange} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
