import { Provider } from "react-redux";
import Widget from "./ui/Widget";
import store from "./store";
import CitySearch from "./features/city/CitySearch";
import MainWidget from "./features/weather/MainWidget";

function App() {
  return (
    <div className="h-full min-h-screen w-screen bg-sky-100">
      <main className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4">
        <Provider store={store}>
          <CitySearch />
          <Widget>
            <MainWidget />
          </Widget>
          <Widget></Widget>
          <Widget></Widget>
          <Widget></Widget>
        </Provider>
      </main>
    </div>
  );
}

export default App;
