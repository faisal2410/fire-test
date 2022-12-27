export const showMessage = (req, res) => {
  res.json({
    message: `Your message is received ${req.params.message}`,
  });
};
