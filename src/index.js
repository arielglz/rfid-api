const express = require('express');
const v1RoleRouter = require('./v1/routes/roleRoutes');
const v1ProfessorRouter = require('./v1/routes/professorRoutes');
const v1StudentRouter = require('./v1/routes/studentRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/v1/role/", v1RoleRouter);
app.use("/v1/professor/", v1ProfessorRouter);
app.use("/v1/student/", v1StudentRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to the MongoDB Atlas Cluster on CLOUD'))
    .catch((error) => console.error(error))