import { useState, useEffect } from "react";
import { fetchData } from "./utils/fetchData";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Header from "./components/Header";
import CurrentCondition from "./components/CurrentCondition";
import HoursForecast from "./components/HoursForecast";
import DaysForecast from "./components/DaysForecast";
import CurrentConditionDetails from "./components/CurrentConditionDetails";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("London");

  const [loading, setLoading] = useState(false);
  const [tempUnit, setTempUnit] = useState(0);

  const searchUrl = `http://api.weatherapi.com/v1/search.json?key=ea2daf8cd8b6496fb3184425233107&q=${input}`;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=ea2daf8cd8b6496fb3184425233107&q=${selected}&days=10&aqi=no`;

  useEffect(() => {
    setLoading(true);
    fetchData(url, (data) => {
      setData(data);
      setLoading(false);
    });
  }, [selected]);

  useEffect(() => {
    input
      ? fetchData(searchUrl, (data) => {
          setOptions(data);
        })
      : setOptions([]);
  }, [input]);

  function handleSelect(name, country) {
    setInput("");
    setSelected(`${name}, ${country}`);
  }

  function handleChange(value) {
    setInput(value);
  }

  function handleLoading() {
    return (
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  console.log(data);

  if (!data) {
    return handleLoading();
  }

  return (
    <>
      {loading ? handleLoading() : null}
      <header>
        <Header
          input={input}
          options={options}
          handleSelect={handleSelect}
          handleChange={handleChange}
          loading={loading}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
      </header>
      <main>
        <CurrentCondition data={data} tempUnit={tempUnit} />
        <CurrentConditionDetails data={data} tempUnit={tempUnit} />
        <HoursForecast data={data} tempUnit={tempUnit} />
        <DaysForecast data={data} tempUnit={tempUnit} />
      </main>
      <footer>
        <p>Developed by: Leul Berhanu</p>
        <div className="profile-link">
          <BsLinkedin />
          <a href="https://www.linkedin.com/in/leul-berhanu">LinkedIn</a>
        </div>
        <div className="profile-link">
          <BsGithub />
          <a href="https://github.com/LeulBerhanu">GitHub</a>
        </div>
      </footer>
    </>
  );
}

export default App;
