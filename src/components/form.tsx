import * as Yup from 'yup';

export const formInitialValues = {
  photo: "",
  firstName: "",
  lastName: "",
  bio: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  startDate: "",
  endDate: "",
  responsibilities: "",
  //qualification: "",
  resume: "",
  verificationCode: ""
}

export const validationRules = [
  Yup.object().shape({
    photo: Yup.mixed().required("required")
    .test('fileFormat', '*Only .png and .jpg files are allowed', value => {
      if (value) {
        const supportedFormats = ['image/jpg', 'image/png'];
        return supportedFormats.includes((value as File)?.type);
      }
      return false;
    })
    .test("fileSize", "File size should not be more than 3MB", (value) => {
      if (value){
        return (value as File)?.size <= 3145728;
      }
      return false;
    }),
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    bio: Yup.string().required("required"),
    email: Yup.string().required("required"),
    phoneNumber: Yup.string().required("required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string()
      .required("required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  }),
  Yup.object().shape({
    companyName: Yup.string().required("required"),
    startDate: Yup.string().required("required"),
    endDate: Yup.mixed().when('stillWorkHere', {
			is: false,
			then: schema =>
				schema.required('required'),
			otherwise: schema => schema.notRequired(),
		}),
    stillWorkHere: Yup.boolean(),
    responsibilities: Yup.string().required("required"),
    qualification: Yup.string().required("required"),
  }),
  Yup.object().shape({
    resume: Yup.mixed().required("required")
    .test('fileFormat', '*Only PDF files are allowed', value => {
      if (value) {
        const supportedFormats = ['application/pdf'];
        return supportedFormats.includes((value as File)?.type);
      }
      return false;
    })
    .test("fileSize", "File too large", (value) => {
      if (value){
        return (value as File)?.size <= 3145728;
      }
      return false;
    })
  }),
  Yup.object().shape({
    verificationCode: Yup.string().required("required"),
  })
]