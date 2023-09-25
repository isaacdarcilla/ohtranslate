import { Toaster } from "react-hot-toast"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Navigation from "./components/Navigation"

export default function Home() {
    return (
        <main className="leading-normal tracking-normal m-6 h-full">
            <Toaster/>
            <Navigation />
            <Card>
                <Form />
            </Card>
            <Footer />
        </main>
    )
}
