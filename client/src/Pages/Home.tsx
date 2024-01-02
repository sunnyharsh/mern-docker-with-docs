import React, { useEffect, useState } from "react";
import response from "../data/data.json";
import DataTable from "../Components/DataTable";
import UseForm from "../Components/UserForm";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([{}]);
    const [isUpdate, setIsUpdate] = useState(false);

    const [fieldValue, setFieldValue] = useState({ id: 0, name: "", age: "", salary: "" });

    const handleChange = (e: any) => {
        setFieldValue({ ...fieldValue, [e.target.name]: e.target.value });
    };

    // Api call
    useEffect(() => {
        setData(response);
    }, []);
    const resetForm = () => {
        setIsUpdate(false);
        setFieldValue({ id: 0, name: "", age: "", salary: "" });
    };
    const handleSubmitEventFire = () => {
        if (fieldValue.name && fieldValue.age && fieldValue.salary) {
            fieldValue.id = data.length + 1;
            setData([...data, fieldValue]);
            setFieldValue({ id: 0, name: "", age: "", salary: "" });
        }
    };
    const deleteEvent = (obj: any) => {
        const updatedObj = data.filter((item: any) => item.id !== obj.id);
        setData(updatedObj);
    };
    const editEvent = (obj: any) => {
        setIsUpdate(true);
        setFieldValue({ id: obj.id, name: obj.name, age: obj.age, salary: obj.salary });
    };
    const updateSubmit = () => {
        setData((data) => data.map((obj: any) => (obj.id == fieldValue.id ? fieldValue : obj)));
        resetForm();
    };
    const updateCancel = () => {
        resetForm();
    };
    return (
        <div>
            <div>
                <UseForm
                    handleSubmitEventFire={handleSubmitEventFire}
                    handleChange={handleChange}
                    updateCancel={updateCancel}
                    updateSubmit={updateSubmit}
                    fieldValue={fieldValue}
                    isUpdate={isUpdate}
                />
            </div>
            <div style={{ background: "#07b1ef", marginTop: "10px" }}>
                <DataTable data={data} deleteEvent={deleteEvent} editEvent={editEvent} />
            </div>
        </div>
    );
};

export default Home;
