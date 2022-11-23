import React, { useEffect } from "react";
import { connect, useDispatch, useStore } from "react-redux";
import {
  addEmployeeAction,
  deleteEmployeeAction,
  downloadEmployeesAction,
} from "../actions";
import { getAllEmployeesDB } from "../apiCalls";

let Employees = ({}) => {
  const store = useStore();
  const { employees, loading } = store.getState();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => await downloadEmployeesAction())();
  }, []);

  let emp = {
    name: "Bekalu Aleme",
    birthDate: "11/22/2022",
    gender: "Male",
    salary: "123456",
  };

  if (loading) return <div>loading...</div>;
  return employees && !loading ? (
    <div>
      <button onClick={() => addEmployeeAction(emp)}>ADD</button>
      <button>Refresh</button>
      {employees.map((i: any) => {
        return (
          <div
            key={i._id}
            style={{
              marginBottom: 10,
              display: "flex",
              gap: 10,
            }}
          >
            <p>
              <strong>Name:</strong> {i.name}
            </p>
            <p>
              <strong>BirthDate:</strong> {new Date(i.birthDate).toDateString()}
            </p>
            <p>
              <strong>Gender:</strong> {i.gender}
            </p>
            <p>
              <strong>Salary:</strong> {i.salary}
            </p>
            <button onClick={() => deleteEmployeeAction(i._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  employees: state.employees,
  loading: state.loading,
});

const mapDispatchToProps = {
  getEmployees: getAllEmployeesDB,
};

Employees = connect(mapStateToProps, mapDispatchToProps)(Employees);

export default Employees;
