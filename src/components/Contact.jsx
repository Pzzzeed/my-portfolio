import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";
import swal from "sweetalert";
import { motion } from "framer-motion";
import { textVariant, textVariantex } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 821px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  color: black;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  height: 80%;

  @media only screen and (max-width: 821px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setSuccess(true);

          swal("Done!", "Your message has been sent.", "success");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          setSuccess(false);

          swal("Oops", "Something went wrong. Please try again.", "error");
        }
      );
  };
  return (
    <Section className="mb-[21px]">
      <motion.div variants={textVariantex()}>
        <p className={`${styles.sectionSubText} text-center`}>
          THANK YOU FOR REACHING OUT!
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My contact.</h2>
      </motion.div>

      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit} className="h-full pt-10">
            <Title>Contact Form</Title>
            <Input
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
              value={form.message}
              onChange={handleChange}
            />
            <Button type="submit" className="hover:bg-[#764AF1]">
              {loading ? "Sending..." : "Send"}
            </Button>
            {success &&
              "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default SectionWrapper(Contact, "contact");
