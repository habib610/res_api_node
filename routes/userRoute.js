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

// updating user information 
userRoute.put('/:id', expressAsync( async(req, res)=> {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate({_id: id}, req.body)
    const sendUpdateUser = await User.findOne({_id: id})
    res.send(sendUpdateUser)
}))

// // updating user alternate method
// userRoute.put(
//     '/profile',
//     isAuth,
//     expressAsyncHandler(async (req, res) => {
//       const user = await User.findById(req.user._id);
//       if (user) {
//         user.name = req.body.name || user.name;
//         user.email = req.body.email || user.email; }
//         const updatedUser = await user.save();
//         res.send({
//           _id: updatedUser._id,
//           name: updatedUser.name,
//           email: updatedUser.email,
//           isAdmin: updatedUser.isAdmin,
//         });
//       }
//     })
//   );


// deleting a user 
userRoute.delete('/:id', expressAsync( async(req, res)=> {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndRemove({_id: id})
    res.send(deletedUser)
}))


export default userRoute;