export interface AuthState {
  loggedIn: boolean;
  loading: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  firstName: string | null;
  userEmail: string | null;
  accessToken: string | null;
}