import { useState } from "react"
import PromptPayQr from "../components/payment/PromptPayQr"
import { Flex, Input } from "@mantine/core"
import { PaymentDetail } from "../types/payment/paymentDetailType"

function Paymentpage() {
  const [data, setData] = useState<PaymentDetail>({
    receiverName: "Adam Smith",
    amount: 100,
    promptPayId: "0928382663",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setData((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? Number(value) || 0 : value, // Ensure amount stays a number
    }))
  }
  return (
    <Flex direction={"row"} gap={10}>
      <PromptPayQr paymentDetails={data} />
      <Flex direction={"column"} gap={10}>
        <Input name="promptPayId"  placeholder="Receiver (PromptPay)" onChange={handleChange} />
        <Input name="receiverName" placeholder="Receiver name" onChange={handleChange} />
        <Input name="amount" placeholder="Amount" type="number" onChange={handleChange} />
      </Flex>
    </Flex>
  )
}

export default Paymentpage
