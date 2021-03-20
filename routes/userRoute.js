import express from 'express';
import expressAsync from 'express-async-handler'
import User from '../model/userModel.js';

const userRoute = express.Router();

// get all user 
userRoute.get('/', expressAsync( async(req, res)=> {
    const allUser = await User.find({})
    res.send(allUser)
}))

// creating new user
userRoute.post('/', expressAsync( async(req, res)=> {
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        availability: req.body.availability
    })
    const createdUser = await user.save(user)
    const allUser = await User.find({})
    res.send(createdUser)
}))

// deleting a user 
userRoute.delete('/:id', expressAsync( async(req, res)=> {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndRemove({_id: id})
    res.send(deletedUser)
}))


export default userRoute;