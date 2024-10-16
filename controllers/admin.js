//admin login
const adminController = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(500).json({
      success: false,
      message: "Username or password cannot be empty!",
    });
  }
  if (name === "admin" && password === "password") {
    res.status(200).json({
      success: true,
      message: "Welcome Admin!",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Wrong username or password",
    });
  }
};
export default adminController;
