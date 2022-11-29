import './App.css';

import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap'

import Filter from './components/Filter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Card style={{ width: 500 }}>
        <CardBody>
          <CardTitle tag="h1" style={{ textAlign: 'center' }}>
            TODO APP
          </CardTitle>

          <Filter />

          <TodoList />

        </CardBody>
      </Card>

    </div>
  );
}

export default App;
