import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';

const MultiStepForm = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
    <button>Toggle</button>
    <Modal isOpen={modal} size="xl" toggle={toggle}>
    <ModalHeader toggle={toggle}>
        <h5 className="text-danger">Visibility And Privacy Settings</h5>
    </ModalHeader>

    <ModalBody>
        <Row>
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Your Wishlist Link
                    </label>
                    <input type="text" value={""} className="form-control" disabled={true} />
                </div>
                <div className="form-check mb-1">
                    <input
                        className="form-check-input"
                        type="radio"
                       
                        id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Private
                        <p className="text-secondary">
                            (Visitors must have the direct link to your wishlist.)
                        </p>
                    </label>
                </div>
                <div className="form-check mb-1">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="is_private"
                       
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Public
                        <p className="text-secondary">
                            (Visitors can search Gyfties to find your wishlist.)
                        </p>
                    </label>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-outline-danger mx-2">
                        Save
                    </button>
                </div>
            </form>
        </Row>
    </ModalBody>
</Modal>
</>
  );
};

export default MultiStepForm;
