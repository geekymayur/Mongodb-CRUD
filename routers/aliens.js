const express = require('express');

const router = express.Router();
const Alien = require('../models/alien');

router.get("/", async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.send(aliens);
    } catch (error) {
        res.send("Error" + error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.send(alien);
    } catch (error) {
        res.send("Error" + error);
    }
})


router.post("/", async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try {
        const a1 = await alien.save();
        res.json(a1);
    } catch (error) {
        req.send("Eror");
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.name = req.body.name;
        const a1 = await alien.save();
        res.json(a1);
    } catch (error) {
        res.send("Error");
    }
})

router.delete("/:id",async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.name = req.body.name;
        const a1 = await alien.deleteOne();
        res.json(a1);
    } catch (error) {
        res.send("Error");
    }
})

module.exports = router;