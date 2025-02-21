import "@mantine/core/styles.css"
import "./App.css"
import { MantineProvider } from "@mantine/core"
import Paymentpage from "./page/Paymentpage"

function App() {
  return (
    <MantineProvider>
      <Paymentpage />
    </MantineProvider>
  )
}

export default App
