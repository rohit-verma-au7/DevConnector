const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;
const path = require("path");

const app = express();

//Connect DataBase
connectDB();

//Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Serve static assest in production
if (process.env.NODE_ENV === "production") {
  // SEt static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
