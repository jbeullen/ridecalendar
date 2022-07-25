import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <AmplifyProvider>
            <App />
        </AmplifyProvider>
    </React.StrictMode>
);

reportWebVitals();