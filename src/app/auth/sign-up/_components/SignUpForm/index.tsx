"use client";
import { Envelope, Google } from "@component/constants/Icon";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import "./index.scss";
import Link from "next/link";

const EmailSignUp: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <h1>Sign up</h1>

            <Text className="terms-text">
                By logging in to GPGPU, <br />
                you agree to Terms of Service and Privacy Policy.
            </Text>

            <div className="form-button">
                <Button
                    icon={<Google />}
                    text="Google Sign up"
                    onClick={() => {
                        /* Handle Google sign up */
                    }}
                />
                <Button
                    icon={<Envelope />}
                    text="Email Sign up"
                    onClick={() => {
                        /* Handle Email sign up */
                        router.push("/auth/sign-up?isEmail=true");
                    }}
                />
            </div>
        </>
    );
};

export default EmailSignUp;
