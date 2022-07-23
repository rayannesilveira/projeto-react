async function  loadProducts(){
  const productsResponse = await fetch('http://143.110.146.4:3131/theme/1/type/1');

  const [products] = await Promise.all([productsResponse]);

  const productsJson = await products.json();

  return productsJson;

}

export { loadProducts };