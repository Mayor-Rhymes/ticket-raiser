import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  username: string;
}

interface Session {
  id: string;
  userId: string;
  expiresAt: string;
}

interface Auth {
  message: string;
  user: User | null;
  session: Session | null;
}

interface AuthState {
  user: User | null;
  login: (id: string, email: string, username: string) => void;
  signout: () => void;
}

export const useUserStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      login: (id, email, username) =>
        set(() => ({
          user: {
            id: id,
            email: email,
            username: username,
          },
        })),
      signout: () =>
        set(() => ({
          user: null,
        })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
