import supabase from "@/modules/supabase/components/client";

export async function registerUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  return { data, error };
}

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export function handleLoginSuccess() {
  window.location.reload();
}

export async function handleRegisterSuccess(email: string, password: string) {
  const { data, error } = await loginUser(email, password);

  if (error) {
    return;
  }

  if (data.session) {
    window.location.href = "/auth/success";
  }
}

export async function handleLogOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return;
  }

  window.location.href = "/";
}
