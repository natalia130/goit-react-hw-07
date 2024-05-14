import css from './Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css["contact-container"]}>
            <div className={css["contact-info"]}>
                <div>
                    <IoPerson/>
                    <p>{name}</p>
                </div>
                <div>
                    <FaPhone />
                    <p>{number}</p>
                </div>
            </div>
            <button className={css["contact-delete-btn"]} onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
};

export default Contact;