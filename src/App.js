import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
import Fgreeting from './components/pure/fgreeting';
import TaskListComponent from './components/container/task_list';

import ContactList from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Martin"></Greeting>*/}

        {/* Componente de ejemplo funcional */}
        {/*<Fgreeting name="Martin"></Fgreeting>*/}

        {/* Componente de lista de tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}

        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
