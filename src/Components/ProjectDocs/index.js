import React, { useCallback, useState, useEffect } from "react";

import TopInsideBar from "../TopInsideBar";

import {
  Title,
  Wrapper,
  WrapCard,
  Header,
  Info,
  ProjectHeader,
  Image,
  Button,
  Input,
  Form,
} from "./style.js";
import {
  faFilePdf,
  faFileImage,
  faTrash,
  faEdit,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// import contextApi from "../../contextApi";
// import loadProjects from "../../Services/projectApi";
import Dropzone from "../Dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//const data = loadProjects();

const ProjectDocs = (props) => {
  let Anchors = [];
  let [activeInput, setActiveInput] = useState(false);
  let [newLink, setNewLink] = useState("");
  let [images, setImages] = useState([]);
  let [pdfs, setPdfs] = useState([]);
  let [links, setLinks] = useState(["http://localhost:3000/documentos"]);

  // const { projectID } = useContext(contextApi);

  // const projectData = data.filter((item) => {
  //   return item._id === projectID;
  // });

  // const project = projectData[0];

  //const HandleUpdate = () => {};

  //const HandleCreate = () => {};

  const HandleDelete = async (index) => {
    const newLinks = links;
    newLinks.splice(index, 1);
    setLinks([...newLinks]);
  };

  const HandleChange = (e) => {
    setNewLink(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLinks([...links, newLink]);
    setActiveInput(false);
    setNewLink("");
  };

  const onDrop = useCallback(
    (acceptedfiles) => {
      if (acceptedfiles.length === 0) {
        return null;
      }
      if (acceptedfiles[0].type === "application/pdf") {
        setPdfs([acceptedfiles.map((file) => file), ...pdfs]);
        return null;
      }
      setImages([
        ...images,
        acceptedfiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    },
    [setImages, images, setPdfs, pdfs]
  );

  const thumbs = images.map((file) => {
    return (
      <>
        <Image alt="teste" key={file[0].name} src={file[0].preview} />
        <p style={{ margin: "5px 0px 10px" }}>{file[0].name}</p>
      </>
    );
  });

  const pdfsFiles = pdfs.map((file) => {
    return (
      <div
        style={{
          margin: "10px",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          style={{
            color: "#e83f3f",
            marginRight: "5px",
            fontSize: "1.25em",
          }}
        />
        {file[0].name}
      </div>
    );
  });

  useEffect(() => {}, [images]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        background: "#f8f9fe",
      }}
    >
      <TopInsideBar Anchors={Anchors} />
      <Wrapper className="Wrapper">
        <ProjectHeader>
          <h1>{/*project.projectName*/}</h1>
        </ProjectHeader>
        <WrapCard className="WrapInfo">
          <Header>
            <Title>Descrição</Title>
          </Header>
          <Info>{/* <p>{project.projectDescription}</p> */}</Info>
        </WrapCard>
        <WrapCard className="WrapInfo">
          <Header>
            <Title>Links</Title>
          </Header>
          <Info>
            {links.length !== 0 ? (
              links.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "10px 0px",
                    }}
                  >
                    <a
                      href={`//${item}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item}
                    </a>
                    <div>
                      <Button
                        index={index}
                        color={"#5e72e4"}
                        onClick={() => HandleDelete(index)}
                        style={{ marginLeft: "15px" }}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ marginRight: "15px", fontSize: "1.0em" }}
                        />
                        Deletar
                      </Button>
                      <Button color={"#5e72e4"} style={{ margin: "0px 10px" }}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ marginRight: "15px", fontSize: "1.0em" }}
                        />
                        Editar
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Nenhum Link foi encontrado</p>
            )}
            <Form onSubmit={HandleSubmit} active={activeInput}>
              <Input
                value={newLink}
                onChange={HandleChange}
                placeholder={"coloque aqui o seu link"}
              />
              <Button
                style={{ marginLeft: "10px" }}
                type="submit"
                color={"#5e72e4"}
                side={true}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px", fontSize: "1.0em" }}
                />
              </Button>
            </Form>
            <div>
              <Button
                style={{
                  borderRadius: "50em",
                  padding: "15px 18px",
                  marginTop: "30px",
                }}
                color={"#2dce89"}
                onClick={() => setActiveInput(true)}
              >
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.25em" }} />
              </Button>
            </div>
          </Info>
        </WrapCard>
        <WrapCard className="WrapInfo">
          <Header>
            <Title>Imagens</Title>
          </Header>
          <Info>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {thumbs}
            </div>
            <Dropzone onDrop={onDrop} accept={"image/*"} icon={faFileImage} />
          </Info>
        </WrapCard>
        <WrapCard className="WrapInfo">
          <Header>
            <Title>PDF</Title>
          </Header>
          <Info>
            {pdfsFiles}
            <Dropzone
              onDrop={onDrop}
              accept={[".pdf", ".docx"]}
              icon={faFilePdf}
            />
          </Info>
        </WrapCard>
      </Wrapper>
    </div>
  );
};

export default ProjectDocs;
