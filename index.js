const express = require('express');
const app = express();
const users = require("./MOCK_DATA.json")
const PORT = 8000;


//middleware plugin
app.use(express.urlencoded({extended: false}));


// routes
app.get("/api/users", (req, res) => {
    return res.json(users);
    //as we working with json so res.json
});

app.get("/api/users/:id", (req, res) =>{
    const id = Number(req.params.id);
    const user = user.find((user) => user.id === id);
    //find user which id is equal to given id
    return res.json(user);
})
app.post("/api/users", (req,res) =>{
    const body = req.body;
    console.log("Body", body);
    //create a new user

    return res.json({status:"pending"});
});

app.get("/users", (req, res) => {
    //return users in html doc
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
        </ul>
    `;
    res.send(html);

    //dispaly users asa a document


});

app.listen(PORT, () => console.log(`Server Start at PORT: ${PORT}`))