import React from 'react'
import {
    List, 
    Datagrid,
    TextField,
    DeleteButton
} from 'react-admin'


const PostList=(props)=>{
    
    return (
        <List {...props}>
            <Datagrid>
            <TextField source='id'/>
                <TextField source='Name'/>
                <TextField source='Company'/>
                <TextField source='status'/>
                <TextField source='notes'/>
                <DeleteButton basePath='/posts'/>
            </Datagrid>
        </List>
    )
}
export default PostList
