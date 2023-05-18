import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";

const NewPost = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <Formik
      initialValues={{ status: "" }}
      onSubmit={async (values, { resetForm }) => {
        let imageUrl = "";

        if (image) {
          const storageRef = firebase.storage().ref();
          const fileRef = storageRef.child(image.name);
          await fileRef.put(image);
          imageUrl = await fileRef.getDownloadURL();
        }

        const newPostRef = firebase.database().ref("posts").push();
        await newPostRef.set({
          status: values.status,
          img: imageUrl,
          // ... add other post properties here
        });

        setImage(null);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <Field
            name="status"
            type="text"
            placeholder="Write a status update..."
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default NewPost;
