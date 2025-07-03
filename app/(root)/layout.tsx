// import Navbar from "@/components/navbar-bk";
import {FancyFooter} from "@/components/footer";
import Navbar from "@/components/navbar";

export default function HomeLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main>
         <Navbar />
         <div>
            {children}
         </div>
         <FancyFooter />
      </main>
   );
}
