import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Modal from "./Modal";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase";
import { ErrorMessage } from "formik";

const formValidationSchema = yup.object().shape({
  name: yup.string().required("my frined name is a required field 😊"),
  email: yup.string().email().required("Email is required"),
  Mobile: yup
    .number()
    .min(1000000000, "invalid mobile number")
    .max(9999999999, "invalid too long")
    .required("Mobile is required"),
});

const AddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "kayhantechcontacts");
      await addDoc(contactRef, contact);
      toast.success("Contact added Successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "kayhantechcontacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact updated Successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={formValidationSchema}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  Mobile: contact.Mobile,
                }
              : {
                  name: "",
                  email: "",
                  Mobile: "",
                }
          }
          onSubmit={(e) => {
            isUpdate ? updateContact(e, contact.id) : addContact(e);
          }}
        >
          <Form>
            <div className="flex flex-col gap-4 px-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-medium text-sm">
                  Name
                </label>
                <Field
                  name="name"
                  className="bg-transparent border p-2 text-sm"
                ></Field>
                <div className="text-red-500">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium text-sm">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="bg-transparent border p-2 text-sm"
                ></Field>
                <div className="text-red-500">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="Mobile" className="font-medium text-sm">
                  Mobile
                </label>
                <Field
                  name="Mobile"
                  type="text"
                  className="bg-transparent border p-2 text-sm"
                ></Field>
                <div className="text-red-500">
                  <ErrorMessage name="Mobile" />
                </div>
              </div>
              <button className="bg-blue-400 px-2 py-1.5 self-end rounded-lg text-white font-medium cursor-pointer ">
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default AddandUpdateContact;
