import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/Nav";
import { Provider } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Nav />
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
