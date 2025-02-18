import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { BookmarkDataValidation } from "../../helper/ValidationHelper";
import { useMutation } from "@tanstack/react-query";
import WishlistServices from "../../services/WishlistServices";
import config from "../../../config";
import { toast } from "react-toastify";
const UserWishlistPrivacy = ({
    isModalPrivacy,
    setIsModalPrivacy,
    data,
    submitPrivacyHandler,
    shareLink
}) => {
    const formik = useFormik({
        initialValues: {
            id: "",
            is_private: "",
        },
        onSubmit: (values, action) => {
            submitPrivacyHandler(values);
        },
    });

    const getclose = () => {
        setIsModalPrivacy(!isModalPrivacy);
    };

    useEffect(() => {
        formik.setFieldValue("id", data?.id);
        formik.setFieldValue("is_private", data?.is_private);
    }, [data]);

    return (
        <Modal isOpen={isModalPrivacy} size="xl" toggle={getclose}>
            <ModalHeader toggle={getclose}>
                <h5 className="text-danger">Visibility And Privacy Settings</h5>
            </ModalHeader>

            <ModalBody>
                <Row>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Your Wishlist Link
                            </label>
                            <input type="text" value={shareLink} className="form-control" disabled={true} />
                        </div>
                        <div className="form-check mb-1">
                            <input
                                className="form-check-input"
                                type="radio"
                                onChange={() => formik.setFieldValue("is_private", true)}
                                name="is_private"
                                checked={formik.values.is_private == true}
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
                                onChange={() => formik.setFieldValue("is_private", false)}
                                checked={formik.values.is_private == false}
                                id="flexRadioDefault2"
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
    );
};

export default UserWishlistPrivacy;
