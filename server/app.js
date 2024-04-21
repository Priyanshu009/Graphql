const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose');
const cors=require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

// const connectDB=require('./db/connect');

uri="mongodb+srv://Priyanshu:Priyanshu09@graphqldata.tefcp3a.mongodb.net/GraphQLData?retryWrites=true&w=majority&appName=GraphQLData";
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
mongoose.connection.once('open', ()=>{
    console.log("connected to database");
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log("now listening for requests on port 4000");
})


// const start=async()=>{
//     await connectDB();
//     app.listen(4000,()=>{
//         console.log("now listening for requests on port 4000");
//     })
// };
// start();
