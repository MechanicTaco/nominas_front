import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

let schema = yup.object().shape({
  employee_code: yup
    .number("El codigo de empleado debe ser un numero")
    .required("El codigo de empleado es requerido"),
  name: yup.string().required("El nombre es requerido"),
  father_family_name: yup.string().required("El apellido paterno es requerido"),
  mother_family_name: yup.string().required("El apellido materno es requerido"),
  email: yup.string().email().required("El email es requerido"),
  contract_type: yup.string().required("El tipo de contrato es requerido"),
});

const EmployeeForm = (props) => {
  // const data = props.data || null;
  const readOnly = props.readOnly || false;
  const onSubmit = props.onSubmit || console.log("No submit");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: !!props.data
      ? props.data
      : {
          employee_code: "",
          name: "",
          father_family_name: "",
          mother_family_name: "",
          email: "",
          contract_type: "",
        },
  });

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div class="input-group flex-nowrap my-2">
        <input
          type="text"
          class="form-control"
          placeholder="Employee Code"
          name="employee_code"
          readOnly={readOnly}
          {...register("employee_code")}
        />
      </div>
      <p className="text-start text-danger p-0 m-0">
        {errors.employee_code?.message}
      </p>
      <div class="input-group flex-nowrap my-2">
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          name="name"
          readOnly={readOnly}
          {...register("name")}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Father family name"
          name="father_family_name"
          readOnly={readOnly}
          {...register("father_family_name")}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Mother family name"
          name="mother_family_name"
          readOnly={readOnly}
          {...register("mother_family_name")}
        />
      </div>
      <p className="text-start text-danger p-0 m-0">{errors.name?.message}</p>
      <p className="text-start text-danger p-0 m-0">
        {errors.father_family_name?.message}
      </p>
      <p className="text-start text-danger p-0 m-0">
        {errors.mother_family_name?.message}
      </p>
      <div className="input-group flex-nowrap my-2">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          name="email"
          readOnly={readOnly}
          {...register("email")}
        />
      </div>
      <p className="text-start text-danger p-0 m-0">{errors.email?.message}</p>
      <div class="input-group flex-nowrap my-2">
        <input
          type="text"
          class="form-control"
          placeholder="Contract type"
          name="contract_type"
          readOnly={readOnly}
          {...register("contract_type")}
        />
      </div>
      <p className="text-start text-danger p-0 m-0">
        {errors.contract_type?.message}
      </p>
      {!readOnly && (
        <div className="my-4">
          <button className="btn btn-primary" type="submit">
            {!!props.data ? 'Update' : 'Create'}
          </button>
        </div>
      )}
    </form>
  );
};

export default EmployeeForm;
