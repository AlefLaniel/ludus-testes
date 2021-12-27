import React, { Component } from "react";

import { getToken, getIdProject } from "../../Services/auth";
import http from "../../Services/httpRequest";


import { Container, Content } from "./styles";

import UploadPdf from "../UploadPdf";
import FileListPdf from "../FileListPdf";

class SendPdfProject extends Component {
  state = {
    uploadedFiles: []
  };

  

  async componentDidMount() {
    const response = await http.get(`/project/${getIdProject()}`);
    const data = response.data;

    this.setState({
      uploadedFiles: data.project.pdfs.map(file => ({
        id: file._id,
        pdf_name: file.pdf_name,
        key: file.pdf_key,
        preview: file.pdf_url,
        uploaded: true,
        url: file.pdf_url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: file._id,
      pdf_name: file.pdf_name,
      key: file.key_url,
      pdf_url: URL.createObjectURL(file),
      uploaded: false,
      error: false,
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.pdf_name);

    function refreshPage(){ 
      window.location.reload(); 
    }

    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };

    http
      .put(`/project/sendpdf/${getIdProject()}`, data, config)
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
        refreshPage()
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };


  handleDelete = async key => {

    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };

   const data = this.state.uploadedFiles.filter(file => file.key === key);
   const datakey = data.map(file => file.key)

    const body = {
      pdf_key: datakey.toString()
    }

    console.log(data);
    console.log(body);
    await http.put(`/project/removepdf/${getIdProject()}`, body, config);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.key !== key)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.pdf_url));
  }

  render() {
    const { uploadedFiles } = this.state;

    return (
      <Container>
        <Content>
          <UploadPdf onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileListPdf files={uploadedFiles} onDelete={this.handleDelete} />
          )}
        </Content>
      </Container>
    );
  }
}

export default SendPdfProject;
