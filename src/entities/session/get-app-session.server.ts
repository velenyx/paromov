import { getServerSession } from "next-auth/next";
import { nextAuthConfig } from "./next-auth-config";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
