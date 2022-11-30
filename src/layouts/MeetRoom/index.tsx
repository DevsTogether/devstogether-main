import { ControlsBar } from "./ControlsBar/ControlsBar";
import { Main } from "./style";

export default function Layout() {
    return (
        <Main>
            <section className="meet-container chat-hidden">
                <div className="medias-container">

                </div>
                <div className="chat-container">

                </div>
            </section>
            <section className="controls-container">
                <ControlsBar />
            </section>
        </Main>
    );
}