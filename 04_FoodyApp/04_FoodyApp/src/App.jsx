import { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [laoding, setLoading] = useState(false);
  const [error, setErro] = useState(null);
  const [filterBtn, setFilterBtn] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setErro("Unable to load data");
      }
    };
    fetchData();
  }, []);

  const filteredBtn = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setFilterBtn("all");

      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setFilterBtn(type);
  };

  if (error) return <div>{error}</div>;
  if (laoding) return <div>Loading....</div>;

  const searchFood = (e) => {
    const searchrResult = e.target.value;
    console.log(searchrResult);
    if (searchrResult === "") setFilteredData(null);
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchrResult.toLowerCase())
    );
    setFilteredData(filter);
  };
  return (
    <div className="container mx-auto max-w-[1400px] h-screen bg-[#323334]">
      <Header
        data={filteredData}
        search={searchFood}
        filteredFood={filteredBtn}
      />
      <Home data={filteredData} />
    </div>
  );
};

export default App;
