import  React from 'react'
import {List,TextInput} from 'react-admin'

const PostFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const PostList1 = (props) => {
    return (
    <List {...props} filters={PostFilters}>
        ...
    </List>
    )
}

export default PostList1