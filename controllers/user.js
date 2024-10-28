const Users = require("../models/user");

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await Users.findById(id);
    res.json(user);
};

const updateUserById = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await Users.findByIdAndUpdate(id, { ...body }, { new: true });
    res.json(result);
};

const patchUserById = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await Users.findByIdAndUpdate(id, { $set: { ...body } }, { new: true });
    res.json(result);
};

const deleteUserById = async (req, res) => {
    const id = req.params.id;
    await Users.findByIdAndDelete(id);
    res.json({ status: "deleted" });
};

const handleGetAllUsers = async (req, res) => {
    const result = await Users.find();
    res.json({ result });
};

const createUser = async (req, res) => {
    const body = req.body;
    await Users.create({ ...body });
    res.json({ status: "done" });
};

module.exports = { getUserById, updateUserById, patchUserById, deleteUserById, handleGetAllUsers, createUser };
