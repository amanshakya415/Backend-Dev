export const showContactForm = (req, res) => {
  res.render("contact");
};

export const submitContact = (req, res) => {
  console.log(req.body);
  res.send("Form Submitted");
};