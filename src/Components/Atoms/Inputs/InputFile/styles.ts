import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 440px;

  #drop_zone {
    border: 1px dashed #c1b2fa;
    width: 100%;
    height: 160px;
    background-color: #f3f0ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
  }

  .upload-drag-title {
    color: #7a5fec;
    font-size: 16px;
    font-weight: bold;
    margin-top: 12px;
  }

  .container-list-files {
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
  }

  .content-card-list-files:first-child {
    margin-bottom: 0;

    .thumb-image {
      position: relative;
      top: 43%;
      left: 20px;
      transform: translateY(-50%);
    }
  }

  .content-file {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    justify-content: center;
    height: fit-content;
    > div {
      margin: 0;
    }

    > div:last-child {
      max-width: 330px;
      width: 100%;
    }
  }

  .content-card-list-files {
    display: grid;
    /* align-items: center; */
    justify-content: flex-end;
    grid-template-columns: 48px 1fr;
    width: 100%;
    height: 72px;
    padding: 8px;
    gap: 12px;
    box-shadow: 0px 4px 16px #eae2fd;
    border-radius: 8px;
    background: #ffffff;
    position: relative;
    /* animation-name: example;
    animation-duration: 400ms; */
  }

  .file-title {
    line-height: 130%;

    color: #0b4a89;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
  }

  .file-size {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
  }

  .file-progress {
    width: 100%;
    height: 8px;
    display: grid;
    grid-template-columns: 1fr 32px;
    align-items: start;
    justify-items: center;
    gap: 20px;
  }

  .bar-progress {
    height: 8px;
    width: 100%;
    border-radius: 999px;
    background-color: #e3e3ed;
    overflow: hidden;
  }

  .file-progress-bg {
    background-color: #2082e3;
    height: 100%;
    transition: all ease-in 40ms;
    /* transition-delay: 40ms; */
  }

  .file-progress-bg.in_progress {
    background-color: #2082e3;
  }

  .file-progress-bg.finish_progress {
    background-color: #00e024;
  }

  .file-progress-bg.failed_progress {
    background-color: #e36363;
  }

  .count-progress {
    font-size: 12px;
    margin-top: -5px;
  }

  .handle-action-upload {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  @keyframes example {
    from {
      position: absolute;
      margin-top: -60px;
    }

    to {
      position: absolute;
      margin-top: 20px;
    }
  }
`;

export const WrapperInputFile = styled.div``;
export const DropPlusIcon = styled.img`
  cursor: pointer;
`;
export const DragDrop = styled.div`
  border-radius: 4px;
  /* border: 1px dashed #bbc2d1; */
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='blue' stroke-width='1' stroke-dasharray='20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 14px;
  border-radius: 16px;
  border-radius: 20px;
  border-radius: 6px;
  border-radius: 10px;
  border-radius: 12px;
  display: flex;
  gap: 0 8px;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;

  > p {
    color: #0b4a89;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;

    > span {
      font-weight: 600;
    }
  }
`;
