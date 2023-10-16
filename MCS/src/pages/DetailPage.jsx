import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommend from "../components/Recommend";


function DetailPage() {
    const { id } = useParams();
    console.log(id, 'id');
    // usestate
    const [ca, setdetail] = useState({})
    console.log(ca, 'ca')

    // useEffect
    useEffect(() => {
        fetch(`http://localhost:3000/CA?id=${id}`)
            .then((res) => res.json())
            .then((data) => setdetail(data[0]))
    }, [])

    return (
        <>
            <div>
                <h1>{ca.name}</h1>
                <img src={`${ca.image}`} alt={ca.name} />
            </div>
            <Recommend /></>
    )
}
export default DetailPage;