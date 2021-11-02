const express = require('express');
const port = 5000;
const app = express();

const things = [
    {id: 1, name: "Socks", category: "JS"},
    {id: 2, name: "Plop", category: "PHP"},
    {id: 3, name: "Plopinette", category: "JS"},
    {id: 4, name: "Coucou", category: "PHP"},
    {id: 5, name: "Adios", category: "JS"},
    {id: 6, name: "Robyn", category: "PHP"},
    {id: 7, name: "Dodo", category: "JS"},
    {id: 8, name: "Simba", category: "PHP"},
    {id: 9, name: "Aladdin", category: "JS"},
    {id: 10, name: "Gaby", category: "PHP"},
    {id: 11, name: "Ely", category: "JS"},
    {id: 12, name: "Hello", category: "PHP"},
]

app.get('/things', (req, res) => {
    const category = req.query.category;
    const limit = parseInt(req.query.limit);
    if (limit && limit > 1) {
        if (category) {
            const thingsByCategory = things.filter(thing => thing.category === category);
            const result = thingsByCategory.slice(0, limit);
            res.send(result)
        } else {
            res.send(things.slice(0, limit));
        }
    } else {
        if (category) {
            const thingsByCategory = things.filter(thing => thing.category === category);
            const result = thingsByCategory.slice(0, 10);
            res.send(result)
        } else {
            const result = things.slice(0, 10);
            res.send(result)
        }
    }
})

app.get('/things/:id', (req, res) => {
    const idThings = parseInt(req.params.id);
    const result = things.find(thing => thing.id === idThings);
    if (result) {
        res.send(result);
    } else {
        res.sendStatus(404);
    }
})

app.listen(port, () => console.log('Express server is running'));