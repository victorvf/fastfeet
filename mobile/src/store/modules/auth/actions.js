export function signInRequest(id) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { id },
    };
}

export function signInSuccess(deliveryman) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { deliveryman },
    };
}

export function signInFailure() {
    return {
        type: '@auth/SIGN_IN_FAILURE',
    };
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT',
    };
}
