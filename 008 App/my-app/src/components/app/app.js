import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

function App() {

  const data = [
    { name: 'Ivan Kuzmin', salary: 950, increase: false },
    { name: 'Kuzma Ivanov', salary: 1900, increase: true },
    { name: 'Fedor Petrov', salary: 2300, increase: false },
    { name: 'King Burger', salary: 830, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;