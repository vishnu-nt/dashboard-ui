import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { add, isAfter, isBefore, parse, sub } from "date-fns";
import campaignData from "./eng_data";

interface Props {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
}

const OverviewChart = (props: Props) => {

  const filteredData = useMemo(() => {
    const refDate = new Date();
    return campaignData.filter((data) => {
      const isAfterStartDate = isAfter(
          parse(data.date, "MM/dd/yyyy", refDate),
          sub(props.dateRange.startDate, { days: 1 }),
      );
      const isBeforeEndDate = isBefore(
          parse(data.date, "MM/dd/yyyy", refDate),
          add(props.dateRange.endDate, { days: 1 }),
      );
      return isAfterStartDate && isBeforeEndDate;
    });
  }, [props.dateRange]);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={500}
        height={300}
        data={filteredData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="impressions"
          stroke="#70d7aa"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="clicks" stroke="#5f97d3" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
