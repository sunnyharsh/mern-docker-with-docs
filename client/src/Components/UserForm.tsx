import React, { useState } from "react";

const UseForm = (props: any) => {
    const { handleSubmitEventFire, handleChange, fieldValue, isUpdate, updateCancel, updateSubmit } = props;

    const handleSubmit = () => {
        handleSubmitEventFire();
    };
    return (
        <div>
            <h3>add your data in forms</h3>
            {isUpdate && (
                <div>
                    <input
                        value={isUpdate ? fieldValue.id : ""}
                        name="name"
                        placeholder="enter your name"
                        className="inputField"
                        disabled={isUpdate ? true : false}
                    />
                </div>
            )}
            <div>
                <input
                    value={fieldValue.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="enter name"
                    className="inputField"
                />
            </div>
            <div>
                <input
                    value={fieldValue.age}
                    onChange={handleChange}
                    name="age"
                    placeholder="enter age"
                    className="inputField"
                />
            </div>
            <div>
                <input
                    value={fieldValue.salary}
                    onChange={handleChange}
                    name="salary"
                    placeholder="enter salary"
                    className="inputField"
                />
            </div>
            <div className="btnContainer">
                {!isUpdate && (
                    <div>
                        <button
                            className={`btnStyle ${isUpdate ? "submitBtnGrey" : "submitBtn"}`}
                            onClick={handleSubmit}
                            disabled={isUpdate}
                        >
                            Submit
                        </button>
                    </div>
                )}
                {isUpdate && (
                    <>
                        <div>
                            <button className="btnStyle updateBtn" onClick={updateSubmit}>
                                Update
                            </button>
                        </div>

                        <div>
                            <button className="btnStyle updateCancel" onClick={updateCancel}>
                                Edit cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
            <style>
                {`
                    .inputField {
                        width: 332px;
                        margin: 5px 0px;
                        height: 37px;
                        border-radius: 10px;
                    }
                    .btnContainer{
                        justify-content: center;
                        display: flex;
                        margin: 10px 0px;
                    }
                   .btnStyle{
                        width: 100px;
                        height: 40px;
                        border-radius: 10px;
                        margin: 0px 15px 0px 0px;
                   }
                   .submitBtn{
                        background: #417ad6;
                        border: #417ad6;
                        outline: #417ad6;
                        color: #fff;
                        font-weight: bold;
                   }
                   .submitBtnGrey{
                        background: #adadad;
                        border: #adadad;
                        outline: #adadad;
                        color: #fff;
                        font-weight: bold;
                        pointer-events:none;
                   }
                   .updateBtn{
                        background: #18f118;
                        border: #18f118;
                        outline: #18f118;
                        color: #000;
                        font-weight: bold;
                   }
                   .updateCancel{
                     background: red;
                        border: red;
                        outline: red;
                        color: #fff;
                        font-weight: bold;
                   }
                `}
            </style>
        </div>
    );
};
export default UseForm;
