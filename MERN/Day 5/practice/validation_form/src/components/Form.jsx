import React, { useReducer } from 'react';
import Display from './Display'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <fieldset>
            <form >
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        firstName="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                ...
                 (
                ...
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
                ...
                )

            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        lastName="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
                ...
                (
                ...
                {state.lastName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
                ...
                );

            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
                ...
                (
                ...
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
                ...
                )

            </div>
        </div>
        </form>
        <Display user={initialState}/>
        </fieldset>
    );
}