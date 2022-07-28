const baseUrl = 'https://mockend.com/NickGoodwind/tbbc-crud-test';
const get = (obj) => {
    return Object.keys(obj)
}

const dataFetch = async (method,model,params={}) => {
    let query = baseUrl + '/' + model;
    let list = get(params);
    if(params && list.length > 0) {
        query += '?limit=20&';
        list.forEach((key) => {
            query += key + '=' + params[key] + '&';
        });
        query = query.slice(0,-1);
    }
    console.log(query);
    const response = await fetch(query, {method:method});
    const data = await response.json();
    return data;
}

export {dataFetch, get};