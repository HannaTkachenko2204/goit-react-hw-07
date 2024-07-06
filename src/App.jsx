import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && toast.error("Something wrong!")}
      {loading && <Loader />}
      <ContactList />
      <Toaster />
    </div>
  );
}

export default App;
