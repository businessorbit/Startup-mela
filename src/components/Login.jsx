import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../components/firebase/firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successfully signed in
                alert("Success! User signed in");
                console.log("User:", userCredential.user);
            })
            .catch((error) => {
                // Handle errors
                alert("Error: " + error.message);
                console.error("Error signing in:", error);
            });
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                alert("Success! Signed in with Google");
                console.log("User:", result.user);
            })
            .catch((error) => {
                alert("Error: " + error.message);
                console.error("Error signing in with Google:", error);
            });
    }

    const resetPassword = () => {
        if (!email) {
            alert("Please enter your email address first");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent! Check your inbox.");
                setShowForgotPassword(false);
            })
            .catch((error) => {
                alert("Error: " + error.message);
                console.error("Error sending reset email:", error);
            });
    }

    return (
        <div className="min-h-screen bg-[#E7E7E7] flex items-center justify-center py-12 mt-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-gray-600">
                        Sign in to your account to continue
                    </p>
                </div>

                {/* Google Sign-in Button */}
                <button 
                    onClick={signInWithGoogle}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 mb-6 border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign-In with Google
                </button>

                {/* Divider */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">or</span>
                    </div>
                </div>

                {/* Email Input */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        type="email" 
                        required 
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        type="password" 
                        required 
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="mb-6 text-right">
                    <button 
                        onClick={() => setShowForgotPassword(!showForgotPassword)}
                        className="text-sm text-[#40403E] hover:text-black font-medium transition-colors duration-200"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* Forgot Password Section */}
                {showForgotPassword && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-gray-700 mb-3">
                            Enter your email address and we'll send you a password reset link.
                        </p>
                        <button 
                            onClick={resetPassword}
                            className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Reset Email
                        </button>
                    </div>
                )}

                {/* Sign In Button */}
                <button 
                    onClick={loginUser}
                    className="w-full bg-[#BFBFBD] hover:text-white hover:bg-[#40403E] text-[#40403E] font-semibold py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                    Sign In
                </button>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/register" className=" text-[#40403E] hover:text-black font-medium transition-colors duration-200">
                            Create account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;