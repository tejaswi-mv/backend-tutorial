const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

// Route to create a new item (POST /api/items)
router.post('/', itemController.createItem);

// Route to get all items (GET /api/items)
router.get('/', itemController.getAllItems);

// Route to get a single item by ID (GET /api/items/:id)
router.get('/:id', itemController.getItemById);

// Route to update an item by ID (PUT /api/items/:id)
router.put('/:id', itemController.updateItem);

// Route to delete an item by ID (DELETE /api/items/:id)
router.delete('/:id', itemController.deleteItem);

module.exports = router;