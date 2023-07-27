import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.textItem}>{name} :</p>
          <p className={css.textItem}>{number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
