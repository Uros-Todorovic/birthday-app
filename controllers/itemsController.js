/**
 *
 * Async functions because of communication with database 
 * 
**/

// Controller for adding Item that will be used in the user wishlist or as a present item
const addItem = async (req, res) => {
    res.status(200).send('Add item');
};

// Controller for deleting Item that will be used in the user wishlist or as a present item
const deleteItem = async (req, res) => {
    res.status(200).send('Delete item');
};

export {addItem, deleteItem};