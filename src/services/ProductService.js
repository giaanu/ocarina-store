const BASE_URL = "/data/products.json"
const LIMIT_PAGE = 12;

export const getAllProducts = async (pageNumber) => {

    try {

        const response = await fetch(BASE_URL);

        if (!response.ok)
            throw new Error("[ERROR] - Error al intentar obtener los productso - Status Code: ${response.status}");

        const data = await response.json();

        const listInit = (pageNumber - 1) * LIMIT_PAGE;

        return data.slice(listInit, listInit+LIMIT_PAGE);
    }
    
    catch(error){
        console.log(error);
    }
}

export const getProductById = async (id) => {

    try {

        const response = await fetch(BASE_URL);

        if (!response.ok){
            throw new Error('[ERROR] - Error al intentar obtener el producto id: ${id} - Status Code: ${response.status}');

            const data = await response.json();

            return data.find((x) => x.id == id);
        }
    }
    catch(error) {
        console.log(error);
    }
}