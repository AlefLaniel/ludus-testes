import React from "react";

import { useDropzone } from "react-dropzone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Input, Container } from "./style.js";

const Dropzone = ({ onDrop, accept, icon }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <Container
      {...getRootProps()}
    >
      <input className="dropzone-input" {...getInputProps()} />
      <Input className="text-center" id="input" active={isDragActive}>
        {isDragActive ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              border: "2px dashed",
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{
                color: "white",
                fontSize: "1.25em",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{
                color: "white",
                fontSize: "1.25em",
              }}
            />
          </div>
        )}
      </Input>
    </Container>
  );
};

export default Dropzone;
