import React,{useState} from 'react'
import HelpServices from '../../services/HelpServices';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Faq = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleAccordion = (index) => {
      setOpenItem(index === openItem ? null : index);
    };
  
    const { data, isLoading } = useQuery(
        ["faq"],
        () => HelpServices.GetFaq(),
        {
            refetchOnWindowFocus: false,
            onSuccess: (data) => {

                console.log("Data", data?.data)
            },
            onError: (error) => {
                console.log("ERROR", error);
            },
        }
    );
    return (
        <section className="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="comon-title mb-4">
                            <h3><strong>FAQ</strong></h3>
                        </div>
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="faq-wrap">
                            <div className="accordion" id="FAQaccordion">
                                {
                                    isLoading ? <p>Please wait.......</p> :
                                        data?.data?.questionanswerlist.length == 0 ? <div className="container d-flex justify-content-center align-items-center">
                                            <img
                                                src="/assets/images/nodatafound.jpg"
                                                height={300}
                                                width={300}
                                            />
                                        </div> : data?.data?.questionanswerlist.map((each,index) => {
                                            return         <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                              <button
                                                className="accordion-button"
                                                type="button"
                                                onClick={() => toggleAccordion(index)}
                                                aria-expanded={index === openItem ? 'true' : 'false'}
                                                aria-controls={`collapse${index}`}
                                              >
                                                {each.question}
                                              </button>
                                            </h2>
                                            <div
                                              id={`collapse${index}`}
                                              className={`accordion-collapse collapse ${index === openItem ? 'show' : ''}`}
                                              aria-labelledby={`heading${index}`}
                                              data-bs-parent="#FAQaccordion"
                                            >
                                              <div className="accordion-body">
                                                <p>{each.answer}</p>
                                              </div>
                                            </div>
                                          </div>

                                        })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Faq