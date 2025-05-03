import FirstSecClient from "../home-components/firstSecClient";
import AnnouncementClient from "../home-components/AnnouncementSection";
import FAQ from "../home-components/FAQS";
import About from "../home-components/about";
import MissionVision from "../home-components/MissionVision";
import ActiveAlertsSection from "../(user)/User-Main/user-home/user-alert/page";


export default function Home() {
  return (
    <>
    <main className="relative">
      <FirstSecClient/>
      <div className="w-[80%] mx-auto">
        <ActiveAlertsSection/>
      </div>
      <AnnouncementClient />
      <FAQ/>
      <About/>
      <MissionVision/>
      </main>
    </>
  );
}
