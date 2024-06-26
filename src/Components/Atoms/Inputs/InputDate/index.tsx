import React from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
  "data-error"?: boolean;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  return (
    <S.Container
      $showIcon={props.showIcon}
      data-error={props?.["data-error"] ? true : false}
    >
      <DatePicker
        {...props}
        required={false}
        placeholderText={""}
        // selected={value ? value : props.selected}
        onChange={(e, v) => {
          props.onChange(e, v);
        }}
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className="react-datepicker__navigation_wrapper">
            <button
              type="button"
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        dateFormat={"dd/MM/yyyy"}
        locale={"ptBR"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.22224 3.11032C1.81314 3.11032 1.48149 3.42528 1.48149 3.8138V13.6625C1.48149 14.051 1.81314 14.366 2.22224 14.366H12.5927C13.0018 14.366 13.3334 14.051 13.3334 13.6625V3.8138C13.3334 3.42528 13.0018 3.11032 12.5927 3.11032H2.22224ZM0 3.8138C0 2.64824 0.994931 1.70337 2.22224 1.70337H12.5927C13.82 1.70337 14.8149 2.64824 14.8149 3.8138V13.6625C14.8149 14.828 13.82 15.7729 12.5927 15.7729H2.22224C0.994931 15.7729 0 14.828 0 13.6625V3.8138Z"
              fill="#0B4A89"
            />
            <path
              d="M10.3706 1V3.81391"
              stroke="#0B4A89"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.44448 1V3.81391"
              stroke="#0B4A89"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 6.69824H13"
              stroke="#0B4A89"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      />
      {props.label && (
        <S.Label
          className={props?.["data-error"] ? "data-error" : ""}
          htmlFor={props?.id}
        >
          {props.label}
          {props.required && (
            <S.Required $isRequired={!!props.required}>*</S.Required>
          )}
        </S.Label>
      )}
    </S.Container>
  );
};
