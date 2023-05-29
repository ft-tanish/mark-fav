import { useRouteError } from 'react-router-dom';

const Error = () => {

    const err = useRouteError();
    const { status, statusText } = err;
    return (
        <div style={{ marginTop: "3rem" }}>
            <h1>Oops!!</h1>
            <h2>Somethinh went Wrong</h2>
            <h3>{status + ":" + statusText}</h3>
            <h3>Please, Refresh Page</h3>
        </div>
    )
}

export default Error