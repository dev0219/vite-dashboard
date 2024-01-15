import { reactive } from 'vue'

export const loginInfo = reactive({
  email: '',
  password:''
})

export const registerInfo = reactive({
  firstName: '',
  lastName:'',
  email:'',
  password:'',
  verifyPassword:''
})

export const contactInfo = reactive({
  firstName: '',
  email:'',
  subject:'',
  message:''
})

export const paperCanvasInfo = reactive({
  radioVal: '',
  category:''
})

export const mattingInfo = reactive({
  sliderValue: 0,
  sizeLeft:'',
  sizeTop:'',
  sizeRight:'',
  sizeBottom:'',
  color:''
})

export const qtyInfo = reactive({
  qty: 0,
  amount:'99,99',
  unit:'€'
})

export const SetValue = (val: any, key:string) => {
  switch (key) {
    case 'email':
      loginInfo['email'] = val;
      break;
    case 'login-password':
      loginInfo['password'] = val;
      break;
    case 'firstName':
      registerInfo['firstName'] = val;
      break;
    case 'lastName':
      registerInfo['lastName'] = val;
      break;
    case 'register-password':
      registerInfo['password'] = val;
      break;
    case 'register-verify-pass':
      registerInfo['verifyPassword'] = val;
      break;
    case 'register-email':
      registerInfo['email'] = val;
      break;
    case 'contact-firstname':
      contactInfo['firstName'] = val;
      break;
    case 'contact-email':
      contactInfo['email'] = val;
      break;
    case 'contact-subject':
      contactInfo['subject'] = val;
      break;
    case 'contact-message':
      contactInfo['message'] = val;
      break;
    case 'paper-radio':
      paperCanvasInfo['radioVal'] = val;
      break;
    case 'paper-category':
      paperCanvasInfo['category'] = val;
      break;
    case 'mat-slider':
      mattingInfo['sliderValue'] = Number(val);
      break;
    case 'mat-left':
      mattingInfo['sizeLeft'] = val;
      break;
    case 'mat-right':
      mattingInfo['sizeRight'] = val;
      break;
    case 'mat-top':
      mattingInfo['sizeTop'] = val;
      break;
    case 'mat-bottom':
      mattingInfo['sizeBottom'] = val;
      break;
    case 'mat-color':
      mattingInfo['color'] = val;
      break;
    case 'qty':
      qtyInfo['qty'] = Number(val);
      break;
    // Add more cases as needed
    default:
      // Handle the default case if key doesn't match any of the above cases
      break;
  }
 }

