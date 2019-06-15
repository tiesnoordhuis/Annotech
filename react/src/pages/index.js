import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"
import Main from "../components/main"

export default () => (
  <div style={{ color: `teal` }}>
    <Head title={"Annotech"} />
    <Header />

    <Main /> 
    <Footer />
  </div>
)