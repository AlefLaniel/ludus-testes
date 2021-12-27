import React from "react";

import { ImageModal } from './style';

const CustomImageInput = ({ url, onChange }) => {
    return (
      <ImageModal>
        <label htmlFor="file">
          <img src={url} alt="" />
        </label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(event) => onChange(event.target.files)}
        />
      </ImageModal>
    );
  };
  
  export default CustomImageInput;