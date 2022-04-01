import  React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const PostCreate = (props)=>{
    return (
        <Create title ='Add Members'{...props}>
            <SimpleForm>
                <TextInput source='Name'/>
                <TextInput source='Company'/>
                <TextInput source='status'/>
                <TextInput multiline source='notes'/>
            </SimpleForm>
        </Create>
    )
}
export default PostCreate