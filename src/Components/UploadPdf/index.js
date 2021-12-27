import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";

import {
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class UploadPdf extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui de até 2MB...
                <FontAwesomeIcon
                  icon={faFilePdf}
                  style={{ fontSize: "1.2em" }}
                />
              </UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept=".pdf" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
