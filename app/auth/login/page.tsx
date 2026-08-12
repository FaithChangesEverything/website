import LoginForm from "./LoginForm";

type LoginPageProps = {
  searchParams: Promise<{
    message?: string;
  }>;
};

export default async function LoginPage({
  searchParams,
}: LoginPageProps) {
  const params = await searchParams;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f2e8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "460px",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px 0",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontSize: "30px",
            color: "#173A63",
          }}
        >
          Faith Changes Everything
        </h1>

        <h2
          style={{
            margin: "0 0 30px 0",
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontSize: "20px",
            fontWeight: 400,
            color: "#C39A3A",
          }}
        >
          My Bible Journal
        </h2>

        <LoginForm message={params.message} />
      </section>
    </main>
  );
}