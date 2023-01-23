import { authForm } from ".";
import { api } from "../api/api";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<authForm, Partial<authForm>>({
      query(body) {
        return {
          url: "/auth/local/register",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    signin: build.mutation<authForm, Partial<authForm>>({
      query(body) {
        return {
          url: "/auth/local",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    emailVerification: build.mutation<authForm, Partial<authForm>>({
      query(body) {
        return {
          url: "/auth/send-email-confirmation",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useEmailVerificationMutation,
} = postApi;
