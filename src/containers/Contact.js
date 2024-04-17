import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactsHeader } from "../Components/ContactsHeader/ContactsHeader";
const Contact = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log("🚀 ~ Contact ~ id:", id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);

  return (
    <>
      <ContactsHeader />
    </>
  );
};

export default Contact;
