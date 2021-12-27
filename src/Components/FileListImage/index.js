import React from "react";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { CircularProgressbar }from "react-circular-progressbar";

import { Container, FileInfo, Preview } from "./styles";

const FileListImage = ({ files, onDelete }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.key}>
        <FileInfo>
          <Preview src={uploadedFile.url} />
          <div>
            <strong>{uploadedFile.image_name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}
              {!!uploadedFile.url && (
                <button onClick={() => onDelete(uploadedFile.key)}>
                  Excluir
                </button>
              )}
            </span>
          </div>
        </FileInfo>

        <div>
        {!uploadedFile.uploaded &&
            !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#7159c1" }
                }}
                strokeWidth={10}
                percentage={uploadedFile.progress}
              />
            )}


          {uploadedFile.url && (
            <a
              href={uploadedFile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}


          
          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {uploadedFile.error &&
          <div id="erroupload">
          <MdError size={24} color="#e57878" />
          <p>arquivo maior 2MB ou você não tem autorização</p>
          </div> 
          }
        </div>
      </li>
    ))}
  </Container>
);

export default FileListImage;
