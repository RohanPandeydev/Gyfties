import { useQuery } from '@tanstack/react-query';
import React from 'react'
import HelpServices from '../../services/HelpServices';
import CmsServices from '../../services/CmsServices';
import Loader from '../../helper/Loader/Loader';
import config from '../../../config';
// import authimg1 from '../../auth-img1.png'
import parse from 'html-react-parser'
import { toast } from 'react-toastify';

const TermsConditions = () => {
  const { data, isLoading } = useQuery(
    ["termscondition"],
    () => CmsServices.GetTermsConditions(),
    {
      onSuccess: (data) => {
        // console.log("My Question Answer",data?.data)

      },
      onError: (error) => {
        console.log("ERROR", error);
        toast.error(err?.response?.message || err?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Flip,
        });
        return false;
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
                <img className='img-fluid' src={config.apiUrl + "/" + data?.data?.content?.img} />
              </figure>
              <p>{parse(data?.data?.content?.content || "")}</p>
            </div>
        }
      </div>
    </main>
  )
}

export default TermsConditions