import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  TextField,
} from "@material-ui/core";
import SectionTitle from "./SectionTitle";
import ContentHeader from "./ContentHeader";
export default function ContactForm() {
  const FIELD_TYPES = {
    EMAIL: "email",
    NAME: "name",
    MESSAGE: "message",
  };
  const [errorName, setNameError] = useState(true);
  const [errorNameText, setNameText] = useState("");

  const [errorEmail, setEmailError] = useState(true);
  const [errorEmailText, setEmailText] = useState("");

  const [errorMessage, setMessageError] = useState(true);
  const [errorMessageText, setMessageText] = useState("");
  const [touched, setTouched] = useState(false);

  const [formData,setData] = useState({
      email:'',
      name:'',
      message:''
  })
  const handleChange = (e, type) => {
    setTouched(true);
    if (type === FIELD_TYPES.EMAIL) {
      const emailPatternRegrex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const validEmail = emailPatternRegrex.test(e.target.value);
      if (!validEmail) {
        setEmailError(true);
        setEmailText("Valid email is required");
      } else {
        setEmailError(false);
        setEmailText("");
      }
    } else {
      const emptyField = e.target.value.length === 0;
 
      if (type === FIELD_TYPES.NAME) {
        if (emptyField) {
          setNameError(true);
          setNameText("Your name is required");
        } else {
          setNameError(false);
          setNameText("");
        }
      }
      if (type === FIELD_TYPES.MESSAGE) {
        if (emptyField) {
          setMessageError(true);
          setMessageText("A message is required");
        } else {
          setMessageError(false);
          setMessageText("");
        }
      }
    }
    const data ={...formData}
    data[type] = e.target.value
    setData(data)
   
  };
  const encode = (data) => { /// encode data to send to netlify form
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
  } 
  const handleSubmit = (e) =>{
  
    const body =  encode({
        "form-name":"contactform",
        ...formData
      })
    console.log(body)
    fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      }).then(() => alert("Thank you for your message! I will get back to you ASAP!"))
      .catch(() => alert("Oops! Some errors occurred when submit form! Please try again!"))
      e.preventDefault()
  }
  return (
    <Box textAlign="center">
      <SectionTitle title="How To Contact Me" />
      <ContentHeader description="The best way to reach out to me is by shooting me a message via my email: datvo.vtd@gmail.com. I'd love to hear from you!" />
      <form  netlify data-netlify="true" name="contactform" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contactform" />
        <Grid container spacing={3} style={{ padding: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              id="name"
              name="name"
              label="Your Name"
              fullWidth
              autoComplete="name"
              error={touched && errorName}
              helperText={errorNameText}
              onChange={(e) => handleChange(e, FIELD_TYPES.NAME)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              id="email"
              name="email"
              label="Your Email"
              fullWidth
              autoComplete="email"
              error={touched && errorEmail}
              helperText={errorEmailText}
              onChange={(e) => handleChange(e, FIELD_TYPES.EMAIL)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              style={{ width: "100%" }}
              variant="outlined"
              required
              id="message"
              name="message"
              label="How Can I Help You?"
              multiline={true}
              error={touched && errorMessage}
              rows={6}
              helperText={errorMessageText}
              onChange={(e) => handleChange(e, FIELD_TYPES.MESSAGE)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
            type="submit"
              color="primary"
              disabled={errorName || errorMessage || errorEmail}
              variant="contained"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
