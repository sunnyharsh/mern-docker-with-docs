import React from "react";

interface dataPropI {
    data?: any;
    deleteEvent?: any;
    editEvent?: any;
}

const DataTable = (props: dataPropI) => {
    const { data, deleteEvent, editEvent } = props;
    return (
        <>
            {data?.map((obj: any, index: number) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        textAlign: "left",
                        border: "1px solid grey",
                    }}
                >
                    <div style={{ flex: 1, padding: "10px 10px", color: "#fff" }}>{obj.name}</div>
                    <div style={{ flex: 1, padding: "10px 10px", color: "#fff" }}>{obj.age}</div>
                    <div style={{ flex: 1, padding: "10px 10px", color: "#fff" }}>{obj.salary}</div>
                    <div style={{ flex: 1, padding: "10px 10px", color: "#fff" }}>
                        <button onClick={() => editEvent(obj)}>Edit</button>
                    </div>
                    <div style={{ flex: 1, padding: "10px 10px", color: "#fff" }}>
                        {" "}
                        <button onClick={() => deleteEvent(obj)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DataTable;
