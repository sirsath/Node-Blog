import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogAction } from "../../Redux/BlogAction";

export default function Home() {
  const dispatch = useDispatch();
  const { getBlog, totalBlogs } = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(0);
  console.log("currentPage", currentPage)
  const [perpage, setPerpage] = useState(1);

  useEffect(() => {
    dispatch(getBlogAction({ perpage, currentPage }));
  }, [perpage, currentPage]);

  const [totalBtn, setTotalBtn] = useState(0);

  useEffect(() => {
    totalBlogs && setTotalBtn(Math.ceil(totalBlogs / perpage));
  }, [totalBlogs, perpage ]) 

  console.log("btn", totalBtn);
  return (
    <>
      {/* <h1>
        Showing {currentPage + 1 * totalBtn} of {totalBlogs}
      </h1> */}
      <div className="container bg-black">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">

       
        <select
          onChange={(e) => setPerpage(e.target.value)}
          class="form-select m-3"
        >
          <option selected>Open this select menu</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalBtn={totalBtn}
        />
        {getBlog && getBlog.map((item) => <BlogCard blogs={item} />)}
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalBtn={totalBtn}
        />
           </div>
        </div>
      </div>
    </>
  );
}
function BlogCard({ blogs }) {
  return (
    <>
      <div class="card mt-4">
        <img src={`http://localhost:5000/${blogs.heroImage}`} alt="" />

        <div class="card-body">
          <h1>{blogs.title}</h1>
          <h1>{blogs.desc}</h1>
          <Link to={`/blog-details/${blogs._id}`}>show details</Link>
        </div>
      </div>
    </>
  );
}
function Paginate({ setCurrentPage, currentPage, totalBtn }) {
  return <>

      <nav >
          <ul class="pagination m-3">
              {
                  currentPage !== 0 && <li li onClick={e => setCurrentPage(currentPage === 0 ? 0 : currentPage - 1)} class="page-item"><a class="page-link" href="#">Previous</a></li>
              }
              {
                  [...Array(totalBtn).keys()].map((item, index) => <li onClick={e => setCurrentPage(item)} class="page-item"><a class="page-link" href="#">{index + 1}</a></li>)
              }
              {

                  (currentPage + 1) !== totalBtn && <li onClick={e => setCurrentPage((currentPage + 1) === totalBtn ? currentPage : currentPage + 1)} class="page-item"><a class="page-link" href="#">Next</a></li>
              }
          </ul>
      </nav>
    </>
}