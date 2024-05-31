import styled from "styled-components";

export const Details = styled.details`
  position: relative;
  /* z-index: 2; */

  width: 100%;
  /* height: 44px; */
  border-radius: 10px;

  .summary-title {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    position: relative;
    z-index: 1;
  }

  &:hover {
    cursor: pointer;
  }

  .summary-content {
    cursor: default;
    padding-top: 24px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: space-around;
  }

  summary {
    list-style: none;
    position: relative;

    &:focus {
      outline: none;
    }
  }

  .summary-chevron-up,
  .summary-chevron-down {
    pointer-events: none;
    position: absolute;
    width: fit-content;
    height: max-content;
    right: 0;
    background-color: #fff;

    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: block;
    }
  }

  .summary-chevron-up {
    top: 60%;
    transform: translateY(-50%);
  }

  .summary-chevron-down {
    top: 12px;
    transform: translateY(-50%);
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;
