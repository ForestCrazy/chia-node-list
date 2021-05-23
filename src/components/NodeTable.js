import React, { useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from 'axios';

export default function App() {
  const [nodeList, setNodeList] = useState([]);
  const getNodeList = () => {
    axios.get('https://chia-node-list-api.vercel.app/node').then((res) => {
            const Node = res.data;
            setNodeList(JSON.parse(Node));
          });
  }
  setInterval(getNodeList, 60000)
  return (
    <MDBTable className="caption-top">
      <caption>List of Chia Node</caption>
      <MDBTableHead>
        <tr className="table-dark">
          <th scope="col">IP</th>
          <th scope="col">Port</th>
          <th scope="col">LastActiveTime</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
          {nodeList.map(node => {
            <tr>
          <th scope="row">{node.node_ip}</th>
          <td>{node.node_port}</td>
          <td>{new Date(node.last_active).toLocaleTimeString('en-US')}</td>
        </tr>
          })}
        </MDBTableBody>
    </MDBTable>
  );
}
