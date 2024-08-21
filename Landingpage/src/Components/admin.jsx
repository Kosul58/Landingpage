import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Rectangle,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Sector,
  ResponsiveContainer,
} from "recharts";
("recharts");
import "./Landingpage.css";
const data = [
  {
    name: "Jan",
    "User Gain": 1800,
  },
  {
    name: "Feb",
    "User Gain": 3000,
  },
  {
    name: "Mar",
    "User Gain": 2000,
  },
  {
    name: "Apr",
    "User Gain": 2780,
  },
  {
    name: "May",
    "User Gain": 1890,
  },
  {
    name: "Jun",
    "User Gain": 2390,
  },
  {
    name: "Jul",
    "User Gain": 0,
  },
  {
    name: "Aug",
    "User Gain": 0,
  },
  {
    name: "Sep",
    "User Gain": 0,
  },
  {
    name: "Oct",
    "User Gain": 0,
  },
  {
    name: "Nov",
    "User Gain": 0,
  },
  {
    name: "Dec",
    "User Gain": 0,
  },
];
const data2 = [
  {
    name: "Male",
    Number: 2800,
  },
  {
    name: "Female",
    Number: 3000,
  },
];
const COLORS2 = ["#0088FE", "#00C49F"];

const data3 = [
  {
    name: "Diabities",
    Number: 1800,
  },
  {
    name: "Low BP",
    Number: 2000,
  },
  {
    name: "High BP",
    Number: 1500,
  },
  {
    name: "Diabities + Low BP",
    Number: 550,
  },
  {
    name: "Diabities + High BP",
    Number: 300,
  },
  {
    name: "None",
    Number: 3000,
  },
];
const COLORS3 = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#00C49F",
];
const data4 = [
  { name: "Minor(0-17)", Number: 2200 },
  { name: "Adult(18-60)", Number: 3000 },
  { name: "Older(60+)", Number: 1200 },
];

const data5 = [
  {
    name: "Veg",
    Number: 2800,
  },
  {
    name: "Non-Veg",
    Number: 3000,
  },
];
const COLORS5 = ["#0088FA", "#0b0b0b"];

const data6 = [
  {
    name: "Very Low",
    Calory: 150,
  },
  {
    name: "Low",
    Calory: 300,
  },
  {
    name: "Med",
    Calory: 700,
  },
  {
    name: "High",
    Calory: 900,
  },
  {
    name: "Very High",
    Calory: 680,
  },
];

const data7 = [
  {
    name: "Breakfast",
    Number: 2800,
  },
  {
    name: "Lunch",
    Number: 3000,
  },
  {
    name: "Dinner",
    Number: 1200,
  },
];

const COLORS7 = ["#0088FE", "#00C49F", "#FFBB28"];

const data8 = [
  {
    Year: 2022,
    Number: 1800,
  },
  {
    Year: 2023,
    Number: 2100,
  },
  {
    Year: 2024,
    Number: 2800,
  },
];

const Admin = () => {
  const usercontrol = useRef(null);
  const foodcontrol = useRef(null);
  const mail = useRef(null);
  const adm1 = useRef(null);
  const adm2 = useRef(null);
  const adm3 = useRef(null);
  const adm4 = useRef(null);
  const page = useRef(null);

  const modalopen = (a) => {
    if (a == 0) {
      foodcontrol.current.classList.add("signblock");
      mail.current.classList.add("signblock");
      usercontrol.current.classList.remove("signblock");
      adm1.current.classList.add("admactive");
      adm2.current.classList.remove("admactive");
      adm3.current.classList.remove("admactive");
      adm4.current.classList.remove("admactive");
      page.current.classList.add("signblock");
    } else if (a == 1) {
      usercontrol.current.classList.add("signblock");
      mail.current.classList.add("signblock");
      foodcontrol.current.classList.remove("signblock");
      adm1.current.classList.remove("admactive");
      adm2.current.classList.add("admactive");
      adm3.current.classList.remove("admactive");
      adm4.current.classList.remove("admactive");

      page.current.classList.add("signblock");
    } else if (a == 2) {
      usercontrol.current.classList.add("signblock");
      foodcontrol.current.classList.add("signblock");
      mail.current.classList.remove("signblock");
      adm1.current.classList.remove("admactive");
      adm2.current.classList.remove("admactive");
      adm3.current.classList.add("admactive");
      adm4.current.classList.remove("admactive");
      page.current.classList.add("signblock");
    } else if (a == 3) {
      usercontrol.current.classList.add("signblock");
      foodcontrol.current.classList.add("signblock");
      mail.current.classList.add("signblock");
      adm1.current.classList.remove("admactive");
      adm2.current.classList.remove("admactive");
      adm3.current.classList.remove("admactive");
      adm4.current.classList.add("admactive");
      page.current.classList.remove("signblock");
    }
  };

  return (
    <>
      <div className="admin">
        <div className="admin101">
          <div className="admphoto"></div>
          <div className="adm" style={{ color: "white" }}>
            Name
          </div>
          <div
            className="adm admactive"
            ref={adm1}
            onClick={() => modalopen(0)}
          >
            User Control
          </div>
          <div className="adm" ref={adm2} onClick={() => modalopen(1)}>
            Food Control
          </div>
          <div className="adm" ref={adm3} onClick={() => modalopen(2)}>
            Send Mail
          </div>
          <div className="adm" ref={adm4} onClick={() => modalopen(3)}>
            Page Control
          </div>
          <div className="adm admlogout">Log Out</div>
        </div>
        <div className="admin102">
          <div className="admx usercharts" ref={usercontrol}>
            <div className="auchart1 ">
              <select className="auchart1select">
                <option value="Year">2024</option>
                <option value="Year">2023</option>
                <option value="Year">2022</option>
                <option value="Year">2021</option>
              </select>
              <LineChart
                width={580}
                height={300}
                data={data}
                margin={{
                  top: 50,
                  right: 15,
                  left: 10,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  dataKey="User Gain"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </LineChart>
            </div>
            <div className="auchart2">
              <PieChart width={450} height={300}>
                <Pie
                  data={data2}
                  cx={180}
                  cy={140}
                  innerRadius={40}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="Number"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS2[index % COLORS2.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="auchart3">
              <PieChart width={400} height={300}>
                <Pie
                  data={data3}
                  cx={200}
                  cy={110}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="Number"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS3[index % COLORS3.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="auchart4">
              <BarChart
                width={450}
                height={250}
                data={data4}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Number" fill="#a4s7ab" />
              </BarChart>
            </div>
            <div className="usereditor">
              <input type="search" className="usereditorinput"></input>
              <button className="usereditorbtn">Search User</button>
            </div>
          </div>
          <div className="admx foodcharts signblock" ref={foodcontrol}>
            <div className="usereditor">
              <input type="search" className="usereditorinput"></input>
              <button className="usereditorbtn">Search Food</button>
            </div>
            <div className="afchart1">
              <h3 style={{ textAlign: "center", color: "white" }}>Food Type</h3>
              <PieChart width={350} height={250}>
                <Pie
                  data={data5}
                  cx={180}
                  cy={110}
                  innerRadius={0}
                  outerRadius={60}
                  fill="#8884d9"
                  paddingAngle={0}
                  dataKey="Number"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS5[index % COLORS5.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="afchart2">
              <h3 style={{ textAlign: "center", color: "white" }}>
                Food Calories
              </h3>
              <AreaChart
                width={600}
                height={250}
                data={data6}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Calory"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </div>
            <div className="afchart3">
              <h3 style={{ textAlign: "center", color: "white" }}>
                Food Category
              </h3>
              <PieChart width={350} height={250}>
                <Pie
                  data={data7}
                  cx={180}
                  cy={110}
                  innerRadius={0}
                  outerRadius={60}
                  fill="#8884d9"
                  paddingAngle={0}
                  dataKey="Number"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS7[index % COLORS7.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="afchart4">
              <h3 style={{ textAlign: "center", color: "white" }}>
                Total Food
              </h3>
              <BarChart
                width={550}
                height={280}
                data={data8}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                }}
              >
                <XAxis dataKey="Year" tick={{ fill: "#SS0000" }} />
                <YAxis tick={{ fill: "#AA200" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Number" fill="#a4s7ab" />
              </BarChart>
            </div>
          </div>
          <div className="admx foodcharts adminmail signblock" ref={mail}>
            <input
              type="text"
              className="usereditorinput"
              placeholder="Subject"
            ></input>
            <input
              type="email"
              className="usereditorinput"
              placeholder="example@gmail.com"
            ></input>
            <input type="file" className="usereditorinput3"></input>
            <button className="usereditorbtn">Send</button>
          </div>
          <div className="admx foodcharts signblock" ref={page}>
            Page Control
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
