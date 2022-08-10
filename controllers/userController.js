/**
 *
 * Async functions because of communication with database 
 * 
**/

// Controller for register user.
const register = async (req, res) => {
    res.status(200).send('Register user');
};

// Controller for adding items to wishlist of the user. 
const addItemToWishList = async (req, res) => {
    res.status(200).send('Add items to wishlist');
};

// Controller for fetching list of all users to see upcoming birthdays. 
const listOfAllUsers = async (req, res) => {
    res.status(200).send('Fetch list of all users');
};


export {register, addItemToWishList, listOfAllUsers};