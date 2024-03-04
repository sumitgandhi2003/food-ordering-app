import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const submithandle = (e) => {
        e.preventDefault();
        console.log(user);
    };
    return (
        <div className="login-container flex items-center h-full w-full justify-center">
            <div className="login-form w-96 ">
                <form
                    onSubmit={submithandle}
                    className=" flex flex-col justify-center items-center gap-3"
                >
                    <h1 className="form-heading text-3xl font-bold">
                        Login Form
                    </h1>
                    <div className="form-username">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={user.username}
                            onChange={inputHandle}
                        />
                    </div>
                    <div className="form-password">
                        <label htmlFor="password">Password</label>
                        <input
                            className="outline-none"
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={inputHandle}
                        />
                    </div>
                    <div className="form-btn w-fit">
                        <button type="submit" className="m-0">
                            Login Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
