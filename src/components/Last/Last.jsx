import styles from "./Last.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

import { useState } from "react";

const Last = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event)=>{
     event.preventDefault();
     setName(event.target[0].value);
     setEmail(event.target[1].value);
     setText(event.target[2].value);
  }
   
    

  return (
    <div className={styles.contact_container}>
      <div className={styles.form_container}>
        <div className={styles.top_buttons}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button
          isSecond={true}
          text="VIA EMAIL FORM"
          icon={<FiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit} className={styles.for_form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Username"/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="example@pmgr.com"/>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={7} placeholder="K gardaixou"></textarea>
          </div>

          <div style={{
            display:"flex",
            justifyContent:"end"
          }
          }>
            <Button text="SUBMIT"/>
          </div>

          <div className= {styles.final_display}>
            <h3>Name : {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Text: {text}</h3>
          </div>
        </form>
      </div>

      <div className="last_images">
        <img src="/images/Service 24_7-pana 1.svg" alt="main-image" />
      </div>
    </div>
  );
}

export default Last