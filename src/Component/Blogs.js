import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import { HashLoader } from "react-spinners";

function Blogs(data) {
  let [loading] = useState(true);
  let [color] = useState("#36D7B7");

  return (
    <div className="d-flex justify-content-center blog-container">
      {
        data.post.length
        ? <Row className="all-row">
        <div className="all-div">
          {data.post.map((count, index) => (
            <div className="card" key={index}>
              <Link to={`/name/${count.name}`} className="Link">
                <div className="flag-div">
                  <Image src={count.flags.png} />
                </div>
                <div className="Card-text text-black p-4">
                  <h5>{count.name}</h5>
                  <p className="pt-3">
                    Population: <span>{count.population}</span>
                  </p>
                  <p>
                    Region: <span>{count.region}</span>
                  </p>
                  <p>
                    capital: <span>{count.capital}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
          </Row>
        : <Row className="spinner spinner-blog">
            <Col className="d-flex justify-content-center py-5">
              <HashLoader color={color} loading={loading} size={70} className="my-5" />
            </Col>
          </Row>
      }
    </div>
  );
}

export default Blogs;
