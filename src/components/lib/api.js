const FIREBASE_DOMAIN = "https://ejada1-46346-default-rtdb.firebaseio.com";

export const getAllProducts = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedProduct = [];

  for (const key in data) {
    const ProductObj = {
      ...data[key],
      id: key,
    };

    transformedProduct.push(ProductObj);
  }
  return transformedProduct;
};

export const addProduct = async (productData) => {
  console.log(productData);
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create product.");
  }

  return null;
};

export const updateProduct = async (productData) => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/products/${productData.id}.json`,
    {
      method: "PUT",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update product.");
  }

  return null;
};

export const removeProduct = async (productId) => {
  console.log(productId);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/products/${productId}.json`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete product.");
  }

  return null;
};
