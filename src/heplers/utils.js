
export const filterFunction = (
  brandList,
  modelList,
  searchList,
  productList,
  sortParam = 0
) => {


  let tempArr = [...productList];
  let filteredWithBrandArr = [];
  let filteredWithModelArr = [];
  let filteredWithQueryArr = [];
  let sortedArr = [];
  if (productList.length === 0) {
    return null;
  }
  //Brand Filter
  if (brandList.length > 0) {
    const filteredArr = tempArr.filter((product) =>
      brandList.includes(product.brand)
    );
    filteredWithBrandArr = filteredArr;
  } else {
    filteredWithBrandArr = [...productList];
  }
 
  if (filteredWithBrandArr.length === 0) {
    return null;
  }
  //modal Filter
  if (modelList.length > 0) {
    const filteredArr = filteredWithBrandArr.filter((product) =>
      modelList.includes(product.model)
    );
    filteredWithModelArr = filteredArr;
  } else {
    filteredWithModelArr = [...filteredWithBrandArr];
  }

  if (filteredWithModelArr.length === 0) {
    return null;
  }
  //search Filter
  if (searchList.length > 1) {
    const filteredArrSecond = filteredWithModelArr.filter((product) =>
      product.name.toUpperCase().includes(searchList.toUpperCase())
    );
    filteredWithQueryArr = filteredArrSecond;
  } else if (searchList.length <= 1) {
    filteredWithQueryArr = [...filteredWithModelArr];
  }

  if (filteredWithQueryArr.length === 0) {
    return null;
  }
  //sort
  let tempArrSecond = [...filteredWithQueryArr];
  if (sortParam === 0) {
    sortedArr = [...filteredWithQueryArr];
  } else if (sortParam === 1) {
    sortedArr = tempArrSecond.sort((productA, productB) =>
      productA.createAt < productB.createAt ? 1 : -1
    );
  } else if (sortParam === 2) {
    sortedArr = tempArrSecond.sort((productA, productB) =>
      productA.createAt > productB.createAt ? 1 : -1
    );
  } else if (sortParam === 3) {
    sortedArr = tempArrSecond.sort((productA, productB) =>
      +productA.price < +productB.price ? 1 : -1
    );
  } else if (sortParam === 4) {
    sortedArr = tempArrSecond.sort((productA, productB) =>
      +productA.price > +productB.price ? 1 : -1
    );
  } else {
    sortedArr = [...filteredWithQueryArr];
  }

  return sortedArr;
};


