import { parseCookies } from "nookies";
import axios from "axios";

const NewBooking = () => {
  return (
    <div className="container">
      <h2>Post a new hotel for booking</h2>
      <p className="lead">This is protected page for logged in user only</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  console.log("NOOKIES SENDING TOKEN", cookies);
  const { data } = await axios.get(`${process.env.api}/private-route`, {
    headers: {
      token: cookies.token,
    },
  });
  console.log("PRIVATE ROUTE SERVER PROPS", data);

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default NewBooking;
