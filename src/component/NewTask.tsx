import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import "../App.css";
import { addTodo, updateTodo } from '../app/action/action_creators';
import { RootState } from '../app/reducers';




interface IsUpdate {
    isUpdate: boolean,
    idx: string
}

const NewTask = ({ isUpdate, idx }: IsUpdate) => {
    const [isShowTodo, setIsShowTodo] = useState<Boolean>(true)
    const { todolists } = useSelector((state: RootState) => state.newtaskReducer);
    const dispatch = useDispatch();
    console.log(moment(Date.now()).format("DD MMM YYYY"));
    const initialValues: any = {
        id: new Date().getTime().toString(),
        title: '',
        description: '',
        date: moment(Date.now()).format("DD MMM YYYY"),
        priority: '',
        isShow: false
    }
    let value = initialValues;

    if (isUpdate) {
        console.log("id exist")
        value = todolists.find(item => item.id === idx);
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(2, 'Title is too short'),
    });
    const onsubmit = (values: Todo, actions: FormikHelpers<Todo>) => {
        setTimeout(() => {
            if (isUpdate) {
                console.log("update")
                dispatch(updateTodo({
                    id: values.id,
                    title: values.title,
                    description: values.description,
                    date: values.date,
                    priority: values.priority,
                    isShow: false,
                    checked: false
                }));
                setIsShowTodo(false);
                console.log("update done")
            } else {
                console.log("add")
                dispatch(addTodo({ ...values, id: new Date().getTime().toString(), checked: false }))
            }
            actions.setSubmitting(false);
            actions.resetForm();
        }, 1000);
    }
    return (
        <div>
            {isShowTodo &&
                <div className="container">
                    {isUpdate ? null : <h4 className="text-center mb-5">New Task</h4>}
                    <Formik
                        initialValues={value}
                        onSubmit={onsubmit}
                        validationSchema={validationSchema}
                    >
                        {(props: FormikProps<any>) => (
                            <Form>
                                <Field className='form-control mb-2' type="text" name="title" placeholder="Add new task..." />
                                <ErrorMessage name="title" component="div" className="input-feedback text-change" />
                                <div className="mb-3">
                                    <label style={{ fontWeight: "bold" }} htmlFor="description">Description</label>
                                    <Field className='form-control' as="textarea" name="description" placeholder="" />
                                </div>
                                <div className="d-flex flex-row mb-2 justify-content-between">
                                    <div className="ml-0">
                                        <label style={{ fontWeight: "bold" }} htmlFor="date">Due date</label>
                                        <Field name="date" type="date" className="form-control"   ></Field>
                                    </div>
                                    <div className="mr-0" >
                                        <label style={{ fontWeight: "bold" }} htmlFor="priority">Priority</label>
                                        <Field className="form-select mb-2" as="select" name="priority">
                                            <option value="normal">normal</option>
                                            <option value="low">low</option>
                                            <option value="high">high</option>
                                        </Field>
                                    </div>
                                </div>
                                <button style={{ backgroundColor: "#5cb85c", color: "white" }} className="button form-control mb-3 " type="submit">{isUpdate ? "Update" : "Add"}</button>
                            </Form>

                        )}
                    </Formik>
                </div>
            }
        </div >
    )
}

export default NewTask
