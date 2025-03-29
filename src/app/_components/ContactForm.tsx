"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RainbowButton } from "@/components/ui/rainbow-button";

const formSchema = z.object({
  username: z.string().min(2),
  email: z.string(),
  message: z.string().min(5),
});

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!formRef.current) {
      toast.error("Form reference not found.");
      return;
    }

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceID = "service_1bu6uhf";
    const templateID = "template_l48lszd";
    const publicKey = "wzEKWpTt3HBv5Iymn";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 font-nunito"
      >
        <h3 className="font-poppins text-2xl font-medium">Fill Your Details</h3>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                {/* Add name attribute for EmailJS */}
                <Input
                  placeholder="Enter your name"
                  type="text"
                  {...field}
                  name="username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                {/* Add name attribute for EmailJS */}
                <Input
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                  name="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                {/* Add name attribute for EmailJS */}
                <Textarea
                  placeholder="Drop you message"
                  className="resize-none"
                  {...field}
                  name="message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <RainbowButton type="submit" className="font-bold">
          Submit
        </RainbowButton>
      </form>
    </Form>
  );
}
