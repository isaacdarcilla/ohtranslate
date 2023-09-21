import Card from "./components/Card"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Navigation from "./components/Navigation"

export default function Home() {
    return (
        <main className="leading-normal tracking-normal text-indigo-400 m-6">
            <div className="h-full">
                <Navigation />
                <Card>
                    <Form/>
                </Card>
                <Footer/>
            </div>
        </main>
    )
}
