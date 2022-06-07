import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';

import { toggleCheckedValues } from '@shared/input-checkbox/helpers/toggle-checked-values';
import InputCheckbox from '@shared/input-checkbox/input-checkbox';
import { EvtCheckboxChange } from '@shared/input-checkbox/types';
import InputNumber from '@shared/input-number/input-number';
import InputRadio from '@shared/input-radio/input-radio';
import InputText from '@shared/input-text/input-text';
import Select from '@shared/select/select';
import { Option } from '@shared/select/types';
import { buildSelectOptions } from '@containers/example-form/helpers/build-select-options';
import { RadioValue } from '@containers/example-form/types';

function ExampleForm() {
  const [options] = useState<Option[]>(buildSelectOptions);

  const formik = useFormik({
    initialValues: {
      text: '',
      number: '',
      radioGroup: '',
      select: '',
      checkboxes: [],
    },
    validationSchema: Yup.object({
      text: Yup.string().required('Обязательное поле'),
      number: Yup.number().required('Обязательное поле'),
      radioGroup: Yup.string().required('Выберите значение'),
      select: Yup.string().required('Выберите значение'),
      checkboxes: Yup.array().min(1, 'Выберите хотя бы одно значение'),
    }),
    onSubmit: (values: FormikValues) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  const handleCheckboxChange = (evt: EvtCheckboxChange) => {
    formik.setFieldValue('checkboxes', toggleCheckedValues<string[]>(evt));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <ul>
        <li>
          <InputText
            id="text"
            name="text"
            value={formik.values.text}
            onChange={formik.handleChange}
          />
          {formik.touched.text && formik.errors.text && <p>{formik.errors.text}</p>}
        </li>
        <li>
          <InputNumber
            id="number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
          />
          {formik.touched.number && formik.errors.number && <p>{formik.errors.number}</p>}
        </li>
        <li>
          <InputRadio
            id="radio"
            value={RadioValue.Yes}
            name="radioGroup"
            checkedValue={formik.values.radioGroup}
            onRadioChange={formik.handleChange}
          >
            Yes
          </InputRadio>
          <InputRadio
            id="radio"
            value={RadioValue.No}
            name="radioGroup"
            checkedValue={formik.values.radioGroup}
            onRadioChange={formik.handleChange}
          >
            no
          </InputRadio>
          {formik.touched.radioGroup && formik.errors.radioGroup && (
            <p>{formik.errors.radioGroup}</p>
          )}
        </li>
        <li>
          <Select
            id="select"
            name="select"
            value={formik.values.select}
            options={options}
            onChange={formik.handleChange}
          />
          {formik.touched.select && formik.errors.select && <p>{formik.errors.select}</p>}
        </li>
        <li>
          <InputCheckbox
            id="checkbox1"
            name="checkboxes"
            value="checkbox1"
            onChange={handleCheckboxChange}
          >
            Checkbox1
          </InputCheckbox>
          <InputCheckbox
            id="checkbox2"
            name="checkboxes"
            value="checkbox2"
            onChange={handleCheckboxChange}
          >
            Checkbox2
          </InputCheckbox>
          <InputCheckbox
            id="checkbox3"
            name="checkboxes"
            value="checkbox3"
            onChange={handleCheckboxChange}
          >
            Checkbox3
          </InputCheckbox>
          {formik.touched.checkboxes && formik.errors.checkboxes && (
            <p>{formik.errors.checkboxes}</p>
          )}
        </li>
        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  );
}

export default ExampleForm;
