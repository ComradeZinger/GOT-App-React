const getResource = async (url) => {
    const _apiBase = 'https://www.anapioficeandfire.com/api/characters',
          res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

const _transformCharacter = (char) => {
    const obj = {
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture
    }

    let newObj = {};
    for (let key in obj) {
        if (obj[key]) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

const getAllCharacters = async (url = "") => {
    const res = await getResource('?page=5&pageSize=10');
    return res.map(_transformCharacter)
}

const getCharacter = async (url) => {
    const res = await getResource(`/${url}`);
    return _transformCharacter(res)
}


export {getCharacter, getAllCharacters}; 