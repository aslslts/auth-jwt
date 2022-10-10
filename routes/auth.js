const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});


/**
 {
    "name": "John Doe",
    "email": "john@hotmoil.com",
    "password": "123456"
 }
 */

// router.get("/get", ());
// router.put("/put", () => { 

// });
// router.delete("/delete");

module.exports = router;