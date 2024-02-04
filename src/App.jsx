import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import Last from "./components/Last/Last";


function App(){
  return (
    <div>
      <Header />
      <main className="main_display">
        <Middle />
        <Last />
      </main>
    </div>
  );
}

export default App;