const express = require("express");
const cors = require("cors");
const app = express();
let port = 3002;
const { v4: uuidv4 } = require('uuid');

app.use(cors()); // CORS middleware use karein

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let data = []; // Initial data array

// Get all data
app.get("/data", (req, res) => {
    res.send(data);
});

// Add new data
app.post("/add", (req, res) => {
    const { name, text } = req.body;
    console.log(`Data received: Name: ${name}, Text: ${text}`);
    data.push({ name: name, text: text, id: uuidv4() });
    res.status(200).send({ message: "Data received successfully" });
});

// Delete data by ID
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params; // Params se id lena
    console.log("Deleting item with id:", id);
    
    // Filter se item ko remove karna aur data array ko update karna
    data = data.filter((e) => e.id !== id); 

    res.status(200).send({ message: "Item deleted successfully" });
});

app.patch("/update/:id", (req, res) => {
    const userid = req.params.id;  // Extract 'id' from params
    console.log(userid); // Corrected: Print the userid variable
    let {name,text}=req.body;
    console.log({name,text});

   data= data.map((e)=>{
        if(e.id == userid){
            e.name=name;
            e.text=text;
        }
        return e;
    })
    
    // Update logic ko yahan implement kar sakte hain
    
    res.status(200).send({ message: "Item updated successfully" });
});

app.get("/reade/:id",(req,res)=>{
    let userid=req.params.id;
    data.map((e)=>{
        if (e.id == userid){
          res.send({name:e.name,text:e.text})
        }
    })
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
