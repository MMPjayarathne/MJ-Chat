import axios from "axios";
const BASE_URL =  import.meta.env.BASE_URL;
const Auth = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            `${BASE_URL}/authenticate`,
            { username: value }
        )
        props.onAuth({username:value, secret:value})
    }

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">
                    Welcome 🥰
                </div>

                <div className="form-subtitle">
                    Set a username to get started on MJ-Chat
                </div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">Enter</button>
                </div>
            </form>
        </div>
    );
}

export default Auth