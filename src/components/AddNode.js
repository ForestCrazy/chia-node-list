import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import axios from 'axios'
const FormData = require('form-data')

export default function AddNode() {
  const [AddNodeModal, setAddNodeModal] = useState(false);
  const [NodeIp, setNodeIp] = useState('');
  const [NodePort, setNodePort] = useState(8444);

  const toggleAddNodeModal = () => setAddNodeModal(!AddNodeModal);

  const AddNode = () => {
      const formData = new FormData();
      formData.append('node_ip', NodeIp)
      formData.append('node_port', NodePort)
      axios.post('https://chia-node-list-api.vercel.app/node', formData).then(res => {
          const resp = JSON.parse(JSON.stringify(res.data))
          if (resp.success) {
              setNodeIp('')
              setNodePort(8444)
              setAddNodeModal(!AddNodeModal)
              
          }
      })
  }

  return (
    <>
      <div className="text-end">
        <MDBBtn onClick={toggleAddNodeModal}>Add Node</MDBBtn>
      </div>
      <MDBModal
        show={AddNodeModal}
        getOpenState={(e) => setAddNodeModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Node</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleAddNodeModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <label htmlFor="NodeIp" className="font-weight-light">
                Node Ip
              </label>
              <input
                type="text"
                id="NodeIp"
                className="form-control"
                onChange={(e) => {
                  setNodeIp(e.target.value);
                }}
                value={NodeIp}
              />
              <br />
              <label htmlFor="NodePort" className="font-weight-light">
                Node Port
              </label>
              <input
                type="number"
                id="NodePort"
                className="form-control"
                onChange={(e) => {
                  setNodePort(e.target.value);
                }}
                value={NodePort}
              />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggleAddNodeModal}>
                Close
              </MDBBtn>
              <MDBBtn onClick={AddNode}>Add Node</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
