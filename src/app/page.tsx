"use client";
import MenuBar from "@/app/components/MenuBar";
import Dock from "@/app/components/Dock";
import Main from "@/app/components/Main";
import MenuProvider from "@/app/components/MenuProvider";

export default function Home() {

  return (
      <MenuProvider>
          <>
              <MenuBar/>
              <main className={'fixed inset-0 w-screen h-screen bg-wallpaper'}>
                  <section className={"z-100"}>
                      <Main/>
                  </section>
                  <Dock/>
              </main>
          </>
      </MenuProvider>
  );
}
