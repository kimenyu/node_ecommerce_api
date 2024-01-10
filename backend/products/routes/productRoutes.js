const { Router } = require('express');
const productsController = require("../controllers/productsController");
const router = Router();


router.post("/api/vi/products/create", productsController.createProducts);
router.get("/api/v1/products", productsController.getProducts);
router.get("/api/v1/products/:id", productsController.getProductById);
router.put("/api/v1/products/update/:id", productsController.updateProductById);
router.delete("/api/v1/products/delete/:id", productsController.deleteProductById);

module.exports = router;