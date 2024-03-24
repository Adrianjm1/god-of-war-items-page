import { BackgroundContainer } from "../components/BackgroundContainer/BackgroundContainer"
import { Container } from "../components/container/Container"
import { Currencies } from "../components/currencies/Currencies"
import { Footer } from "../components/footer/Footer"
import { Navbar } from "../components/navbar/Navbar"

export const MainView = () => {


    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <BackgroundContainer>
                <Container />
            </BackgroundContainer>
            <Currencies />
            <Footer />
        </div>
    )
}

