import React, { Ref } from "react";
import * as S from "../styles";

import Select, {
  GroupBase,
  PlaceholderProps,
  Props,
  SelectInstance,
  components,
} from "react-select";
import { IoCloseOutline } from "react-icons/io5";

import { customSelectStyles } from "../CustomSelectStyles";

export const SimpleSelect = React.forwardRef<SelectInstance, Props>(
  function ReactSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
  >(
    props: Props<Option, IsMulti, Group>,
    ref: Ref<SelectInstance<Option, IsMulti, Group>>
  ) {
    const ClearIndicator = (props) => {
      return (
        components.DropdownIndicator && (
          <components.ClearIndicator {...props}>
            <IoCloseOutline
              size={20}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
            />
          </components.ClearIndicator>
        )
      );
    };

    const DropdownIndicator = (props) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="4"
              viewBox="0 0 9 4"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.128644 0.204733C0.331143 -0.0305027 0.70051 -0.0686409 0.953643 0.119547L4.49998 2.75606L8.04636 0.119547C8.29953 -0.0686409 8.66885 -0.0305027 8.87138 0.204733C9.07384 0.439961 9.03284 0.783195 8.77966 0.971413L4.86663 3.88049C4.65228 4.03984 4.34769 4.03984 4.13333 3.88049L0.22031 0.971413C-0.0328238 0.783195 -0.0738635 0.439961 0.128644 0.204733Z"
                fill="#1D1D1B"
              />
            </svg>
          </components.DropdownIndicator>
        )
      );
    };

    return (
      <S.Container>
        <Select
          {...props}
          ref={ref}
          placeholder={""}
          components={{ DropdownIndicator, ClearIndicator }}
          className="react-select-container"
          classNamePrefix="react-select"
          styles={customSelectStyles}
        />
        {props?.label && (
          <S.Label htmlFor={props.inputId}>
            {props.label}
            {props.required && <S.Required>*</S.Required>}
          </S.Label>
        )}
      </S.Container>
    );
  }
);
