import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDeleteEatMutation, useGetAllQuery, usePostEatMutation } from '../../services/eatApi';
import * as Yup from 'yup';
import { Table } from 'antd';



const AddPage = () => {
    const [postEats] = usePostEatMutation();
    const { data, error, isLoading, refetch } = useGetAllQuery();
    const [deleteEats] = useDeleteEatMutation();
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .required('Required'),
        description: Yup.string()
            .required('Required'),
        image: Yup.string().url().required('Required'),
        price: Yup.number().required('Required'),
    });
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: '',
            price: ''
        },
        onSubmit: async (values, actions) => {
            await postEats(values);
            actions.resetForm()
        },
        validationSchema: SignupSchema
    });
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            showSorterTooltip: {
                target: 'full-header',
            },
        },
        {
            title: 'Description',
            dataIndex: 'description',

        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'imagerice',
            render: (text, record) => {
                return <img src={record.image} width={60} alt="" />
            }
        },
        {
            title: 'Delete',
            render: (record) => {
                return <Button onClick={() => {
                    deleteEats(record._id)
                    refetch()
                }} variant="outlined" color="error">
                    Delete
                </Button>
            }
        }
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit} style={{ flexDirection: 'column', display: 'flex', gap: '10px', marginTop: '50px' }}>

                <TextField

                    id="outlined-required"
                    label="Title"
                    defaultValue="Hello World"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.title && formik.touched.title && <div id="feedback">{formik.errors.title}</div>}
                <TextField

                    id="outlined-required"
                    label="Description"
                    defaultValue="Hello World"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                {formik.errors.description && formik.touched.description && <div id="feedback">{formik.errors.description}</div>}
                <TextField

                    id="outlined-required"
                    label="Image"
                    defaultValue="Hello World"
                    name="image"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                {formik.errors.image && formik.touched.image && <div id="feedback">{formik.errors.image}</div>}
                <TextField

                    id="outlined-required"
                    label="Price"
                    defaultValue="Hello World"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                {formik.errors.price && formik.touched.price && <div id="feedback">{formik.errors.price}</div>}
                <Button type='submit' variant="contained">Contained</Button>
            </form>
            <Table
                columns={columns}
                dataSource={data?.data}
                onChange={onChange}
                showSorterTooltip={{
                    target: 'sorter-icon',
                }}
                style={{ paddingTop: '50px' }}
            />
        </div>
    );
};
export default AddPage