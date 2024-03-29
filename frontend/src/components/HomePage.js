import React from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import CreateNetPage from "./CreateNetPage";
import DashboardPage from "./DashboardPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";


export default function HomePage(props) {

    function renderHomePage() {
        return (
            <Grid container alignItems="center" spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" compact="h3">
                        Build Your Custom Neural Network
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button collor="primary" to="/sign-up" component={Link}>
                            Sign Up
                        </Button>
                        <Button collor="secondary" to="/login" component={Link}>
                            Login
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }

    return (
        <Router>
            <Routes>
                <Route
                    exact path="/"
                    element={renderHomePage()}
                />
                <Route path="/sign-up" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create" element={<CreateNetPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
}


