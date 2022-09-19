import React, { HTMLInputTypeAttribute, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form } from "react-bootstrap";
import { useForm, UseFormRegister, Validate } from "react-hook-form";
import { styled } from "../configs";
import { Box } from "./Box";
import { Flex } from "./Flex";
import toast, { Toaster } from "react-hot-toast";

interface ContactFormFields {
  name: string;
  email: string;
  phonenumber: string;
  content: string;
  company?: string;
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
        <FormLabel htmlFor={field}>{label}</FormLabel>
        <FormInput ref={ref} id={field} name={field} type={type} {...props} />
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
  const [sent, setSend] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormFields>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phonenumber: "",
      content: "",
    },
  });

  const onSubmit = (value: ContactFormFields) => {
    const sendEmail = () => {
      return emailjs
        .send(
          "service_tl1s0ul",
          "template_t184q68",
          { ...value },
          "P_8ChotbXo0LYjaW2"
        )
        .then(() => {
          setSend(true);
        });
    };
    if (sent) {
      return toast.error("No permission");
    } else {
      toast.promise(sendEmail(), {
        loading: "Sending message",
        success: "Sent",
        error: "Fail",
      });
    }
  };
  return (
    <>
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
              field="company"
              {...register("company", {
                required: "This field is required.",
              })}
              error={errors.company?.message}
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
              field="phonenumber"
              {...register("phonenumber", {
                required: "This field is required.",
              })}
              error={errors.phonenumber?.message}
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
          <SubmitButton type="submit" disabled={sent}>
            Send Us
          </SubmitButton>
        </Flex>
      </Form>
    </>
  );
};
