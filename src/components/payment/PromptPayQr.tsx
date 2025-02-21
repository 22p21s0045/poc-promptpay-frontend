import {useEffect} from 'react'
import { Flex, Image } from "@mantine/core"
import PromtpayTag from "/payment/promptpay-payment.png"
import ThaiQrTag from "/payment/Thai_QR_Payment_Logo-01.jpg"
import generatePayload from "promptpay-qr"
import { QRCodeSVG } from "qrcode.react"
import { PaymentDetail } from "../../types/payment/paymentDetailType" 
interface IProps {
  paymentDetails: PaymentDetail
}

function PromptPayQr({ paymentDetails }: IProps) {
  const { promptPayId, amount, receiverName } = paymentDetails;
  const payload = generatePayload(promptPayId, { amount: amount })
  useEffect(() => {
    console.log("Updated paymentDetails fsdfas:", paymentDetails);
  }, [paymentDetails]);
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      style={{width:"15%", height:"auto",border:"solid" , borderRadius:10 ,borderColor:"gray" }}
    >
      <Image src={ThaiQrTag} />
      <Image src={PromtpayTag} style={{height: "50%", width:"50%"}} />
      <QRCodeSVG value={payload}/>
      <p>{amount} บาท</p>
      <p>{receiverName}</p>
    </Flex>
  )
}

export default PromptPayQr
