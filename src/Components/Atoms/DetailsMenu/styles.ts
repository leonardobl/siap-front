import styled from "styled-components";

export const Details = styled.details`
  width: 100%;
  padding: 0 40px;
  transition: padding 0.3s ease-in-out;

  @keyframes flexAnimateOpen {
    to {
      align-items: start;
    }
  }

  @keyframes flexAnimateClose {
    to {
      align-items: center;
    }
  }

  @keyframes textVisibilit {
    to {
      opacity: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 0 10px;
    &[data-openmenu="true"] {
      padding: 0 40px;

      .summary-content {
        animation: flexAnimateOpen 0.3s forwards;

        span {
          animation: textVisibilit 0.3s forwards 0.1s;
          display: block;
        }
      }
    }
  }

  .summary-title {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    position: relative;
  }

  &:hover {
    cursor: pointer;
  }

  &[open] {
    .summary-chevron img#summary-chevron-up {
      display: none;
    }

    .summary-chevron img#summary-chevron-down {
      display: block;
    }
  }

  .summary-content {
    cursor: default;

    padding-top: 24px;
    display: flex;
    gap: 24px 0;
    flex-direction: column;
    align-items: start;
    transition: all 0.3s ease-in-out;

    > a {
      display: flex;
      gap: 0 10px;
      align-items: start;
      padding: 6px 8px;

      img {
        display: block;
      }

      span {
        color: #5d7281;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        display: block;
        white-space: nowrap;
      }
    }

    > a.active {
      border-radius: 6px;
      background: #dcedff;

      img {
        filter: brightness(0) saturate(100%) invert(21%) sepia(91%)
          saturate(1251%) hue-rotate(188deg) brightness(91%) contrast(96%);
      }

      span {
        color: #0b4a89;
        font-weight: 500;
      }
    }

    @media (min-width: ${(props) => props.theme.screens.lg}) {
      animation: flexAnimateClose 0.3s forwards;
      align-items: center;

      > a:hover {
        img {
          filter: brightness(0) saturate(100%) invert(21%) sepia(91%)
            saturate(1251%) hue-rotate(188deg) brightness(91%) contrast(96%);
        }

        span {
          color: #0b4a89;
          font-weight: 500;
        }
      }

      > a {
        span {
          opacity: 0;
          display: none;
        }
      }
    }
  }

  summary {
    list-style: none;
    position: relative;
    display: flex;
    justify-content: space-between;

    &:focus {
      outline: none;
    }
  }

  .summary-chevron {
    pointer-events: none;
    position: relative;
    width: fit-content;
    height: max-content;
    width: 22px;
    height: 22px;

    img {
      position: absolute;
      right: 0;
      top: 60%;

      transform: translateY(-50%);
    }

    img#summary-chevron-up {
      display: block;
    }

    img#summary-chevron-down {
      display: none;
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;
