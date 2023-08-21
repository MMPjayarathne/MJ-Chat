

const AuthPage = (props) => {
   
    return (
        <div className="background">
            <form className="form-card">
                <div className="form-title">
                    Welcome 👋
                </div>

                <div className="form-subtitle">
                    Set a username to get started
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

export default AuthPage