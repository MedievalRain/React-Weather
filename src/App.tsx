import Widget from "./ui/Widget";

function App() {
  return (
    <div className="h-full min-h-screen w-screen bg-sky-100">
      <main className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4">
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
      </main>
    </div>
  );
}

export default App;
