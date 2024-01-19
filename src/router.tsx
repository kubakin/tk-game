import { GamePage } from "./pages/GamePage";
import { PreparePage } from "./pages/PreparePage";
import { TeamPage } from "./pages/TeamPage";
import { UserAuthProvider } from "./providers/AuthProvider";

export const routes = [
  {
    path: "/prepare",
    element: <UserAuthProvider children={<PreparePage />} />,
  },
  {
    path: "/game",
    element: <UserAuthProvider children={<GamePage />} />,
  },
];
