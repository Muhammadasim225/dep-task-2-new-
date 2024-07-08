const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
const commentsRoutes = require('./routes/commentRoutes');
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.use('/comments', commentsRoutes);

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);

})

