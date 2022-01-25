const User = require('../models/user.model')

// const User = new mongoose.model("user",userSchema);
// const reactUser = new user({
//         fname,
//         lname,
//         email,
//         phone,
//         description,
//         // Active:true,

// })



exports.createUser = async (req, res) => {
    try {
      let { fname, lname, email,phone, description } = req.body;
      console.log(req.body);
      let dbUser = await User.create({
        fname,
        lname,
        email,
        phone,
        description,
      });
      return res.status(201).json({ data: dbUser })
    } catch (error) {
      console.log(error.message);
    }
  }

