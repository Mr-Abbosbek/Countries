import React from 'react';
import './../style/Error.css';
// import './../style/media.css';

function Error() {
  return (
      <div className="container-fluid  p-0">
        <div className="row">
          <div className="col-12 p-0 d-flex justify-content-center">
            <div className="col-12 p-0 col-sm-offset-1  text-center m-0">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="content_box_404 py-2">
                <p className='m-0'>Slow or no internet connection.</p>
                <a href=" " className="link_404">
                  Refresh the page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Error;