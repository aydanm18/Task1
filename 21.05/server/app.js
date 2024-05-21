const express = require('express')
const app = express()
var cors = require('cors')
bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const EatSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})
const EatModel = mongoose.model('Eats', EatSchema)
app.get('/eats', async (req, res) => {
    try {
        const users = await EatModel.find({})
        if (users.length > 0) {
            res.send(
                {
                    message: 'success',
                    data: users
                }
            )
        } else {
            res.send(
                {
                    message: 'data empty',
                    data: null
                }
            )
        }
    } catch {
        res.send(
            {
                message: error,
                error: true
            })
    }
})
app.get('/eats/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await EatModel.findById(id)
        if (user) {
            res.send(
                {
                    message: 'success',
                    data: user
                }
            )
        } else {
            res.send(
                {
                    message: 'data empty',
                    data: null
                }
            )
        }
    } catch {
        res.send(
            {
                message: error,
                error: true
            })
    }
})

app.delete('/eats/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await EatModel.findByIdAndDelete(id)

        res.send(
            {
                message: 'deleted',
                response: response
            }
        )


    }
    catch {
        res.send(
            {
                message: error,
                error: true
            })
    }
})

app.post('/eats', async (req, res) => {
  const newEat= new EatModel(req.body)
  await newEat.save();
  res.send(
    {
        message: 'posted',
        response: newEat
    }
)

})
mongoose.connect('mongodb+srv://aydan:aydan123@eat.hb61ngn.mongodb.net/eats?retryWrites=true&w=majority&appName=eat')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})