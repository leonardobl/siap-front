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
            <img
              src="/assets/svg/icon-arrow-down-blue.svg"
              alt="icon arrow down"
            />
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
