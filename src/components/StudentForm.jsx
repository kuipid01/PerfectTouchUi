import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppointmentFormContext } from "../contexts/AppointmentForm";
const StudentForm = () => {
  const [classChosen, setClassChosen] = useState([
    {
      class: "Basic 1",
      chosen: false,
    },
    {
      class: "Basic 2",
      chosen: false,
    },
    {
      class: "Basic 3",
      chosen: false,
    },
    {
      class: "Basic 4",
      chosen: false,
    },
    {
      class: "Basic 5",
      chosen: false,
    },
    {
      class: "JS 1",
      chosen: false,
    },
    {
      class: "JS2",
      chosen: false,
    },
    {
      class: "JS3",
      chosen: false,
    },
  ]);
  const { appoitmentFormOpen, setAppoitmentFormOpen } = useContext(
    AppointmentFormContext
  );

  const selectClass = (index) => {
    setClassChosen((arrBefore) => {
      const updatedArray = arrBefore.map((arr, i) => ({
        ...arr,
        chosen: i === index ? true : false,
      }));
      return updatedArray;
    });
  };
  return (
    <div className=" flex justify-center min-h-screen items-center w-full h-fit fixed top-0 py-5 md:py-10 opacity-90 z-50 bg-gray-900 ">
      <div className="w-[80%] relative flex md:flex-row flex-col gap-4 h-fit md:h-[500px] p-3 md:p-10 bg-white">
        <div className="md:w-[48%] w-full flex flex-col text-gray-900 justify-evenly h-full">
          <input
            type="text"
            className=" p-1 pl-3 py-2 outline-none border-b-2 border-gray-300 w-full"
            placeholder=" Students Firstname "
          />
          <input
            type="text"
            className=" p-1 pl-3 py-2 text-gray-900 outline-none border-b-2 border-gray-300 w-full"
            placeholder=" Students Last name "
          />
          <div className=" flex flex-col mt-4 px-3">
            <label className="text-gray-500 " htmlFor="date">
              Students Date of Birth
            </label>
            <input
              className="text-gray-900 w-full border"
              type="date"
              name="date"
              id="data"
            />
          </div>
          <input
            type="text"
            className=" mb-7 text-gray-900 mt-2 p-1 pl-3 py-2 outline-none border-b-2 border-gray-300 w-full"
            placeholder="Guardians Name "
          />

          <label className="text-gray-500  px-3" htmlFor="btn">
            Student class{" "}
          </label>
          <div className=" flex gap-3 items-center justify-center flex-wrap mt-5 ">
            {classChosen.map((classChose, index) => (
              <button
                className={` min-w-[100px] w-fit px-3 text-gray-700 py-2 border ${
                  classChose.chosen
                    ? "bg-orange-400 text-white border-grey-500 border"
                    : "bg-transparent text-gray border border-orange-500"
                } border-orange-400 transition-all`}
                onClick={() => selectClass(index)}
              >
                {classChose.class}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[48%] h-full border-l justify-between border-gray-700 flex flex-col items-center ">
          <div className=" w-full h-[90%] flex flex-col justify-center items-center">
            <Link>Assetsments page</Link>
            <small className=" mt-4 text-red-400">
              {" "}
              Make sure you pass the assetsments before payments
            </small>
          </div>
          <button className="w-full py-4 bg-orange-500 text-center text-gray-100">
            Make Payment Now
          </button>
        </div>
        <div
          onClick={() => setAppoitmentFormOpen(false)}
          className=" absolute top-0 right-2"
        >
          <small className="text-red-500 ">close</small>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
