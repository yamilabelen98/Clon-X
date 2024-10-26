import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/app/components/auth-button-server";
import { redirect } from "next/navigation";
import { PostLists } from "./components/posts-list";
import { type Database } from "./types/database";
import { ComposePost } from "./components/compose-post";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.getSession();

  // Usar cookies en lugar de localStorage
  const organicSession = cookies().get("organicSession")?.value;
  const parsedOrganicSession = organicSession
    ? JSON.parse(organicSession)
    : null;
  if (!data.session && !parsedOrganicSession) {
    redirect("/login");
  }
  console.log(organicSession, parsedOrganicSession, "acaacaca");
  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(name, avatar_url, user_name)")
    .order("created_at", { ascending: false });

  const avatarUrl = data.session
    ? data.session.user?.user_metadata?.avatar_url
    : parsedOrganicSession.avatar_url || "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={avatarUrl} />
        <PostLists posts={posts} />
      </section>
      <AuthButtonServer />
    </main>
  );
}
