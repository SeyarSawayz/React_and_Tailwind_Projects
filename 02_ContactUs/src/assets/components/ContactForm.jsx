import Button from "./Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

function ContactForm() {

    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [text,setText] = useState(null);

    const supportChat=()=> (alert('Support via chat'))
    const supportViaCall=()=> (alert('Support via Call'))
    const supportViaemail=()=> (alert('Support via email'))

    const onSubmit = (e)=>{

        e.preventDefault()
        setName((e.target[0].value))
        setEmail((e.target[1].value))
        setText((e.target[2].value))
        

        
    }
    console.log(`Name ${name} email address ${email} comment ${text}`)


  return (
    <div className="container mx-auto  mt-10 flex justify-evenly">
      <div className="form flex flex-col gap-4">
        <div className="topBtn flex gap-4">
          <Button
          
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"34px"} />}
            onClick = {supportChat}
          />
            
          <Button onClick = {supportViaCall} text="VIA CALL" icon={<FaPhoneAlt fontSize={"34px"} />} />
        </div>
        <Button
            onClick = {supportViaemail}

          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={"34px"} />}
        />

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="formControl flex flex-col w-full relative ">
            <label
              htmlFor="name"
              className="absolute text-[14px] left-[25px] top-[-10px] bg-white px-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="h-[50px] p-5 text-xl border border-black"
            />
          </div>

          <div className="formControl flex flex-col w-full relative ">
            <label
              htmlFor="email"
              className="absolute text-[14px] left-[25px] top-[-10px] bg-white px-2"
            >
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              className="h-[50px] p-5 text-xl border border-black"
            />
          </div>

          <div className="formControl flex flex-col w-full relative ">
            <label
              htmlFor="textarea"
              className="absolute text-[14px] left-[25px] top-[-10px] bg-white px-2"
            >
              Text
            </label>
            <textarea
              className="h-[100px] p-5 text-xl border border-black"
              name="textarea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button text="submit" className="flex items-end" />
          </div>
          <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{text}</h1>

          </div>
        </form>
      </div>
      <div className="image flex ">
        <img className="w-[500px]" src="/images/contact.svg" alt="" />
      </div>
    </div>
  );
}

export default ContactForm;
