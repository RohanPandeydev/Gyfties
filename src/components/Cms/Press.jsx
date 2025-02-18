import React from 'react'
import CmsServices from '../../services/CmsServices';
import Loader from '../../helper/Loader/Loader';
import parse from 'html-react-parser'
import { useQuery } from '@tanstack/react-query';
import config from '../../../config';
import { toast } from 'react-toastify'

const Press = () => {
  const { data, isLoading } = useQuery(
    ["press"],
    () => CmsServices?.GetPress(),
    {
      onSuccess: (data) => {
        console.log("My Question Answer", data?.data)

      },
      onError: (error) => {
        console.log("ERROR", error);
        toast.error(error?.response?.message || error?.message);

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
                <img className='img-fluid' src={config.apiUrl + "/" + data?.data?.pressNew?.img} />
              </figure>
              <p>{parse(data?.data?.pressNew?.content || "")}</p>
            </div>
        }
      </div>
    </main>
  )
}

export default Press