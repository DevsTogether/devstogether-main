import { Button } from "@mui/material";
import Link from "next/link";
import { HeaderActionsStyle } from "./style";

export default function HeaderActions() {
    return (
        <HeaderActionsStyle>
            <Link href="/signup">
                <Button className="a2" variant="outlined" color="success">
                    SignUp
                </Button>
            </Link>
            <Link href="/signin">
                <Button className="a" variant="contained" color="success">
                    SignIn
                </Button>
            </Link>
        </HeaderActionsStyle>
    );
}