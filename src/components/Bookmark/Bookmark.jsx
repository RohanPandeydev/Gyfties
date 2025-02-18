import { useMutation, useQuery } from '@tanstack/react-query'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import BookmarkServices from '../../services/BookmarkServices'
import { Flip, ToastContainer, toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import StorageHelper from '../../helper/StorageHelper'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import WishlistServices from '../../services/WishlistServices'
import { BookmarkDataValidation } from '../../helper/ValidationHelper'

// import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
// import ModalBookmark from './ModalBookmark'

const Bookmark = () => {
    // const loc=useLocation()
    const [isModal, setModal] = useState(true)
    const [searchParams] = useSearchParams();
    const url = encodeURIComponent(searchParams.get('u'))
    const [isWebUrlSame, setISWebURLSame] = useState('')
    const user_id = StorageHelper.getUserData()?.id
    const encodeURL = encodeURIComponent(window.location.origin)

    const removePriceValue = (value) => {
       // Regular expression to match prices (e.g., $100, €200)
    const priceRegex = /(\$|\€)\d+(\.\d{2})?/;
    // Find the matched price
    const match = value.match(priceRegex);
    // Return the matched price or an empty string if no match is found
    return match ? match[0] : "$"+value;
      };

    const formik = useFormik({
        initialValues: {
            title: "",
            priceValue: "",
            productTitle: "",
            productImageUrl: "",
            qty: 1,
            note: "",
            url: ""
        },
        validationSchema: BookmarkDataValidation,
        onSubmit: (values, action) => {
            submitHandler(values)
            return

        }

    })

    const submitHandler = (data) => {
        console.log("Data===>", data)
        return register.mutate({ ...data, user_id: user_id })
    }
    //Get web Data
    const { data, isLoading } = useQuery(['bookmark', url], () => {
        return BookmarkServices.GetBookmarkDetails(url)

    }, {
        enabled: !!url && !!(!url.includes(encodeURL)),
        onSuccess: (data) => {
            console.log('data===>', data?.data)
            formik.setFieldValue("productTitle", data?.data?.productTitle)
            formik.setFieldValue("priceValue",removePriceValue (data?.data?.priceValue))
            formik.setFieldValue("productImageUrl", data?.data?.productImageUrl)
            formik.setFieldValue("title", data?.data?.title)
            formik.setFieldValue("url", data?.data?.currentUrl)
        },
        onError: (err) => {
            toast?.error(err?.message, { delay: 10 })
        }
    })
    //Save Web Data
    const register = useMutation((formdata) => { return WishlistServices.CreateWishlist(formdata) }, {
        onSuccess: (data) => {

            console.log(data?.data, "===>")
            if (data?.data?.status) {
                toast.success(`🦄 ${data?.data?.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                });
                setTimeout(() => {
                    window.close()
                    window.location.assign("/")
                }, 2000);
            }
            else {
                toast.error(`🦄 ${data?.data?.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                });
            }
            return
        },
        onError: (err) => {
            toast.error(`🦄 ${err?.response?.data?.message || err?.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
            return false
        }
    })
    const getclose = () => {
        setModal(!isModal)
        router.push('/createdFundraiser')
    }

    useEffect(() => {
        const check = url.includes(encodeURL)
        // console.log("webUrl","==>",webUrl)
        console.log("query", "==>", check)
        if (check) {
            setISWebURLSame('Please visit our partners  website to use me')



            // alert("Not found")
            return;
        }
    }, [url])
    const handleError = (event) => {
        event.target.src = '/assets/images/Image_not_available.png';
      };
    return (
              
            <Modal backdropClassName="custom-backdrop"   dialogClassName="my-modal" isOpen={true} size="xl" toggle={false} fade={false}>
                {/* <ModalHeader toggle={false}>
                </ModalHeader> */}
                <ModalBody>
                    <div className='container'>
                        <p>{isWebUrlSame ? <p className='text-danger text-center'>{isWebUrlSame}</p> : null}</p>
                        {
                            !isWebUrlSame ?
                                isLoading ? <p className='text-danger'>Please Wait...</p> : <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-3">
                                        <img className='' onError={handleError} src={formik.values?.productImageUrl} height={100} width={100} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Product Title</label>
                                        <input type="text" className="form-control" name='productTitle' value={formik.values.productTitle} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {
                                            formik.touched.productTitle && <p className='text-danger'>{formik.errors.productTitle}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Price Value</label>
                                        <input type="text" className="form-control" name='priceValue' value={formik.values.priceValue} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {
                                            formik.touched.priceValue && <p className='text-danger'>{formik.errors.priceValue}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Quantity</label>
                                        <input type="text" className="form-control" name='qty' value={formik.values.qty} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {
                                            formik.touched.qty && <p className='text-danger'>{formik.errors.qty}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Url</label>
                                        <input type="text" className="form-control" name='url' value={formik.values.url} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {
                                            formik.touched.url && <p className='text-danger'>{formik.errors.url}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Note</label>
                                        <input type="text" className="form-control" name='note' value={formik.values.note} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        <p className='text'>{formik.values.note.length}/200</p>
                                        {
                                            formik.touched.note && <p className='text-danger'>{formik.errors.note}</p>
                                        }
                                    </div>
                                    <div className='mb-3'>
                                        <button type='submit' className='btn btn-outline-danger mx-2'>Submit</button>
                                        <button type='button' className='btn btn-outline-danger' onClick={()=>window.close()}>Cancel</button>
                                    </div>
                                </form> : null
                        }
                    </div>
                </ModalBody>
            </Modal>


            

    )
}

export default Bookmark