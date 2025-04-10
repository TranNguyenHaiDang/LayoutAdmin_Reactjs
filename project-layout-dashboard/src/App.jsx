
import './App.css'
import MenuSider from "./components/LayoutAdmin/MenuSider";
import Header from "./components/LayoutAdmin/Header";
import Overview from "./components/Grid/Overview";

function App() {

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] h-screen">
        <MenuSider />

        <div className="flex flex-col">
          <Header />
          <div className="p-6 bg-gray-100 flex-1 overflow-auto">
            <Overview />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
