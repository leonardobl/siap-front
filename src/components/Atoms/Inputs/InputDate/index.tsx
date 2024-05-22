import React from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
  isLoading?: boolean;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  return (
    <S.Container $showIcon={props.showIcon}>
      {props.label && (
        <S.Label>
          {props.label}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      {props.isLoading && (
        <S.ImgLoad src="/assets/svgs/dots-load.svg" alt="svg load" />
      )}
      <DatePicker
        {...props}
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
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M16.2 1.2H14.4V0.6C14.4 0.268652 14.1313 0 13.8 0C13.4687 0 13.2 0.268652 13.2 0.6V1.2H4.8V0.6C4.8 0.268652 4.53135 0 4.2 0C3.86865 0 3.6 0.268652 3.6 0.6V1.2H1.8C0.807422 1.2 0 2.00742 0 3V16.2C0 17.1926 0.807422 18 1.8 18H16.2C17.1926 18 18 17.1926 18 16.2V3C18 2.00742 17.1926 1.2 16.2 1.2ZM1.8 2.4H3.6C3.6 2.73135 3.86865 3 4.2 3C4.53135 3 4.8 2.73135 4.8 2.4H13.2C13.2 2.73135 13.4687 3 13.8 3C14.1313 3 14.4 2.73135 14.4 2.4H16.2C16.5308 2.4 16.8 2.66924 16.8 3V4.8H1.2V3C1.2 2.66924 1.46924 2.4 1.8 2.4ZM16.2 16.8H1.8C1.46924 16.8 1.2 16.5308 1.2 16.2V6H16.8V16.2C16.8 16.5308 16.5308 16.8 16.2 16.8ZM5.4 8.4C5.4 8.73135 5.13135 9 4.8 9H3.6C3.26865 9 3 8.73135 3 8.4C3 8.06865 3.26865 7.8 3.6 7.8H4.8C5.13135 7.8 5.4 8.06865 5.4 8.4ZM10.2 8.4C10.2 8.73135 9.93135 9 9.6 9H8.4C8.06865 9 7.8 8.73135 7.8 8.4C7.8 8.06865 8.06865 7.8 8.4 7.8H9.6C9.93135 7.8 10.2 8.06865 10.2 8.4ZM15 8.4C15 8.73135 14.7313 9 14.4 9H13.2C12.8687 9 12.6 8.73135 12.6 8.4C12.6 8.06865 12.8687 7.8 13.2 7.8H14.4C14.7313 7.8 15 8.06865 15 8.4ZM5.4 11.4C5.4 11.7313 5.13135 12 4.8 12H3.6C3.26865 12 3 11.7313 3 11.4C3 11.0687 3.26865 10.8 3.6 10.8H4.8C5.13135 10.8 5.4 11.0687 5.4 11.4ZM5.4 14.4C5.4 14.7313 5.13135 15 4.8 15H3.6C3.26865 15 3 14.7313 3 14.4C3 14.0687 3.26865 13.8 3.6 13.8H4.8C5.13135 13.8 5.4 14.0687 5.4 14.4ZM10.2 11.4C10.2 11.7313 9.93135 12 9.6 12H8.4C8.06865 12 7.8 11.7313 7.8 11.4C7.8 11.0687 8.06865 10.8 8.4 10.8H9.6C9.93135 10.8 10.2 11.0687 10.2 11.4ZM10.2 14.4C10.2 14.7313 9.93135 15 9.6 15H8.4C8.06865 15 7.8 14.7313 7.8 14.4C7.8 14.0687 8.06865 13.8 8.4 13.8H9.6C9.93135 13.8 10.2 14.0687 10.2 14.4ZM15 11.4C15 11.7313 14.7313 12 14.4 12H13.2C12.8687 12 12.6 11.7313 12.6 11.4C12.6 11.0687 12.8687 10.8 13.2 10.8H14.4C14.7313 10.8 15 11.0687 15 11.4ZM15 14.4C15 14.7313 14.7313 15 14.4 15H13.2C12.8687 15 12.6 14.7313 12.6 14.4C12.6 14.0687 12.8687 13.8 13.2 13.8H14.4C14.7313 13.8 15 14.0687 15 14.4Z"
              fill="#E84E1B"
            />
          </svg>
        }
      />
    </S.Container>
  );
};
