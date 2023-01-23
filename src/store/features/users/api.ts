import { authForm, IUserData } from "../auth";
import { api } from "../api/api";

interface IResponse<T> {
  status: string;
  data: T;
}
export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    addUser: build.mutation<authForm, Partial<authForm>>({
      query(body) {
        return {
          url: "/users",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    getUser: build.query<IResponse<IUserData>, IUserData>({
      query: (name) => "/users?page=1&pageSize=10",
    }),
    deleteUser: build.mutation<authForm, Partial<authForm>>({
      query(body) {
        return {
          url: "/users",
          method: "DELETE",
          body,
        };
      },

      invalidatesTags: ["Posts"],
    }),
    updateUser: build.mutation<authForm, Partial<authForm>>({
      query(body) {
        return {
          url: "/users",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = postApi;
