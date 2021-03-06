import logo from './logo.svg';
import './App.css';
import NodeTable from './components/NodeTable'
import AddNode from './components/AddNode'
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
      <MDBContainer>
        <p className="fs-1 text-center">Chia Node List</p>
        <p className="text-center">API: <a href='https://github.com/ForestCrazy/chia-node-list-api'>chia-nost-list-api</a></p>
        <p className='text-center'>Chia Node Append: <a href='https://github.com/ForestCrazy/chia-node-append'>chia-node-append</a></p>
        <AddNode />
        <NodeTable />
      </MDBContainer>
    </div>
  );
}

export default App;
