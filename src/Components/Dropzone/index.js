import React from "react";

import { useDropzone } from "react-dropzone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Input } from "./style.js";

const Dropzone = ({ onDrop, accept, icon }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      {...getRootProps()}
    >
      <input className="dropzone-input" {...getInputProps()} />
      <Input className="text-center" active={isDragActive}>
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
                marginRight: "10px",
                fontSize: "1.25em",
              }}
            />
            <p className="dropzone-content">Solte para colocar os arquivos</p>
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
              border: "2px dashed",
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{
                color: "white",
                marginRight: "10px",
                fontSize: "1.25em",
              }}
            />
            <p className="dropzone-content">
              Puxe um arquivo ou clique para escolher arquivos do seu computador
            </p>
          </div>
        )}
      </Input>
    </div>
  );
};

export default Dropzone;
