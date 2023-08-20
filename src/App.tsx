import { Provider } from "react-redux";
import Widget from "./ui/Widget";
import store from "./store";
import CitySearch from "./features/city/CitySearch";
import MainWidget from "./features/weather/MainWidget/MainWidget";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <div className="h-full min-h-screen w-screen bg-sky-100">
        <main className="mx-auto w-full max-w-5xl px-4">
          <Provider store={store}>
            <CitySearch />
            <div className="grid grid-cols-2 gap-4">
              <Widget>
                <MainWidget />
              </Widget>
              <Widget></Widget>
              <Widget></Widget>
              <Widget></Widget>
            </div>
          </Provider>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
