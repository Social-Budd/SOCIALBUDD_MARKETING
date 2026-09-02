import { createMetadata } from "@/lib/metadata";
import { FormPageLayout, StartForm } from "@/components/forms/contact-form";

export const metadata = createMetadata({
  title: "Start for free",
  description: "Create your free Social Budd account. No credit card required.",
  path: "/start",
});

export default function StartPage() {
  return (
    <FormPageLayout
      title="Start for free"
      description="Turn your next video into weeks of social content. Get started in minutes."
    >
      <StartForm />
    </FormPageLayout>
  );
}
