import { LoginPage } from "./pages/LoginPage";
import { PreparePage } from "./pages/PreparePage";
import { TeamPage } from "./pages/TeamPage";
import { UserAuthProvider } from "./providers/AuthProvider";



export const routes = [
    {
        path: '/',
        element: <LoginPage/>
    },
    {
        path: '/team',
        element: <UserAuthProvider children={<TeamPage/>}/>
    },
    {
        path: '/prepare',
        element: <UserAuthProvider children={<PreparePage/>}/>
    },
]
