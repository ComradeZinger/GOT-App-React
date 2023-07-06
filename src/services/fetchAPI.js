const getResource = async (url) => {
    const _apiBase = 'https://www.anapioficeandfire.com/api/characters',
          res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

const _transformCharacter = (char) => {
    return {
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture
    }
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