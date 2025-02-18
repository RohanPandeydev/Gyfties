import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { BookmarkDataValidation } from "../../helper/ValidationHelper";
import { useMutation } from "@tanstack/react-query";
import WishlistServices from "../../services/WishlistServices";
import config from "../../../config";
import extractCurrency, {
    extractCurrencyPrefill,
} from "../../helper/ExtractCurrency";
const UserWishlistDetails = ({
    submitHandler,
    isModal,
    setIsModal,
    data,
    DeleteDetails,
}) => {
    const [img, setImg] = useState(null);
    const formik = useFormik({
        initialValues: {
            title: "",
            priceValue: "",
            productTitle: "",
            productImageUrl: "",
            qty: 1,
            note: "",
            url: "",
            is_purchased: "",
        },
        validationSchema: BookmarkDataValidation,
        onSubmit: (values, action) => {
            submitHandler(values);
            return;
        },
    });

    const getclose = () => {
        setIsModal(!isModal);
    };
    const handleImage = (e) => {
        if (e?.target?.files[0].length == 0) {
            return;
        }
        setImg(URL.createObjectURL(e.target.files[0]));

        formik.setFieldValue("productImageUrl", e?.target?.files[0]);
    };

    const handleRemove = () => {
        formik.setFieldValue("productImageUrl", null);
        setImg(null);
    };
    useEffect(() => {
        formik.setFieldValue("productTitle", data?.productTitle);
        const cleanedValue = extractCurrencyPrefill(data?.priceValue || 0)
            .replace(/\s+/g, " ")
            .trim();
        formik.setFieldValue("priceValue", cleanedValue);
        formik.setFieldValue("productImageUrl", data?.productImageUrl);
        formik.setFieldValue("title", data?.title);
        formik.setFieldValue("url", data?.url);
        formik.setFieldValue("qty", data?.qty);
        formik.setFieldValue("note", data?.note);
        formik.setFieldValue("is_purchased", data?.is_purchased);
    }, [data]);

    return (
        <Modal isOpen={isModal} size="xl" toggle={getclose}>
            <ModalHeader toggle={getclose}>
                <h5 className="text-danger">Edit Item</h5>
            </ModalHeader>

            <ModalBody>
                <Row>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <img
                                className=""
                                src={
                                    img
                                        ? img
                                        : formik.values?.productImageUrl.includes(
                                            "amazon" || "Amazon"
                                        )
                                            ? formik.values.productImageUrl
                                            : formik.values?.productImageUrl.includes("ebay" || "Ebay")
                                                ? formik.values?.productImageUrl
                                                : formik.values?.productImageUrl.includes(
                                                    "walmart" || "Walmart"
                                                )
                                                    ? formik.values.productImageUrl
                                                    : config.apiUrl + "/" + formik.values.productImageUrl ||
                                                    "../assets/images/logo.png"
                                }
                                height={100}
                                width={100}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="ms-3"
                                onChange={handleImage}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Product Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="productTitle"
                                value={formik.values.productTitle}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.productTitle && (
                                <p className="text-danger">{formik.errors.productTitle}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Price Value
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="priceValue"
                                value={formik.values.priceValue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.priceValue && (
                                <p className="text-danger">{formik.errors.priceValue}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Quantity
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="qty"
                                value={formik.values.qty}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.qty && (
                                <p className="text-danger">{formik.errors.qty}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Url
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="url"
                                value={formik.values.url}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.url && (
                                <p className="text-danger">{formik.errors.url}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Note
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="note"
                                value={formik.values.note}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <p className="text">{formik.values.note.length}/200</p>
                            {formik.touched.note && (
                                <p className="text-danger">{formik.errors.note}</p>
                            )}
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckDefault"
                                name="is_purchased"
                                checked={formik.values.is_purchased}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Already received this?
                            </label>
                        </div>
                        <br />
                        <div className="mb-3">
                            <button type="submit" className="btn btn-outline-danger mx-2">
                                Save
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => DeleteDetails(data?.id)}
                            >
                                Remove From Wishlist
                            </button>
                        </div>
                    </form>
                </Row>
            </ModalBody>
        </Modal>
    );
};

export default UserWishlistDetails;
