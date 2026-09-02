import { createMetadata } from "@/lib/metadata";
import { FormPageLayout, ContactForm } from "@/components/forms/contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description: "Talk to the Social Budd team about agency plans, demos, and enterprise needs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <FormPageLayout
      title="Talk to sales"
      description="Tell us about your agency or team. We'll help you find the right plan."
    >
      <ContactForm />
    </FormPageLayout>
  );
}
