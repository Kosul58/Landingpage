import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Calendar from "../calendar/calendar";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearchCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import {
  Line,
  LineChart,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const nutref = useRef(null);
  const foodref = useRef(null);
  const logref = useRef(null);
  const foodlogref1 = useRef(null);
  const caloriebar = useRef(null);
  const show2 = useRef(null);
  const su202 = useRef(null);
  const wtadderindb = useRef(null);
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("Username");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); // To store search results
  const [nutrients, setNutrients] = useState(null); // To store nutrient data of a selected item
  const [error, setError] = useState(null);
  const [common, setCommon] = useState([]); // To store common food items from search results
  const [branded, setBranded] = useState([]); // To store branded food items from search results
  const show = useRef(null);

  ///dashboard data of user foods
  const [ub, setUb] = useState("");
  const [ul, setUl] = useState("");
  const [ud, setUd] = useState("");
  const [us, setUs] = useState("");
  const [uw, setUw] = useState("");

  ///dashboard datas of user calories
  const [calstatus, setCalstatus] = useState("");
  const [calpercentage, setCalpercentage] = useState(0);
  const [requiredcal, setRequiredcal] = useState("");
  const [totalcal, setTotalcal] = useState("");

  ///recomendataion datas
  const [loading, setLoading] = useState(false);
  const rec = useRef(null);
  const breakfast = useRef(null);
  const lunch = useRef(null);
  const dinner = useRef(null);
  const bfw = useRef(null);
  const bfcal = useRef(null);
  const bfcarb = useRef(null);
  const bfprot = useRef(null);
  const bffat = useRef(null);
  const bfsalt = useRef(null);
  const bfsug = useRef(null);
  const dinnerw = useRef(null);
  const dinnercal = useRef(null);
  const dinnercarb = useRef(null);
  const dinnerprot = useRef(null);
  const dinnersug = useRef(null);
  const dinnersalt = useRef(null);
  const lunchw = useRef(null);
  const lunchcal = useRef(null);
  const lunchcarb = useRef(null);
  const lunchprot = useRef(null);
  const lunchsug = useRef(null);
  const lunchsalt = useRef(null);

  //callendar controlls ok
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  let [changeddate, setChangeddate] = useState(null);

  const handleChildData = async (data) => {
    setChangeddate(data);
    console.log("data load from calendar");
  };

  useEffect(() => {
    if (changeddate !== null) {
      console.log("State updated:", changeddate);
      dataload();
    }
  }, [changeddate]); // Runs whenever `changeddate` changes

  ///recomendation model data fetch starts here ok
  const displayrec = async () => {
    try {
      const storedUser = localStorage.getItem("userDetails");
      const j = JSON.parse(storedUser);
      const response = await fetch("http://localhost:3000/fetchmeal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(j),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Breakfast", data[0].food_name);
      console.log("Lunch", data[1].food_name);
      console.log("Dinner", data[2].food_name);
      console.log(data[0].food_type);
      console.log(data[1].food_type);
      console.log(data[2].food_type);
      console.log(data[0].nf_calories);
      console.log(data[1].nf_calories);
      console.log(data[2].nf_calories);
      console.log(data[0].nf_total_carbohydrate);
      console.log(data[1].nf_total_carbohydrate);
      console.log(data[2].nf_total_carbohydrate);
      console.log(data[0].nf_protein);
      console.log(data[1].nf_protein);
      console.log(data[2].nf_protein);
      console.log(data[0].nf_total_fat);
      console.log(data[1].nf_total_fat);
      console.log(data[2].nf_total_fat);
      console.log(data[0].nf_sugars);
      console.log(data[1].nf_sugars);
      console.log(data[2].nf_sugars);
      console.log(data[0].nf_sodium);
      console.log(data[1].nf_sodium);
      console.log(data[2].nf_sodium);

      // Check if refs are not null before setting innerHTML
      if (breakfast.current) {
        breakfast.current.innerHTML = data[0].food_name;
        bfw.current.innerHTML = data[0].food_type;
        bfcal.current.innerHTML = data[0].nf_calories;
        bfcarb.current.innerHTML = data[0].nf_total_carbohydrate;
        bfprot.current.innerHTML = data[0].nf_protein;
        bfsalt.current.innerHTML = data[0].nf_sodium;
        bfsug.current.innerHTML = data[0].nf_sugars;
      }
      if (lunch.current) {
        lunch.current.innerHTML = data[1].food_name;
        lunchw.current.innerHTML = data[1].food_type;
        lunchcal.current.innerHTML = data[1].nf_calories;
        lunchcarb.current.innerHTML = data[1].nf_total_carbohydrate;
        lunchprot.current.innerHTML = data[1].nf_protein;
        lunchsug.current.innerHTML = data[1].nf_sugars;
        lunchsalt.current.innerHTML = data[1].nf_sodium;
      }
      if (dinner.current) {
        dinner.current.innerHTML = data[2].food_name;
        dinnerw.current.innerHTML = data[2].food_type;
        dinnercal.current.innerHTML = data[2].nf_calories;
        dinnercarb.current.innerHTML = data[2].nf_total_carbohydrate;
        dinnerprot.current.innerHTML = data[2].nf_protein;
        dinnersug.current.innerHTML = data[2].nf_sugars;
        dinnersalt.current.innerHTML = data[2].nf_sodium;
      }
      if (rec.current) {
        rec.current.classList.remove("blockrec");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  ///recomendation model data fetch ends here
  const wtdata = [
    {
      name: "Jan",
      value: 77,
    },
    {
      name: "Feb",
      value: 80,
    },
    {
      name: "Mar",
      value: 90,
    },
    {
      name: "Apr",
      value: 85,
    },
    {
      name: "May",
      value: 75,
    },
    {
      name: "Jun",
      value: 80,
    },
    {
      name: "Jul",
      value: 85,
    },
    {
      name: "Aug",
      value: 90,
    },
    {
      name: "Sep",
      value: 85,
    },
    {
      name: "Oct",
      value: 75,
    },
    {
      name: "Nov",
      value: 80,
    },
    {
      name: "Dec",
      value: 85,
    },
  ];

  ///function to add food data to database ok
  const showdata = async (mealType) => {
    const dates = changeddate || date;
    try {
      const storedUser = localStorage.getItem("userDetails");
      const j = JSON.parse(storedUser);
      if (nutrients) {
        const foodData = {
          foodName: nutrients.food_name,
          calories: nutrients.nf_calories,
          protein: nutrients.nf_protein,
          fat: nutrients.nf_total_fat,
          sugars: nutrients.nf_sugars,
          salt: nutrients.nf_sodium,
          carbohydrates: nutrients.nf_total_carbohydrate,
          mealType: mealType,
          userid: j._id,
          date: dates,
          weight: uw,
        };
        console.log("Food added:", foodData);
        const jk = await fetch("http://localhost:3000/addfoodindb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(foodData),
        });
        if (jk.ok) {
          console.log("Food added successfully!");
        }
      } else {
        console.log("No food data available!");
      }
    } catch {
    } finally {
      dataload();
    }
  };

  ///calorie bar css controller
  useEffect(() => {
    const percentage = (totalcal / requiredcal) * 100;
    setCalpercentage(percentage);
    if (caloriebar.current) {
      caloriebar.current.style.width = `${calpercentage * 0.9}%`;
      caloriebar.current.style.backgroundColor = "green";

      if (calpercentage > 100) {
        setCalstatus("Excessive");
        caloriebar.current.style.width = `${100 * 0.9}%`;
        caloriebar.current.style.backgroundColor = "#ff0000";
      } else if (calpercentage > 80 && calpercentage <= 100) {
        setCalstatus("Good");
      } else if (calpercentage >= 60 && calpercentage <= 80) {
        setCalstatus("Moderate");
      } else if (calpercentage <= 60) {
        setCalstatus("Low");
      }
    }
  }, [calpercentage, requiredcal, totalcal]);

  ///function to set the user bmr , calories
  useEffect(() => {
    const storedUser = localStorage.getItem("userDetails");
    const j = JSON.parse(storedUser);
    // console.log(j.uname);
    // console.log(j);
    setUsername(j.uname);
    const activitylvl = j.activityLevel;
    const gender = j.gender;
    const height = j.height;
    const weight = uw || j.weight;
    const age = j.age;
    // console.log(activitylvl, gender, height, weight, age);
    // console.log(uw, j.weight);
    const bmr = function () {
      let j;
      if (activitylvl == "sedentary") {
        j = 1.2;
      } else if (activitylvl == "lightly active") {
        j = 1.375;
      } else if (activitylvl == "moderately active") {
        j = 1.55;
      } else if (activitylvl == "very active") {
        j = 1.725;
      } else if (activitylvl == "extremely active") {
        j = 1.9;
      }
      let k;
      if (gender == "female") {
        k = (10 * weight + 6.25 * height - 5 * age - 161) * j;
      } else {
        k = (10 * weight + 6.25 * height - 5 * age + 5) * j;
      }
      return k.toFixed(2);
    };

    const merobmr = bmr();

    setRequiredcal(merobmr);
  }, [uw]);

  //dashboard toggle controll ok
  const handleclick = (a) => {
    if (a == 0) {
      nutref.current.style.display = "flex";
      foodref.current.style.display = "none";
      logref.current.style.display = "none";
    } else if (a == 1) {
      nutref.current.style.display = "none";
      foodref.current.style.display = "flex";
      logref.current.style.display = "none";
    } else if (a == 2) {
      nutref.current.style.display = "none";
      foodref.current.style.display = "none";
      logref.current.style.display = "block";
    } else if (a == 3) {
      localStorage.setItem("userDetails", 10);
      // Redirect to home
      navigate("/");
    }
  };

  ///function to search food data from the nutronix api call
  const handleSearch = async () => {
    console.log(query);
    try {
      // if (!query) {
      //   foodlogref1.current.style.display = "none";
      //   show.current.style.display = "none";
      // }
      if (query) {
        const response = await fetch(
          `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
          {
            headers: {
              "x-app-id": "e7116065",
              "x-app-key": "3b93010629df15ac33bdf9235b3c3ec5",
              "content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCommon(data.common || []);
        setBranded(data.branded || []);
      }
    } catch (err) {
      setError(err.toString());
    } finally {
      console.log(common);
      console.log(branded);
    }
  };
  const shower2 = () => {
    show2.current.classList.remove("signblock");
    su202.current.classList.add("signblock");
  };

  // Function to handle displaying nutrient data
  const fetchNutrientData = async (foodName) => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        {
          method: "POST",
          headers: {
            "x-app-id": "e7116065",
            "x-app-key": "3b93010629df15ac33bdf9235b3c3ec5",
            "content-Type": "application/json",
          },
          body: JSON.stringify({ query: foodName }), // Sending food name to get nutrient data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch nutrient data");
      }

      const data = await response.json();
      setNutrients(data.foods[0]); // Set nutrient data for the first food item
    } catch (err) {
      setError(err.toString());
    }
  };

  //function to add weight in db ok
  const addweightindb = async () => {
    const dates = changeddate || date;
    console.log(changeddate, date, dates);
    try {
      console.log("weight added", uw);
      // alert("weight added is " + uw);
      const storedUser = localStorage.getItem("userDetails");
      const j = JSON.parse(storedUser);
      const wtData = {
        userid: j._id,
        date: dates,
        weight: uw,
      };
      const jk = await fetch("http://localhost:3000/addwtindb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wtData),
      });
      if (jk.ok) {
        console.log("Weight added successfully!");
      }
    } catch {
      console.log("error");
    } finally {
      setLoading(true);
    }
  };

  //function to load data in dashboard on dashboard render
  const dataload = async () => {
    // console.log("changed date", changeddate);
    // console.log("default", date);
    const storedUser = localStorage.getItem("userDetails");
    const j = JSON.parse(storedUser);

    const dates = changeddate ? changeddate : date;
    const jakie = async () => {
      const response = await fetch("http://localhost:3000/getuserdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: j._id, date: dates }),
      });
      const datax = await response.json();
      // console.log("return data", datax);
      if (datax.length > 0) {
        const [a1, a2] = datax;
        // console.log("Food data", a1);
        // console.log("weightdata", a2);

        if (a2.length > 0) {
          // console.log("wtt=", a2[0].weight);
          setUw(a2[0].weight);
        } else {
          setUw(j.weight);
        }

        const ubreak = [];
        const ulunch = [];
        const udinner = [];
        const usnacks = [];

        for (let i = 0; i < a1.length; i++) {
          if (a1[i].mealtype == "Breakfast") {
            ubreak.push(a1[i].cal);
          } else if (a1[i].mealtype == "Lunch") {
            ulunch.push(a1[i].cal);
          } else if (a1[i].mealtype == "Dinner") {
            udinner.push(a1[i].cal);
          } else if (a1[i].mealtype == "Snacks") {
            usnacks.push(a1[i].cal);
          }
        }
        const jasper = (a) => {
          let j = 0;
          for (let i = 0; i < a.length; i++) {
            j = j + a[i];
          }
          return j;
        };
        const b1 = jasper(ubreak);
        const b2 = jasper(ulunch);
        const b3 = jasper(udinner);
        const b4 = jasper(usnacks);
        // console.log(b1, b2, b3, b4);
        setUb(b1);
        setUl(b2);
        setUd(b3);
        setUs(b4);
        const mkultra = b1 + b2 + b3 + b4;
        setTotalcal(mkultra.toFixed(2));
        // console.log(totalcal);
      } else {
        setUb(0);
        setUl(0);
        setUd(0);
        setUs(0);
        setUw(j.weight);
        console.log("No data found");
        setTotalcal(0);
      }
    };
    jakie();
    setLoading(false);
  };

  useEffect(() => {
    dataload();
  }, []);

  return (
    <>
      <div className="dashboard1">
        <div className="dashboard11">
          <h1 style={{ paddingBottom: "20px" }}>{username}</h1>
          <div className="dashboard111" onClick={() => handleclick(2)}>
            <h1>
              Nutrient
              <br /> Track
            </h1>
          </div>
          <div className="dashboard111" onClick={() => handleclick(0)}>
            <h1>Food Log</h1>
          </div>
          <div className="dashboard111" onClick={() => handleclick(1)}>
            <h1>
              Food <br />
              Recomendation
            </h1>
          </div>

          <div className="dashboard111" onClick={() => handleclick(3)}>
            <h1>Log Out</h1>
          </div>
        </div>

        <div className="dashboard12">
          {/* to track user nutrition */}
          <div className="foodlog" ref={logref}>
            <div className="foodlog1">
              <h1 className="userloginfo">{username} Log</h1>
              <div className="foodsearcher">
                <input
                  type="search"
                  placeholder="Search food"
                  // onMouseEnter={(e) => {
                  //   setQuery(e.target.value);
                  //   handleSearch();
                  //   if (e.target.value.length == 0) {
                  //     foodlogref1.current.style.display = "none";
                  //     show.current.style.display = "none";
                  //   } else {
                  //     foodlogref1.current.style.display = "block";
                  //     show.current.style.display = "block";
                  //   }
                  // }}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    handleSearch();
                    if (e.target.value.length == 0) {
                      foodlogref1.current.classList.add("signblock");
                      show.current.classList.add("signblock");
                    } else {
                      foodlogref1.current.classList.remove("signblock");
                      show.current.classList.remove("signblock");
                    }
                  }}
                />
                <button onClick={handleSearch}>Search</button>
              </div>
            </div>
            <div ref={foodlogref1} className="foodsearchresult signblock">
              {/* Displaying search results */}
              <div className="fooddisplay20">
                {common.length > 0 && (
                  <div className="fooddisplay202">
                    <ul>
                      {common.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            fetchNutrientData(item.food_name);
                            show.current.classList.remove("signblock");
                          }}
                          className="checkmuj2"
                        >
                          {item.food_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {branded.length > 0 && (
                  <div className="fooddisplay202">
                    <ul>
                      {branded.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            fetchNutrientData(item.food_name);
                            show.current.classList.remove("signblock");
                          }}
                          className="checkmuj2"
                        >
                          {item.food_name}
                          {item.nf_calories}-cal
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Displaying nutrient data */}
            <div ref={show} className="fooddisplay2xx signblock">
              {nutrients && (
                <div className="showfood202">
                  <div
                    className="foodcloser101"
                    onClick={() => show.current.classList.add("signblock")}
                  >
                    <IoIosCloseCircleOutline size={30} />
                  </div>
                  <div className="showfood203">
                    <h2>Nutrient Data</h2>
                    <p>
                      <strong>Food Name:</strong> {nutrients.food_name}
                    </p>
                    <p>
                      <strong>Calories:</strong> {nutrients.nf_calories}
                    </p>
                    <p>
                      <strong>Protein:</strong> {nutrients.nf_protein} g
                    </p>
                    <p>
                      <strong>Fat:</strong> {nutrients.nf_total_fat} g
                    </p>
                    <p>
                      <strong>Carbohydrates:</strong>{" "}
                      {nutrients.nf_total_carbohydrate} g
                    </p>
                    {/* Display more nutrients as needed */}
                  </div>

                  <div className="foodadderindb">
                    <h2>Add to</h2>
                    <div className="foodadderindb1">
                      <div>
                        <button onClick={() => showdata("Breakfast")}>
                          Breakfast
                        </button>
                        <button onClick={() => showdata("Lunch")}>Lunch</button>
                      </div>
                      <div>
                        <button onClick={() => showdata("Dinner")}>
                          Dinner
                        </button>
                        <button onClick={() => showdata("Snacks")}>
                          Snacks
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="userfoodlogger">
              <div className="foodadder101">
                <div className="ucaloriebar">
                  <p>Calorie Meter</p>
                  <div className="ucalbar1" ref={caloriebar}></div>
                  <div className="ucalbar2"></div>
                  <div className="ucalbar3">
                    <p>Required: {requiredcal}</p>
                  </div>
                  <div className="ucalbar4">
                    <p>Consumed: {totalcal}</p>
                  </div>
                  <div className="ucalbar5">
                    <p>Status: {calstatus}</p>
                  </div>
                  <span></span>
                </div>
                <div className="ufoodadder">
                  <div className="ufoodadder1" onClick={() => shower2()}>
                    <h2>Breakfast</h2>
                    <FaCirclePlus />
                    <span>{ub} cal</span>
                  </div>
                  <div className="ufoodadder1" onClick={() => shower2()}>
                    <h2>Lunch</h2>
                    <FaCirclePlus />
                    <span>{ul} cal</span>
                  </div>
                  <div className="ufoodadder1" onClick={() => shower2()}>
                    <h2>Dinner</h2>
                    <FaCirclePlus />
                    <span>{ud} cal</span>
                  </div>
                  <div className="ufoodadder1" onClick={() => shower2()}>
                    <h2>Snacks</h2>
                    <FaCirclePlus />
                    <span>{us} cal</span>
                  </div>
                  <div
                    className="ufoodadder1"
                    onClick={() =>
                      wtadderindb.current.classList.remove("signblock")
                    }
                  >
                    <h2>Weigh In</h2>
                    <FaCirclePlus />
                    <span>{uw} kg</span>
                  </div>
                </div>
              </div>
              <div className="foodcalendar">
                <Calendar sendDataToParent={handleChildData} />
              </div>
            </div>
            <div className="weightadder signblock" ref={wtadderindb}>
              <div
                className="foodcloser101"
                onClick={() => wtadderindb.current.classList.add("signblock")}
              >
                <IoIosCloseCircleOutline size={30} />
              </div>
              <input
                type="number"
                placeholder="Weight in kg"
                value={uw}
                onChange={(e) => setUw(e.target.value)}
              ></input>
              <button
                onClick={() => {
                  addweightindb();
                }}
              >
                Add
              </button>
            </div>
            <div className="weighttracker">
              {/* <LineChart width={880} height={300} data={wtdata}>
                <XAxis
                  dataKey="name"
                  tickFormatter={(tick) => tick || "Unknown"}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  dataKey="value"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </LineChart> */}
            </div>
            <div className="ufoodadder2 signblock" ref={show2}>
              <div
                className="foodcloser101"
                onClick={() => show2.current.classList.add("signblock")}
              >
                <IoIosCloseCircleOutline size={30} />
              </div>
              <div className="searchforuser">
                <input
                  type="search"
                  placeholder="Search food"
                  value={query}
                  className="searcherforuser101"
                  onChange={(j) => {
                    setQuery(j.target.value);
                    handleSearch();

                    if (j.target.value.length == 0) {
                      su202.current.classList.add("signblock");
                    } else {
                      su202.current.classList.remove("signblock");
                    }
                  }}
                ></input>
                <IoSearchCircleOutline
                  size={30}
                  className="searchicon101"
                  onClick={() => {
                    handleSearch();
                    su202.current.classList.remove("signblock");
                  }}
                />
              </div>
              <div className="searchforuser2 signblock" ref={su202}>
                <div className="searchforuser202">
                  {common.length > 0 && (
                    <div className="fooddisplayer2002">
                      <ul>
                        {common.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              fetchNutrientData(item.food_name);
                              show.current.classList.remove("signblock");
                            }}
                            className="checkmuj202"
                          >
                            {item.food_name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {branded.length > 0 && (
                    <div className="fooddisplayer2003">
                      <ul>
                        {branded.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              fetchNutrientData(item.food_name);
                              show.current.classList.remove("signblock");
                            }}
                            className="checkmuj202"
                          >
                            {item.food_name}- {item.nf_calories} cal
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="searchforuser3 signblock"></div>
            </div>
          </div>
          <div
            className="nutrienttracker"
            style={{ display: "none" }}
            ref={nutref}
          >
            <h1>Dev</h1>
          </div>
          <div className="foodrecomendation" ref={foodref}>
            <h1>Food Recomendation</h1>
            <div className="recomender">
              <h1>Hello User!</h1>
              <h3>How you doing?</h3>
              <p>Want some recommendations?</p>
              <p>Click the button below</p>
              <button className="recbutton" onClick={() => displayrec()}>
                Recommendations
              </button>
              <div ref={rec} className="recomendedmeal blockrec">
                <div className="breakfastrec RECC">
                  <h1>Breakfast</h1>
                  <h2>
                    Mealname:<div ref={breakfast}>a</div>
                  </h2>
                  <h2>
                    Food Type:<div ref={bfw}>a</div>
                  </h2>
                  <h2>
                    Calorie:<div ref={bfcal}>a</div>
                  </h2>
                  <h2>
                    Carbs:<div ref={bfcarb}>a</div>
                  </h2>
                  <h2>
                    Prot:<div ref={bfprot}>a</div>
                  </h2>
                  <h2>
                    Salt:<div ref={bfsalt}>a</div>
                  </h2>
                  <h2>
                    Sugar:<div ref={bfsug}>a</div>
                  </h2>
                </div>
                <div className="lunchrec RECC">
                  <h1>Lunch</h1>
                  <h2>
                    Mealname:<div ref={lunch}>a</div>
                  </h2>
                  <h2>
                    Food Type:<div ref={lunchw}>a</div>
                  </h2>
                  <h2>
                    Calorie:<div ref={lunchcal}>a</div>
                  </h2>
                  <h2>
                    Carbs:<div ref={lunchcarb}>a</div>
                  </h2>
                  <h2>
                    Prot:<div ref={lunchprot}>a</div>
                  </h2>
                  <h2>
                    Salt:<div ref={lunchsalt}>a</div>
                  </h2>
                  <h2>
                    Sugar:<div ref={lunchsug}>a</div>
                  </h2>
                </div>
                <div className="dinnerrec RECC">
                  <h1>Dinner</h1>
                  <h2>
                    Mealname:<div ref={dinner}>a</div>
                  </h2>
                  <h2>
                    Food Type:<div ref={dinnerw}>a</div>
                  </h2>
                  <h2>
                    Calorie:<div ref={dinnercal}>a</div>
                  </h2>
                  <h2>
                    Carbs:<div ref={dinnercarb}>a</div>
                  </h2>
                  <h2>
                    Prot:<div ref={dinnerprot}>a</div>
                  </h2>
                  <h2>
                    Salt:<div ref={dinnersalt}>a</div>
                  </h2>
                  <h2>
                    Sugar:<div ref={dinnersug}>a</div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
