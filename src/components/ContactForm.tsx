import React, { HTMLInputTypeAttribute } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, UseFormRegister, Validate } from "react-hook-form";
import { styled } from "../configs";
import { Box } from "./Box";
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
  textAlign: "center",
  border: "4px solid #2C2B2B",
  padding: "$s24 $s8",
  borderRadius: 12,
  width: 585,
  variants: {
    error: {
      true: {
        borderColor: "#eb9090",
      },
    },
  },
});
const FormInput = styled("input", {
  width: "100%",
  border: "4px solid #2C2B2B",
  padding: "$s24 $s32",
  borderRadius: 12,
  variants: {
    error: {
      true: {
        borderColor: "#eb9090",
      },
    },
  },
});

const SubmitButton = styled("button", {
  backgroundColor: "#5A5A5A",
  color: "white",
  padding: "$s16   $s72 ",
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
  ({ label, field, error, type, ...props }, ref) => {
    return (
      <Flex
        gap={{ "@initial": "s16", "@xl": "s32" }}
        wrap={{ "@initial": "wrap", "@lg": "nowrap" }}
        block
      >
        <FormLabel htmlFor={field} error={!!error}>
          {label}
        </FormLabel>
        <FormInput
          ref={ref}
          id={field}
          name={field}
          type={type}
          error={!!error}
          {...props}
        />
      </Flex>
    );
  }
);
FormGroup.displayName = "form-group";

const FormContactWrapper = styled(Box, {
  position: "relative",
  "&:before": {
    content: "",
    position: "absolute",
    width: 5,
    height: "80%",
    backgroundColor: "$textColor",
    left: 0,
    top: "10%",
    borderRadius: 10,
  },
  "&:after": {
    content: "",
    position: "absolute",
    width: 5,
    height: "80%",
    backgroundColor: "$textColor",
    right: 0,
    top: "10%",
    borderRadius: 10,
  },
  form: {
    flexGrow: 1,
  },
});

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
      <FormContactWrapper px={{ "@xl": "s48", "@initial": "s16" }}>
        <Flex
          direction="column"
          gapY="s16"
          gapX={{ "@initial": "s8", "@xl": "s16" }}
        >
          <FormGroup
            label="お名前｜Your Name"
            field="name"
            type="text"
            {...register("name", { required: "This field is required." })}
            error={errors.name?.message}
          />
          <FormGroup
            type="text"
            label="会社名 | Company Name"
            field="companyName"
            {...register("companyName", {
              required: "This field is required.",
            })}
            error={errors.companyName?.message}
          />
          <FormGroup
            type="email"
            label="メールアドレス｜Your E-mail"
            field="email"
            {...register("email", { required: "This field is required." })}
            error={errors.email?.message}
          />
          <FormGroup
            type="text"
            label="電話番号｜Your Phone Number"
            field="phoneNumber"
            {...register("phoneNumber", {
              required: "This field is required.",
            })}
            error={errors.phoneNumber?.message}
          />
          <FormGroup
            type="text"
            label="お問合わせ｜Your Contents"
            field="content"
            {...register("content", { required: "This field is required." })}
            error={errors.content?.message}
          />
        </Flex>
      </FormContactWrapper>
      <Flex mt="s32" jusity="center">
        <SubmitButton type="submit">Send Us</SubmitButton>
      </Flex>
    </Form>
  );
};
