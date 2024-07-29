import { ChartCard, SimpleCart } from "../../components/chart-card/chart-card";
import NextAppointments from "../../components/next-appointments/next-appointments";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Dashboard() {
  return (
    <div className="flex gap-[24px] h-full">
      <section className="flex gap-[24px] flex-wrap w-full h-fit">
        <ChartCard
          title="Patients this month"
          quantity={25}
          data={data}
          fill="rgba(77,124,254,0.06)"
          stroke="#4D7CFE"
        />

        <ChartCard
          title="Patients this year"
          quantity={21}
          data={data}
          fill="rgba(109,210,48,0.06)"
          stroke="#6DD230"
        />

        <SimpleCart finished={1} upcoming={4} />
      </section>

      <section>
        <NextAppointments />
      </section>
    </div>
  );
}
