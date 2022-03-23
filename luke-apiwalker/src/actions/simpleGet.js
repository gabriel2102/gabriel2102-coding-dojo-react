export async function getResponse(url){
    try{
        const apiResponse = await fetch(url).then((response)=>response.json());
        return apiResponse;
    }catch(error){
        return {error:"Se ha producido un error"+error}
    }
}
export async function getSinglePeople(id){
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`).then((response)=>response.json());
        return response;
    } catch (error) {
        return {error: error}
    }
}