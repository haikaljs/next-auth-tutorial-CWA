import { CardWrapper } from "@/components/auth/card-wrapper";

export function LoginForm() {
  return (
    <div>
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Dont have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        Login form
      </CardWrapper>
    </div>
  );
}
