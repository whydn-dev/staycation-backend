module.exports = {
  dashboard: (req, res) => {
    res.render("dashboard");
  },
  category: (req, res) => {
    res.render("category");
  },
  bank: (req, res) => {
    res.render("bank");
  },
  item: (req, res) => {
    res.render("item");
  },
};
