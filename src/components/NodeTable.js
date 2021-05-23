import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";

export default function App() {
  const [nodeList, setNodeList] = useState([]);
  useEffect(() => {
    axios.get('https://chia-node-list-api.vercel.app/node').then((res) => {
          const Node = res.data;
          setNodeList(JSON.parse(JSON.stringify(Node)));
        });
  }, [])
  return (
    <MDBTable className="caption-top">
      <caption>List of Chia Node</caption>
      <MDBTableHead>
        <tr className="table-dark">
          <th scope="col">IP</th>
          <th scope="col">Port</th>
          <th scope="col">
            LastActiveTime
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Object.keys(nodeList).map((key, index) => {
          return (<tr key={index}>
            <th scope="row">{nodeList[key].node_ip}</th>
            <td>{nodeList[key].node_port}</td>
            <td>
              {new Date(nodeList[key].last_active * 1000).toUTCString()}
            </td>
          </tr>)
        })}
      </MDBTableBody>
    </MDBTable>
  );
}
