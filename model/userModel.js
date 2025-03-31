import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    salt: String,
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// adminSchema.methods.toJSON = function () {
//   let obj = this.toObject();
//   delete obj.password;
//   return obj;
// };

export const userModel = mongoose.model("users", userSchema);

export const userModelAction = {
  getAdmin: async (req, res) => {
    const { email } = req.body;
    const user = await adminModel.findOne({ email });

    return user;
  },
  createAdmin: async (req, res) => {
    const user = req.body;
    await userModel.create(user);

    return user;
  },
};
