const express = require('express');
const router = express.Router();
const { getUserById, updateUserById, patchUserById, deleteUserById, handleGetAllUsers, createUser } = require('../controllers/user');

router.route("/:id")
    .get(getUserById)
    .put(updateUserById)
    .patch(patchUserById)
    .delete(deleteUserById);

router.route("/")
    .post(createUser)
    .get(handleGetAllUsers);

module.exports = router;
