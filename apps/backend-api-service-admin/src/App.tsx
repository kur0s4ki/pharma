import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { MedicineList } from "./medicine/MedicineList";
import { MedicineCreate } from "./medicine/MedicineCreate";
import { MedicineEdit } from "./medicine/MedicineEdit";
import { MedicineShow } from "./medicine/MedicineShow";
import { PrescriptionList } from "./prescription/PrescriptionList";
import { PrescriptionCreate } from "./prescription/PrescriptionCreate";
import { PrescriptionEdit } from "./prescription/PrescriptionEdit";
import { PrescriptionShow } from "./prescription/PrescriptionShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { PharmacistList } from "./pharmacist/PharmacistList";
import { PharmacistCreate } from "./pharmacist/PharmacistCreate";
import { PharmacistEdit } from "./pharmacist/PharmacistEdit";
import { PharmacistShow } from "./pharmacist/PharmacistShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Backend API Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Medicine"
          list={MedicineList}
          edit={MedicineEdit}
          create={MedicineCreate}
          show={MedicineShow}
        />
        <Resource
          name="Prescription"
          list={PrescriptionList}
          edit={PrescriptionEdit}
          create={PrescriptionCreate}
          show={PrescriptionShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Pharmacist"
          list={PharmacistList}
          edit={PharmacistEdit}
          create={PharmacistCreate}
          show={PharmacistShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
