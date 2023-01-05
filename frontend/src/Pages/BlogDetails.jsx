import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleBlogAction } from '../../Redux/BlogAction'

export default function BlogDetails() {
 const {singleBlog}= useSelector(state => state.blog)
const dispatch = useDispatch()
const {id} = useParams()

   useEffect(() => {
     
   
    dispatch(getSingleBlogAction(id))

   }, [])
   console.log(singleBlog.auther.name);
  return <>
  
   {
    singleBlog && <div className="conatainer">
    <div className="row">
      <div className="col-sm-8 offset-sm-2">
        <div class="card">
        <img src={`http://localhost:5000/${singleBlog.heroImage}`} alt={singleBlog.title} />
          <div class="card-body">
             <h1>{singleBlog.title}</h1>
             <p>{singleBlog.desc}</p>
             <hr />
             {/* <h1>Auther : <strong>{singleBlog.auther.name}</strong></h1> */}
          </div>
        </div>

      </div>
    </div>
  </div>
   }
  </>
}
