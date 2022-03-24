import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Error from "./Error";

function Blogs(data) {
  let urlName = useParams();
  console.log(urlName.name);

  if (!urlName.name === "undefined") {
    document.querySelector(".body").classList.add("singleBlog");
  } else {
    document.querySelector(".body").classList.remove("singleBlog");
  }

  let [loading] = useState(true);
  let [color] = useState("#36D7B7");

  return (
    <>
      <div className="d-flex justify-content-center container-fluid p-0">
        <Row className="all-row pb-3 m-0">
          <Col className="col-12">
            {data.postError && <Error />}
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-center blog-container">
        {data.isLoading ? (
          <Row className="spinner spinner-blog">
            <Col className="d-flex justify-content-center py-5">
              <HashLoader
                color={color}
                loading={loading}
                size={70}
                className="my-5"
              />
            </Col>
          </Row>
        ) : (
          <Row className="all-row pb-3">
            <div className="all-div pb-5">
              {data.post.map((count, index) => (
                <div className="card" key={index}>
                  <Link to={`/name/${count.name}`} className="Link">
                    <div className="flag-div">
                      <Image src={count.flags.png} />
                    </div>
                    <div className="Card-text text-black p-4">
                      <h5 className="fw-bold">{count.name}</h5>
                      <div className="pt-2 text_p">
                        Population: <span>{count.population}</span>
                      </div>
                      <div className="pt-1 text_p">
                        Region: <span>{count.region}</span>
                      </div>
                      <div className="pt-1 text_p capital-text">
                        Capital: <span>{count.capital}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Row>
        )}
      </div>
    </>
  );
}

export default Blogs;
