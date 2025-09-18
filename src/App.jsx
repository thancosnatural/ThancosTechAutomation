import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import 'react-phone-input-2/lib/style.css';
import Whatsapp from "./components/Whatsapp";
import GoogleTranslateProvider from "./GoogleTranslateProvider";


function App() {
  return (
    <>
      {/* <GoogleTranslateProvider included="en,es,fr" defaultLang="en" /> */}
      <Toaster />
      <Whatsapp />
      <AppRoutes />
    </>
  );
}

export default App;
