const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

// يخلي فولدر build هو اللي بيتعرض
app.use(express.static(path.join(__dirname, "build")));

// أي مسار تاني يرجع index.html (عشان React Router يشتغل صح)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
