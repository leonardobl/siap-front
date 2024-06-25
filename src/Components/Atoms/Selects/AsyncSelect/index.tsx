import React, { RefAttributes } from "react";
import * as S from "../styles";
import AsyncSelect, { AsyncProps } from "react-select/async";

import { GroupBase, components } from "react-select";

import Select from "react-select/dist/declarations/src/Select";
import { IoCloseOutline } from "react-icons/io5";
import { customSelectStyles } from "../CustomSelectStyles";

export function AsyncSimpleSelect<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: AsyncProps<Option, IsMulti, Group> &
    RefAttributes<Select<Option, IsMulti, Group>>
) {
  const myVariant = props.variant;

  const DropdownIndicator = (props) => {
    return !myVariant
      ? components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <img
              src="/assets/svg/icon-search.svg"
              alt="icone arrow"
              style={{ cursor: "pointer" }}
            />
          </components.DropdownIndicator>
        )
      : null;
  };

  const ClearIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.ClearIndicator {...props}>
          <IoCloseOutline
            size={20}
            style={{ cursor: "pointer", right: "-30px", position: "relative" }}
          />
        </components.ClearIndicator>
      )
    );
  };

  return (
    <S.Container data-custom-error={props?.customError}>
      {props.label && (
        <S.Label
          htmlFor={props?.inputId}
          data-custom-error={props?.customError}
        >
          {props.label}
          {props?.required && <S.Required>*</S.Required>}
        </S.Label>
      )}
      <AsyncSelect
        {...props}
        required={false}
        className="react-select-container"
        classNamePrefix="react-select"
        name={props.name}
        placeholder={props.placeholder || ""}
        components={{ DropdownIndicator, ClearIndicator }}
        // theme={(theme) => ({ ...theme, borderRadius: 10 })}
        styles={customSelectStyles}
      />
      {myVariant && (
        <S.IconSearch src="/assets/svgs/icon-search.svg" alt="icone lupa" />
      )}
    </S.Container>
  );
}
