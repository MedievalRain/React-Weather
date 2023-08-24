import Widget from "./ui/Widget";
import CitySearch from "./features/city/CitySearch";
import MainWidget from "./features/weather/MainWidget/MainWidget";
import { Suspense } from "react";
import ForecastWidget from "./features/weather/ForecastWidget/ForecastWidget";
import UVWidget from "./features/weather/UVWidget/UVWidget";
import WindWidget from "./features/weather/WindWidget/WindWidget";
import MoonWidget from "./features/weather/MoonWidget/MoonWidget";
import AirWidget from "./features/air/AirWidget";
import CitiesWidget from "./features/weather/CitiesWidget/CitiesWidget";
import Footer from "./ui/Footer";
import { useAppSelector } from "./hooks/storeHooks";

function App() {
  const { dark } = useAppSelector((state) => state.theme);

  return (
    <Suspense>
      <div
        className={`min-h-screen w-screen flex-col bg-sky-100 text-gray-700 ${
          "dark" && dark
        }`}
      >
        <main className="mx-auto flex h-full w-full max-w-5xl flex-col gap-4 p-6">
          <CitySearch />
          <div className="flex grid-cols-2 flex-col gap-4 md:grid">
            <Widget>
              <MainWidget />
            </Widget>
            <Widget>
              <ForecastWidget />
            </Widget>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
            <Widget>
              <UVWidget />
            </Widget>
            <Widget>
              <WindWidget />
            </Widget>
            <Widget>
              <MoonWidget />
            </Widget>
            <Widget>
              <AirWidget />
            </Widget>
          </div>
          <Widget>
            <CitiesWidget />
          </Widget>
          <Footer />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
