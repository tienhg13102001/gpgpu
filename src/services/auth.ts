import { request } from "@component/configs/axios";

const login = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/user/login`,
        ...options,
    });
    return data;
};

const signupVerification = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/user/signup/send-verification-code`,
        ...options,
    });
    return data;
};

const signup = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/user/signup`,
        ...options,
    });
    return data;
};

export { login, signupVerification, signup };
