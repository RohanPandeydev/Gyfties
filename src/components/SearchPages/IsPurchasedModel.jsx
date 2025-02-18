import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import config from '../../../config';
import { useState } from 'react';
import FirstStep from '../GiftTracker/FirstStep';
import ExitStep from '../GiftTracker/ExitStep';
import SecondStep from '../GiftTracker/SecondStep';
import ThirdStep from '../GiftTracker/ThirdStep';
import FourthStep from '../GiftTracker/FourthStep';
import { useEffect } from 'react';
import UpdateForm from '../GiftTracker/UpdateForm';
import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
const IsPurchasedModel = ({isPurchased,setIsPurchased,wishlistDetails,purchasedItems}) => {
  const queryClient=useQueryClient()

    const [toggle,setToggle]=useState(false)
    const [step,setStep]=useState(1)
    const [showBackBtn,setShowBackBtn]=useState(false)
    const [formData,setFormData]=useState({})
const [fetchId,setFetchId]=useState("")
    const handleToggle=(bool)=>{
        if(!bool){
            prevStep()
            return
        }
        nextStep()
        setToggle(bool)
    }

    const prevStep=()=>{
        setStep(()=>step-1)
    }
    const nextStep=()=>{
        setStep(()=>step+1)
    }

    const getclose = () => {
      purchasedItems[wishlistDetails.id]=false
      queryClient.invalidateQueries("searchresult")
        queryClient.refetchQueries("searchresult")
        setIsPurchased(!isPurchased);
    };


    useEffect(()=>{
        if(wishlistDetails?.ispurchased?.is_purchased){
            setStep(-1)
            setShowBackBtn(true)
            setFetchId(wishlistDetails?.ispurchased?.giftpurchase?.id)

        }
    },[wishlistDetails?.ispurchased?.is_purchased])

    const finalData=useMemo(()=>{



    },[step])
  return (
    <Modal className="purchased-details-form-wrapper" isOpen={isPurchased} size="lg" toggle={getclose} centered={true}>
    <ModalHeader toggle={getclose}>
      
    {/* <Row>
    <Col className="col-lg-6">
    <p>{
        wishlistDetails?.productTitle
    }</p>
    
    
    </Col>
    <Col>
    <img
                                    className="img-fluid"
                                    src={
                                      wishlistDetails?.productImageUrl.includes(
                                        "amazon" || "Amazon"
                                      )
                                        ? wishlistDetails?.productImageUrl :
                                        wishlistDetails?.productImageUrl.includes(
                                          "ebay" || "Ebay"
                                        ) ? wishlistDetails?.productImageUrl :
                                          wishlistDetails?.productImageUrl.includes(
                                            "walmart" || "Walmart"
                                          ) ? wishlistDetails?.productImageUrl
                                            : config.apiUrl +
                                            "/" +
                                            wishlistDetails?.productImageUrl
                                    }
                                    alt
                                  />
    </Col>
  </Row> */}
      {/* <h5 className="text-danger">Share Your Campaign</h5> */}
    </ModalHeader>

    <ModalBody>
       {
               step==-1 ? <UpdateForm getclose={getclose} fetchId={fetchId} wishlistDetails={wishlistDetails} setStep={setStep} />: step==0? <ExitStep prevStep={prevStep} nextStep={nextStep}/>:step==1?<FirstStep   setStep={setStep} wishlistDetails={wishlistDetails} handleToggle={handleToggle}/>:step==2?<SecondStep formData={formData}setFormData={setFormData}  prevStep={prevStep} nextStep={nextStep}/>:step==3?<ThirdStep  fetchId={fetchId} setFetchId={setFetchId}  showBackBtn={showBackBtn} wishlistDetails={wishlistDetails}  prevStep={prevStep} nextStep={nextStep} formData={formData}setFormData={setFormData}/>:step==4?<FourthStep fetchId={fetchId}setFetchId={setFetchId} getclose={getclose} prevStep={prevStep} nextStep={nextStep}/>:""
       }
     
    </ModalBody>
  </Modal>
  )
}

export default IsPurchasedModel