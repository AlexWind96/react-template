import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

export const ControllerHF = (props) => {
  const {
    control,
    name,
    component: Component,
    shouldUnregister = false,
    defaultValue,
    ...rest
  } = props

  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value, ref }, fieldState, formState }) => {
        const meta = {
          error: fieldState.error,
          touched: fieldState.isTouched,
        }

        return (
          <Component
            onChange={onChange}
            onBlur={onBlur}
            fieldRef={ref}
            name={name}
            value={value}
            meta={meta}
            {...rest}
          />
        )
      }}
    />
  )
}

ControllerHF.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  component: PropTypes.any,
  shouldUnregister: PropTypes.bool,
  defaultValue: PropTypes.any,
}
