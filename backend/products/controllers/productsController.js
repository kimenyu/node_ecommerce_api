const Product = require("../models/productModel");

module.exports.createProducts = async(req, res) => {
    try {
        const { name, description, price, image, category, quantity} = req.body;

        const newProduct = await Product.create({
        name,
        description,
        price,
        image,
        category,
        quantity
        });

        res.send(newProduct);
        console.log(newProduct)

    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
}

module.exports.getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
        console.log(products);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
}

module.exports.getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const findProduct = await Product.findOne({_id: id});

      if(findProduct) {
        res.json(findProduct);
        console.log(findProduct);
      } else {
        response.status(404).send("Product not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  

module.exports.updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image, category, quantity } = req.body;

    // Check if the provided data is different from the existing values
    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      return res.status(404).send("Product not found");
    }

    if (
      name === existingProduct.name &&
      description === existingProduct.description &&
      price === existingProduct.price &&
      image === existingProduct.image &&
      category === existingProduct.category &&
      quantity === existingProduct.quantity
    ) {
      return res.status(200).send("No changes applied");
    }

    // Update the product
    const updateResult = await Product.updateOne(
      { _id: id },
      { $set: { name, description, price, image, category, quantity } }
    );

    if (updateResult.n > 0) {
      console.log('Product updated successfully');
      res.status(204).send("Product updatd successfully");
    } else {
      console.log('No changes applied or product not found');
      res.status(404).send("Post not found or no changes applied");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

  
module.exports.deleteProductById = async (req, res) => {
    try {
        const { id  } = req.params;
        const deletedProduct = await Product.deleteOne({_id: id});
        
        if(deletedProduct.deletedCount > 0) {
            console.log('Product has been deleted successfully');
            res.sendStatus(204);
        }else{
            response.status(404).send("Product not found");
        }
    } catch (error) {
        
    }
}