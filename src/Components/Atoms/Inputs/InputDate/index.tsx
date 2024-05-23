import React from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
  "data-error"?: boolean;
  isLoading?: boolean;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  return (
    <S.Container $showIcon={props.showIcon}>
      {props.label && (
        <S.Label className={props?.["data-error"] ? "data-error" : ""}>
          {props.label}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      {props.isLoading && (
        <S.ImgLoad src="/assets/svgs/dots-load.svg" alt="svg load" />
      )}
      <DatePicker
        {...props}
        className={props?.["data-error"] ? "data-error" : ""}
        disabled={props.isLoading ? true : props.disabled}
        placeholderText={props.isLoading ? "" : props.placeholderText}
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
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.3594 0.875H11.9219V0H10.8281V0.875H7.54688V0H6.45312V0.875H3.17188V0H2.07812V0.875H1.64062C0.735984 0.875 0 1.61098 0 2.51562V4.15625V5.25V12.3594C0 13.264 0.735984 14 1.64062 14H10.3984L14 10.3984V5.25V4.15625V2.51562C14 1.61098 13.264 0.875 12.3594 0.875ZM10.7188 12.1329V11.2656C10.7188 10.9641 10.9641 10.7188 11.2656 10.7188H12.1329L10.7188 12.1329ZM12.9062 9.625H11.2656C10.361 9.625 9.625 10.361 9.625 11.2656V12.9062H1.64062C1.33908 12.9062 1.09375 12.6609 1.09375 12.3594V5.25H12.9062V9.625ZM1.09375 4.15625V2.51562C1.09375 2.21408 1.33908 1.96875 1.64062 1.96875H2.07812V3.0625H3.17188V1.96875H6.45312V3.0625H7.54688V1.96875H10.8281V3.0625H11.9219V1.96875H12.3594C12.6609 1.96875 12.9062 2.21408 12.9062 2.51562V4.15625H1.09375Z"
              fill="#0B4A89"
            />
            <path
              d="M3.11035 6.92236H3.88813V7.70014H3.11035V6.92236Z"
              fill="#0B4A89"
            />
            <path
              d="M6.22266 6.92236H7.77821V7.70014H6.22266V6.92236Z"
              fill="#0B4A89"
            />
            <path
              d="M10.1104 6.92236H10.8881V7.70014H10.1104V6.92236Z"
              fill="#0B4A89"
            />
            <path
              d="M3.11035 9.25537H3.88813V10.0331H3.11035V9.25537Z"
              fill="#0B4A89"
            />
            <path
              d="M6.22266 9.25537H7.77821V10.0331H6.22266V9.25537Z"
              fill="#0B4A89"
            />
            <path
              d="M3.11035 11.5884H3.88813V12.3662H3.11035V11.5884Z"
              fill="#0B4A89"
            />
            <path
              d="M6.22266 11.5884H7.77821V12.3662H6.22266V11.5884Z"
              fill="#0B4A89"
            />
          </svg>
        }
      />
    </S.Container>
  );
};
