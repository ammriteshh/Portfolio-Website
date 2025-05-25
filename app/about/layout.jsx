import Footer from "@/components/Footer";

export const metadata = {
  title: "Amritesh Singh | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
