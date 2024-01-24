import Header from "@/components/Header";

export default function DefaultLayout({ children }) {


  return (
    <div>
      <Header />
      { children }
    </div>
  )
}
