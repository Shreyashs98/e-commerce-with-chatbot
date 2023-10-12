export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter) {
// filter = {"category":["smartphones","laptops"]}
//sort={_sort:"price",_order="desc"}

//TODO: on server will support multivalues

let queryString ='';
for(let key in filter ){
  queryString += `${key}=${filter[key]}&`

}
  



  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
  }
  );
}

