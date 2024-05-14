import './App.css';
import ContactForm from './components/contact_form/ContactForm.jsx';
import SearchBox from './components/search_box/SearchBox.jsx';
import ContactList from './components/contact_list/ContactList.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';

const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App;