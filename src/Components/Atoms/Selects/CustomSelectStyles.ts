import { Theme } from "../../../Global/Theme";

const colors = Theme.colors;

export const customSelectStyles = {
  control: (base: any, state: { isFocused: any }) => ({
    ...base,

    padding: "0 0 0 8px",

    minHeight: "36px",
    borderRadius: "12px",
    height: "auto",
    fontSize: "12px",
    letterSpacing: "1px",
    borderColor: state.isFocused ? colors["blue-100"] : colors["gray-200"],
    boxShadow: state.isFocused ? null : null,
    // "&:hover": {
    //   borderColor: colors["gray-200"],
    // },
  }),

  multiValue: (props) => ({
    ...props,
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
    color: colors["blue-300"],
  }),

  option: (styles: any, { isFocused, isSelected }: any) => ({
    // ...styles,
    backgroundColor: isFocused ? colors["blue-100"] : "transparent",
    color: isFocused ? colors.white : colors["gray-200"],
    fontSize: "12px",
    zindex: 2,
    padding: "10px 20px",
    cursor: "pointer",
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: "auto",
    padding: "0 6px",
  }),

  dropdownIndicator: (base, state) => {
    let changes = {};
    return Object.assign(base, changes);
  },
};
