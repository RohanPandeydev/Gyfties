import React from 'react'
import CmsServices from '../../services/CmsServices';
import Loader from '../../helper/Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import config from '../../../config';
import { toast } from 'react-toastify'
import parse from 'html-react-parser'
const Experiances = () => {
  const { data, isLoading } = useQuery(
    ["experiance"],
    () => CmsServices.GetExperiance(),
    {
      onSuccess: (data) => {
        console.log("My Question Answer", data?.data)

      },
      onError: (error) => {
        toast.error(error?.response?.message || error?.message);
        console.log("ERROR", error);
      },
    }
  );
  return (
    <main className="my-profile-registry-wrapper">
      <div className="container">
        {
          isLoading ? <Loader /> : !data?.data?.status ? <p>No data Found</p> :
            <div className='info-content'>
              <figure className='top-img'>
                <img className='img-fluid' src={config.apiUrl + "/" + data?.data?.experienceNew?.img} />
              </figure>
              <p>{parse(data?.data?.experienceNew?.content || "")}</p>
            </div>
        }
      </div>
    </main>
  )
}

export default Experiances