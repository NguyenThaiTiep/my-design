import React, { HTMLInputTypeAttribute } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, UseFormRegister, Validate } from "react-hook-form";
import { styled } from "../configs";
import { Flex } from "./Flex";

interface ContactFormFields {
  name: string;
  email: string;
  phoneNumber: string;
  content: string;
  companyName?: string;
}

const FormLabel = styled("label", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid #2C2B2B",
  padding: "$s24 $s8",
  borderRadius: 12,
  width: 500,
});
const FormInput = styled("input", {
  width: "100%",
  border: "4px solid #2C2B2B",
  padding: "$s24 $s32",
  borderRadius: 12,
});

const SubmitButton = styled("button", {
  backgroundColor: "#5A5A5A",
  color: "white",
  padding: "$s24 $s72 ",
  borderRadius: 12,
  boxShadow: "none",
  border: "none",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: 24,
});

interface FromGroupProps {
  label: string;
  field: keyof ContactFormFields;
  error?: string;
  type: HTMLInputTypeAttribute;
}
const FormGroup = React.forwardRef<HTMLInputElement, FromGroupProps>(
  ({ label, field, error, type }, ref) => {
    return (
      <Flex gap="s32">
        <FormLabel htmlFor={field}>{label}</FormLabel>
        <FormInput ref={ref} id={field} name={field} type={type} />
      </Flex>
    );
  }
);
FormGroup.displayName = "form-group";

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormFields>({
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      content: "",
    },
  });

  const onSubmit = (value: ContactFormFields) => {};
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="s16">
        <FormGroup
          label="お名前｜Your Name"
          field="name"
          type="email"
          {...register("name", { required: "This field is required." })}
          error={errors.name?.message}
        />
        <FormGroup
          type="text"
          label="会社名 | Company Name"
          field="companyName"
          {...register("companyName", { required: "This field is required." })}
          error={errors.name?.message}
        />
        <FormGroup
          type="email"
          label="メールアドレス｜Your E-mail"
          field="email"
          {...register("email", { required: "This field is required." })}
          error={errors.name?.message}
        />
        <FormGroup
          type="text"
          label="電話番号｜Your Phone Number"
          field="phoneNumber"
          {...register("phoneNumber", { required: "This field is required." })}
          error={errors.name?.message}
        />
        <FormGroup
          type="text"
          label="お問合わせ｜Your Contents"
          field="content"
          {...register("content", { required: "This field is required." })}
          error={errors.name?.message}
        />
      </Flex>
      <Flex mt="s32" jusity="center">
        <SubmitButton type="submit">Send Us</SubmitButton>
      </Flex>
    </Form>
  );
};
