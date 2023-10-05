// import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from 'react';

const Usuarios = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ]);
  return (
    <div className="card">
      <DataTable value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
      </DataTable>
    </div>
  );
}

export default Usuarios