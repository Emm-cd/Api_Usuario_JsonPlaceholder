import axios from "axios";
async function getUni() {
    const url="http://universities.hipolabs.com/search?country=Mexico"
    const universi = await axios.get(url);
    //console.log(universidades.data);
    return universi.data;
}

export default async function Usuario({params}){
    const universidad = await getUni();
    return(
        <>
        <h1>Estas en universidades</h1>
        <p>{params.id}</p>
        </>
    );
}