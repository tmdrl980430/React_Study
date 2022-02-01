
const Login = () => {
    return (
        <form class="hidden" id="login-form">
            <input required maxlength="15" type="text" placeholder="What is your name?" />
            <input type="submit" value="Log In" />
        </form>
    );
}

export default Login;
