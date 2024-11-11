import Navigation from "@/app/components/Navigation";
import Dock from "@/app/components/Dock";
import Main from "@/app/components/Main";

export default function Home() {

  return (
      <>
          <Navigation/>
          <main className={'fixed inset-0 w-screen h-screen bg-wallpaper'}>
              <section className={"z-100"}>
                  <Main/>
              </section>
              <Dock/>
          </main>
      </>
  );
}
