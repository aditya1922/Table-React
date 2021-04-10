import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Username", field: "username" },
      { title: "Email", field: "email" },
      { title: "Phone", field: "phone", type: "numeric" },
      { title: "Created Date", field: "createDate", type: "regex" }
    ],
    data: [
      {
        name: "Aditya",
        username: "aditya9095",
        email: "aditya@gmail.com",
        phone: "12345",
        createDate: "21/05/21"
      },
      {
        name: "Ravi",
        username: "ravi2021",
        email: "ravi123@gmail.com",
        phone: "23456",
        createDate: "09/04/21"
      }
    ]
  });

  return (
    <MaterialTable
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: "#00FF00"
        },
        title: {
          backgroundColor: "#00FF00"
        }
      }}
      title="My Customers"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
      showPaginationBottom={false}
    />
  );
}
