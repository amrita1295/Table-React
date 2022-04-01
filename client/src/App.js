import React from "react";
import { Admin, Resource } from "react-admin";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostList1 from "./components/Post";
import restProvider from 'ra-data-simple-rest';
function App(){

  return(
    
    <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource
    name='posts'
    filter={PostList1}
    list={PostList}
    create={PostCreate}
    />
    </Admin>
  )
}
export default App;