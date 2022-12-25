import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

function App() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
      
    }

    return (
        <div className="App-header">
            <h1>Authentication Portal</h1>
            <div className="row mt-5">
                <div className="col-md-6 p-5">
                    <img
                        className="float-end"
                        src={logo}
                        alt={logo}
                        width="450"
                    />
                </div>
                <div className="col-md-6 my-auto bg-dark p-5 rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                value={user}
                                className="form-control"
                                placeholder="Enter Email"
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                value={password}
                                className="form-control"
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
