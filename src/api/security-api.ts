import { instance } from "./api"

const securityApi = {
    getCaptchaUrlApi(){  
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(response=>response.data)
    }
}

export default securityApi



type CaptchaResponseType = {
    url: string
}