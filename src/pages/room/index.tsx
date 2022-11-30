import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.location.href = "/room/531";
    });

    return (
        <>
            <h1>Carregando</h1>
        </>
    );
}
