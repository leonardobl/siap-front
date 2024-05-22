import React, { Ref } from "react";
import * as S from "../styles";
import { lighten } from "polished";

import Select, {
  GroupBase,
  Props,
  SelectInstance,
  components,
} from "react-select";
import { IoCloseOutline } from "react-icons/io5";
import { Theme } from "../../../../Global/Theme";

export const SimpleSelect = React.forwardRef<SelectInstance, Props>(
  function ReactSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
  >(
    props: Props<Option, IsMulti, Group>,
    ref: Ref<SelectInstance<Option, IsMulti, Group>>
  ) {
    const myVariant = props.variant;
    const colors = Theme.colors;

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

    const customStyles = {
      control: (base: any, state: { isFocused: any }) => ({
        ...base,
        // background: myVariant === "modal" ? "#E1F2EE" : "#fff",
        background: "#fff",

        // match with the menu
        borderRadius: 10,
        // letterSpacing: 10,

        padding: "0 20px",
        fontFamily: "Mulish",
        // color: state.isSelected ? "red" : "blue",
        // Overwrittes the different states of border
        borderColor: colors["gray-200"],
        // fontWeight: 600,
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: colors["gray-200"],
        },
      }),

      menu: (base: any, state: any) => ({
        ...base,
        // override border radius to match the box
        width: "100%",
        // kill the gap
        // marginTop: 0,
        zIndex: 2,
      }),
      menuList: (base: any, state: any) => ({
        ...base,
        // kill the white space on first and last option
        // padding: 0,

        borderRadius: 10,
        borderColor: colors["gray-200"],
      }),
      singleValue: (provided: any, state: any) => ({
        ...provided,
        color: "#111",
      }),

      option: (styles: any, { isFocused, isSelected }: any) => ({
        // ...styles,
        backgroundColor: isFocused
          ? lighten(0.4, colors["blue-100"])
          : "transparent",
        color: "#111",
        // fontWeight: 600,
        // letterSpacing: 1,
        zindex: 2,
        padding: "10px 20px",
        cursor: "pointer",
        // paddingLeft: "20px",
        fontFamily: "Mulish",
      }),
      valueContainer: (provided: any, state: any) => ({
        ...provided,
      }),

      dropdownIndicator: (base, state) => {
        let changes = {
          padding: 0,
        };
        return Object.assign(base, changes);
      },
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
      <S.Container $isLabel={!!props.label}>
        {props.label && (
          <S.Label
            data-variant-modal={myVariant === "modal"}
            htmlFor={props.inputId}
          >
            {props.label}{" "}
            <S.Required $isRequired={!!props.required}>*</S.Required>
          </S.Label>
        )}
        <Select
          {...props}
          name={props.name}
          ref={ref}
          components={{ DropdownIndicator, ClearIndicator }}
          theme={(theme) => ({ ...theme, borderRadius: 10 })}
          styles={customStyles}
        />
      </S.Container>
    );
  }
);
