
import React, { useEffect, useState } from "react";

export default function Total({data}) {
    // const [data2, setData2] = useState([]);
    // console.log('data2',data2);
	// useEffect(() => {
	// 	getData();
	// }, []);

	// const getData = async () => {
    //     const data = await axios.get("http://localhost:3001/todos/").then(e=>console.log(e.data));
    //     setData2(data);
	// };
	return (
        <div style={{border:"1px solid black"}}>
            <h2>Pending Tasks</h2>
            {data.map((e) => {
                return (
                    <h3 key={e.id}>
                        {e.status===false?e.title:""}
                    </h3>
                )
            })}
		</div>
	);
}
