import Header from "../components/Header";

type Props =  {
  children: React.ReactNode;
}

const Layout = ({children} : Props) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Layout;