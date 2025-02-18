import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
const ModalBookmark = () => {
  return (
    <Modal isOpen={true} size="xl" toggle={false}>
    <ModalHeader toggle={false}>
      {/* <h5 className="text-danger">Share Your Campaign</h5> */}
    </ModalHeader>

    <ModalBody>
      <Row>
        <Col className="col-lg-6">
        
        </Col>
      </Row>

      <button className="btn btn1 m-2" >
        Save
      </button>
    </ModalBody>
  </Modal>
  )
}

export default ModalBookmark