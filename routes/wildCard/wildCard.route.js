//Wild card route
const wildCardRoute = (req, res) => {
  res.status(404).json({ status: "error", message: "page not found" });
};

module.exports = wildCardRoute;
