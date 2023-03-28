import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { data } from "./data";

const ProductSlider = () => {

      let publicUrl = process.env.PUBLIC_URL + "/";

      const { id } = useParams();
      console.log(id);
      const filteredData = data.filter((item) => {
        return Object.values(item).includes(id);
      });
      console.log(filteredData);

     

    return
        }


export default ProductSlider;