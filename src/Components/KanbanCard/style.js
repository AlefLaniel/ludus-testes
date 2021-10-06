import styled, { css } from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 2px 2px 4px 0 rgb(0 2 2);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -25px;
    left: 15px;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 20px);

    div {
      transform: translateY(-2px);
    }

    svg {
      transform: translateY(-2px);
      cursor: pointer;
    }
  }

  p {
    font-weight: 500;
    line-height: 20px;
    overflow-wrap: break-word;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
    object-fit: cover;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0px;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}

  ${(props) =>
    props.isDragged &&
    css`
      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  transform: translateX(-4px);
  border-radius: 2px;
  display: inline-block;
  background: ${({ color }) => color};
`;

export const StoryLine = styled.div`
  background: ${(props) => props.background};
  width: 100%;
  height: 2px;
`;

export const DateTime = styled.div`
  display: flex;
  margin: 8px 0px;
  background: #ececec;
  width: 100%;
  justify-content: center;
  border-radius: 20px;
  font-size: 13px;
  padding: 6px;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
