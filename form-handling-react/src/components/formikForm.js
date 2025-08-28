import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert("User registered successfully!");
        resetForm();
      } else {
        alert("Failed to register user.");
      }
    } catch (err) {
      alert("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "24px auto", padding: 12 }}>
      <h2>Registration Form (Formik + Yup)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>
            <br />

            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>
            <br />

            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>
            <br />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
