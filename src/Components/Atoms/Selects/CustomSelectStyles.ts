import { lighten } from "polished";
import { Theme } from "../../../Global/Theme";

const colors = Theme.colors;

export const customSelectStyles = {
  control: (base: any, state: { isFocused: any }) => ({
    ...base,

    // padding: "0 20px",

    minHeight: "36px",
    borderRadius: "12px",
    height: "36px",
    fontSize: "12px",
    borderColor: colors["gray-200"],
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: colors["gray-200"],
    },
  }),

  menu: (base: any, state: any) => ({
    ...base,
    width: "100%",
    zIndex: 2,
  }),
  menuList: (base: any, state: any) => ({
    ...base,
    // borderRadius: 12,
    borderColor: colors["gray-200"],
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "#2082E3",
  }),

  option: (styles: any, { isFocused, isSelected }: any) => ({
    // ...styles,
    backgroundColor: isFocused ? colors["blue-100"] : "transparent",
    color: isFocused ? colors.white : colors["blue-100"],
    fontSize: "12px",
    zindex: 2,
    padding: "10px 20px",
    cursor: "pointer",
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: "36px",
    padding: "0 6px",
  }),

  dropdownIndicator: (base, state) => {
    let changes = {};
    return Object.assign(base, changes);
  },
};
