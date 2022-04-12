import React from "react";

const Experts = ({ experts }) => {
  const { img, name } = experts;

  return (
    <div class="card col-12 col-md-6 col-lg-3 m-3" style={{ width: "25rem" }}>
      <img src={img} class="card-img-top" alt="" />
      <div calssName="card-body">
        <h5 class="card-title mt-3">{name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary mb-3">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Experts;
