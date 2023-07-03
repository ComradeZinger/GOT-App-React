const GetResource = async (url) => {
    const _apiBase = 'https://www.anapioficeandfire.com/api/characters',
          res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

const getAllCharacters = (url) => {
    return GetResource(url)
}

const getCharacter = (url) => {
    return GetResource(url)
}

export {getAllCharacters, getCharacter}; 