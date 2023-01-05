import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, getBlogAction } from '../../Redux/BlogAction'

export const AddBlog = () => {
    const [image, setimage] = useState()
    const {getBlog} = useSelector(state => state.blog)
    const {login} = useSelector(state => state.auth)
    console.log(login.id)
    console.log("GetData" , getBlog) 
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: "BLOG 1",
            desc: "Blog 1 description",
            auther: "63b2b63655e541e187d99c88",
            
        },
        validationSchema: yup.object({
            title: yup
                .string()
                .required('Required'),
            desc: yup.string()
                .required('Required'),
           
          
        }),
        onSubmit: values => {
            const fd = new FormData()
             fd.append("title" , values.title)
             fd.append("desc" , values.desc)
             fd.append("auther" , login.id)
             fd.append("heroImage" , image)
            console.log("values", values)

            dispatch(addBlog(fd))
        }
    }) 

    useEffect(() => {
       dispatch(getBlogAction())
    }, [])
    
    return (<>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todo</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label for="title" class="form-label">First Title</label>
                                    <input
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`form-control ${formik.errors.title && formik.touched.title && "is-invalid"}`}
                                        type="text"
                                        id="title"
                                        placeholder="Enter Your title"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please add task.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="desc" class="form-label">Description</label>
                                    <input
                                        value={formik.values.desc}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`form-control ${formik.errors.desc && formik.touched.desc && "is-invalid"}`}
                                        type="text"
                                        id="desc"
                                        placeholder="Enter task description"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please add description</div>
                                </div>
                                <div class="mt-2">
                                    <label for="file" class="form-label">Image</label>
                                    <input
                                        onChange={e=> {setimage(e.target.files[0])}}
                                        className="form-control"
                                        type="file"
                                        id="heroImage"
                                        placeholder="Enter task Image"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please add description</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Add Todo
                                </button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        

  
       
  </>
)
}