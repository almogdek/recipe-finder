import axios from 'axios';

export function getRecipeByQuery(query) {
    return (axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
            apiKey: 'aa5302b33d9e46a38804f77f0ab976ce',
            number: 2,
            query: query,
        }
    })
    .then(response => {
        if(response.status === 200 && response.data.totalResults) {
            return response.data;
        }
        else {
            throw new Error('Failed to fetch recipes');
        }
    })
    .then(data => {
        return {
            status: 1,
            data: data,
        }
    })
    .catch(error => {
        console.log(error)


        return {
            status: 0,
            data: [error],
        }
    })

    )}
export function getFullDescription(id) {
    return (axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`)
    .then(response => {
        if(response.status === 200 && response.data.totalResults) {
            return response.data;
        }
        else {
            throw new Error('Failed to fetch recipes');
        }
    })
    .then(data => {
        return {
            status: 1,
            data: data,
        }
    })
        .catch(error => {
            return {
                status: 0,
                data: [error],
            }
        })
    )
}