import usersModel from "../Models/usersModel.js";

const UsersController = {

    getEnteries: (req, res) => {

    },
    
    addUser: async (req, res) => {
        const { name,email } = req.body;
        try {
            const newUser = await usersModel.create({ name, email });//חדש הוספת
            res.json(newUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await usersModel.findByIdAndDelete(id);//מזהה לפי מחיקה
            res.json(deleted);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
};
export default UsersController;