import * as Yup from 'yup'



// email: "",
// password: "",
// first_name: "",
// last_name: "",
// phone_number: "",
// dob: "",
export const RegisterValidation = Yup.object().shape({
    credential: Yup.string().email().typeError('Email. should be in format').required(),
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    phone_number: Yup.string().max(10, 'Max 10 digit allowed').matches(/^[0-9]+$/, "Must be only digits").typeError('Please enter numeric value'),
    dob: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future')
        .required('Date of birth is required'),
    password: Yup.string().required("Required")
})
export const ContactUs = Yup.object({
    user_name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone_number: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be  10 digits')
      ,
    message: Yup.string()
      .required('Message is required')
      .max(200, 'Max 200 characters allowed'),
  });

export const LoginValidation = Yup.object().shape({
    credential: Yup.string().email().typeError('Email. should be in format').required("Email Required"),
    password: Yup.string().required("Required")
})
export const EmailValidation = Yup.object().shape({
  credential: Yup.string().email().typeError('Email. should be in format').required("Email Required"),
})
export const ResetFormValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum")
    .max(64, "Password is too long - should be 64 chars maximun")
    .required("Password is required"),
  // .matches(/[0-9]/, "Password requires a number")
  // .matches(/[a-z]/, "Password requires a lowercase letter")
  // .matches(/[A-Z]/, "Password requires an uppercase letter")
  // .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: Yup.string()
    .required("Confrim password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
})
export const WshlistValidation = Yup.object().shape({
    first_name:Yup.string().required("Required").max(10,"Max 10 char allowed"), 
    last_name: Yup.string().required("Required").max(10,"Max 10 char allowed"), 
   
    wishlist_title:Yup.string().max(20,"Max 20 character allowed"),
    wishlist_greetings: Yup.string().max(200, "Max 200 characters allowed").nullable(),
})


// title: "",
// priceValue: "",
// productTitle: "",
// productImageUrl: "",
// qty: 1,
// note: "",
// url: ""


export const BookmarkDataValidation = Yup.object().shape({
    title: Yup.string().required("Required"),
    priceValue: Yup.string()
    .transform((value) => value.trim())
    .required('This field is required')
    .matches(/^[£$]\d+(\.\d{1,2})?$/, "Must be a valid number with up to two decimal places and contain $ or £ symbol, remove the extra space")
    .typeError('Please enter a valid numeric value'),
        productTitle: Yup.string().required("Required"),
    // productImageUrl: Yup.string().required("Required"),
    qty: Yup.string().matches(/^[0-9]+$/, "Must be only digits").typeError('Please enter numeric value').required('Required'),
    url: Yup.string().required("Required"),
    note: Yup.string().max(200, 'Max 200 words allowed')


})

export const UserProfileValidation=Yup.object().shape({
     first_name:Yup.string().required("First name required").max(10,"Max 10 char allowed"), 
     last_name: Yup.string().required("Last name required").max(10,"Max 10 char allowed"), 
})
export const WishlistCollab=Yup.object().shape({
     first_name:Yup.string().required("First name required").max(10,"Max 10 char allowed"), 
     last_name: Yup.string().required("Last name required").max(10,"Max 10 char allowed"), 
     email: Yup.string().email().typeError('Email. should be in format').required(), 
})
// Check if the input is either a valid email or a valid phone number
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
// export const UserEntranceValidation = Yup.object().shape({
//   details: Yup.string().email().required('Email is Required')
//   .max(160, 'Max 160 char'),
// })

// export const RegisterUserDetails = Yup.object().shape({
//   username: Yup.string().required('Required'),
//   dateOfBirth: Yup.date()
//     .max(new Date(), 'Date of birth cannot be in the future')
//     .required('Date of birth is required'),
//   // gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Gender is required'),
// })

// export const ContactValidation = Yup.object().shape({
//   firstName: Yup.string().required('Required'),
//   lastName: Yup.string().required('Required'),
//   phoneNumber: Yup.string()
//     .max(10, 'Max 10 digit allowed')
//     .matches(/^[0-9]+$/, "Must be only digits")
//     .typeError('Please enter numeric value'),
//   email: Yup.string()
//     .email()
//     .typeError('Email should be in format')
//     .required('Required'),

//   message: Yup.string()
//     .required('Required')
//     .max(250, 'Max 250 character valid'),
// })


// Multi Step Form

export const SecondStepForm = Yup.object({
    user_name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
   
  });
export const ThirdStepForm = Yup.object({
    store_name: Yup.string().required('Name is required'),
    order_number:  Yup.string().required("Required"),
   
  });
  export const FourthStepForm = Yup.object({
    message_from: Yup.string().required('Name is required'),
   
   
  });