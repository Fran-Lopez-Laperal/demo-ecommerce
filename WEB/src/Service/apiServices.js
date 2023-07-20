export const registerUserService = async (data) => {

    const response = await fetch('http://localhost:3000/users/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json)
    if (!response.ok) {
        throw new Error(json.message);
    }

}



export const loginUserService = async ({ email, password }) => {
    const response = await fetch(`http://localhost:3000/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};



export const getMyUserDataService = async (params) => {
    if (!params || typeof params !== 'object' || !params.token) {
        throw new Error('Se requiere un objeto con la propiedad "token" como parámetro');
    }

    const { token } = params;

    const response = await fetch(`http://localhost:3000/users`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    console.log(json);
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};


export const getProductsService = async () => {
    const response = await fetch(`http://localhost:3000/products`, {
        method: 'GET',
    });

    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.products
}

export const getProductFromCategory = async (param) => {
    const response = await fetch(`http://localhost:3000/products/category?category=${param}`, {
        method: 'GET'
    });

    const json = await response.json();
    console.log(json)
    if (!response.ok) {
        throw new Error(json.message)
    }
    return json
}

getProductFromCategory('montaña')
