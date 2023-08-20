import { Provider } from "react-redux";
import Widget from "./ui/Widget";
import store from "./store";
import CitySearch from "./features/city/CitySearch";
import MainWidget from "./features/weather/MainWidget/MainWidget";
import { Suspense } from "react";
import ForecastWidget from "./features/weather/ForecastWidget/ForecastWidget";
import UVWidget from "./features/weather/UVWidget/UVWidget";

function App() {
  return (
    <Suspense>
      <div className="h-full min-h-screen w-screen bg-sky-100 text-gray-700">
        <main className="mx-auto w-full max-w-5xl px-4">
          <Provider store={store}>
            <CitySearch />
            <div className="flex grid-cols-2 flex-col gap-4 md:grid">
              <Widget>
                <MainWidget />
              </Widget>
              <Widget>
                <ForecastWidget />
              </Widget>
              <div className="grid grid-cols-4">
                <Widget>
                  <UVWidget />
                </Widget>
                <Widget></Widget>
              </div>
            </div>
          </Provider>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
