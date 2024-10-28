import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/app/components/auth-button-server";
import { redirect } from "next/navigation";
import { PostLists } from "./components/posts-list";
import { type Database } from "./types/database";
import { ComposePost } from "./components/compose-post";
import LeftSidebar from "./components/leftSidebar";
import RightSidebar from "./components/rightSlider";

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
  console.log(
    organicSession,
    parsedOrganicSession,
    !data.session && !parsedOrganicSession,
    "acaacaca"
  );
  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(name, avatar_url, user_name)")
    .order("created_at", { ascending: false });

  const avatarUrl = data.session
    ? data.session.user?.user_metadata?.avatar_url
    : parsedOrganicSession?.avatar_url || "";

  const fullName = data.session
    ? data.session.user?.user_metadata?.name
    : parsedOrganicSession?.name || "";

  const usuario = data.session
    ? data.session.user?.user_metadata?.user_name
    : parsedOrganicSession?.user_name || "";

  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      {/* Sidebar izquierdo */}
      <section className="max-w-[400px] w-full min-h-screen flex items-center justify-center">
        <LeftSidebar
          fullName={fullName}
          usuario={usuario}
          avatar_url={avatarUrl}
          session={data.session}
        />
      </section>

      {/* Sección principal */}
      <section className="max-w-[600px] w-full border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={avatarUrl} />
        <PostLists posts={posts} />
      </section>

      {/* Sidebar derecho */}
      <section className="max-w-[400px] w-full min-h-screen flex items-center justify-center">
        <RightSidebar />
      </section>
    </main>
  );
}
